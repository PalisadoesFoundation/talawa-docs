#!/usr/bin/env python3

# Standard imports
from urllib.request import urlopen
import json
from collections import namedtuple, defaultdict
import time
import argparse
import os
import sys
import csv
from pprint import pprint

RepoStar = namedtuple("RepoStar", "username repo")
RepoFork = namedtuple("RepoFork", "username repo")
UserProfile = namedtuple("UserProfile", "name username email")
UserDetail = namedtuple("UserDetail", "username stars forks name email")


def fork_users(org, repo, delay=60, verbose=False):
    """Get the users who have forked a repo.

    Args:
        org: The organization
        repo: The repository under the organization
        delay: Delay in seconds between queries to avoid rate limiting error
        verbose: Verbose output if True

    Returns:
        result: List of RepoFork objects

    """
    # Initialize key variables
    pages = 100
    result = []

    # Print status
    print('Getting fork users for repo "{}"'.format(repo))

    # Extract the data
    for page in range(1, pages):
        # Create the query URL
        url = (
            "http://api.github.com/repos/"
            "{u}/{r}/forks?per_page=100&page={p}".format(u=org, r=repo, p=page)
        )

        # Connect to the API
        with urlopen(url) as stream:

            # Get the data
            try:
                data = json.loads(stream.read().decode("utf8"))
            except:
                break

            # Update the result
            if bool(data) is True:
                result.extend(
                    [
                        RepoFork(
                            username=_.get("owner", {}).get("login"), repo=repo
                        )
                        for _ in data
                    ]
                )
            else:
                break

        if bool(verbose) is True:
            pprint(data)
        print("Processing {0} fork page {1}".format(repo, page))
        time.sleep(delay)

    # Return
    return result


def star_users(org, repo, delay=60, verbose=False):
    """Get the users who have stared a repo.

    Args:
        org: The organization
        repo: The repository under the organization
        delay: Delay in seconds between queries to avoid rate limiting error
        verbose: Verbose output if True

    Returns:
        result: List of RepoStar objects

    """
    # Initialize key variables
    pages = 100
    result = []

    # Print status
    print('Getting star users for repo "{}"'.format(repo))

    # Extract the data
    for page in range(1, pages):
        # Create the query URL
        url = (
            "http://api.github.com/repos/"
            "{u}/{r}/stargazers?per_page=100&page={p}".format(
                u=org, r=repo, p=page
            )
        )

        # Connect to the API
        with urlopen(url) as stream:

            # Get the data
            try:
                data = json.loads(stream.read().decode("utf8"))
            except:
                break

            # Update the result
            if bool(data) is True:
                result.extend(
                    [
                        RepoStar(username=_.get("login"), repo=repo)
                        for _ in data
                    ]
                )
            else:
                break

        if bool(verbose) is True:
            pprint(data)
        print("Processing {0} star page {1}".format(repo, page))
        time.sleep(delay)

    # Return
    return result


def user_profile(username, delay=60, verbose=False):
    """Get user data.

    Args:
        username: GitHub username
        delay: Delay in seconds between queries to avoid rate limiting error
        verbose: Verbose output if True

    Returns:
        result: UserProfile object

    """
    # Initialize key variables
    url = "https://api.github.com/users/{0}".format(username)
    result = None

    # Sleep
    time.sleep(delay)

    # Print status
    print('Getting profile data for user "{}"'.format(username))

    # Extract the data
    with urlopen(url) as stream:
        try:
            data = json.loads(stream.read().decode("utf8"))
        except:
            pass

    # Return
    if bool(data) is True:
        result = UserProfile(
            username=data.get("login"),
            name=data.get("name"),
            email=data.get("email"),
        )

    # Print the status
    if bool(verbose) is True:
        pprint(data)
    return result


def args():
    """Process CLI arguments.

    Args:
        None

    Returns:
        _args: Defines whether to initialize the database or not

    """
    ################################
    # PARSING (Setup)
    ################################
    parser = argparse.ArgumentParser()

    ################################
    # Parsing arguements
    parser.add_argument(
        "--filename", required=True, type=str, help="Output TSV filename"
    )
    parser.add_argument(
        "--verbose", help="Increase output verbosity", action="store_true"
    )
    parser.add_argument(
        "--delay",
        help="Delay in seconds between API calls. "
        "Default '60' which is slow, but certain.",
        type=int,
        default=60,
    )
    _args = parser.parse_args()

    # Return
    return _args


def main():
    """Process the Talawa Repository metadata.

    Args:
        None

    Returns:
        None

    """
    # Initialize key variables
    org = "PalisadoesFoundation"
    repos = ["talawa", "talawa-api", "talawa-admin"]
    forks = []
    users = []
    stars = []
    interests = defaultdict(lambda: defaultdict(lambda: []))
    usernames = []
    profiles = {}

    # Get the CLI args
    cli = args()
    delay = cli.delay
    verbose = cli.verbose

    # Check the validity of the output file
    filepath = os.path.expanduser(cli.filename)
    if filepath.lower().endswith(".tsv") is False:
        filepath = "{}.tsv".format(filepath)
    try:
        open(filepath, "a").close()
    except:
        print('Cannot create filename "{0}"'.format(filepath))
        sys.exit(1)

    # Get the users who have starred and forked the repos
    for repo in repos:
        stars.extend(star_users(org, repo, delay=delay, verbose=verbose))
        forks.extend(fork_users(org, repo, delay=delay, verbose=verbose))

    # Get a unique list of usernames
    for items in [stars, forks]:
        listing = [_.username for _ in items]
        usernames.extend(listing)
    usernames = list(set(usernames))

    # Get the interests of each username
    for item in stars:
        interests[item.username]["stars"].append(item.repo)
    for item in forks:
        interests[item.username]["forks"].append(item.repo)

    # Get the profile data for each user
    print("Processing {0} usernames".format(len(usernames)))
    for username in usernames:
        profile = user_profile(username, delay=delay, verbose=verbose)
        if bool(profile) is True:
            profiles[username] = profile

    # Create
    for username, profile in sorted(profiles.items()):
        users.append(
            UserDetail(
                username=username,
                email=profile.email,
                name=profile.name,
                forks=interests.get(username, {}).get("forks"),
                stars=interests.get(username, {}).get("stars"),
            )
        )

    # Output to TSV
    print('Creating file "{}"'.format(filepath))
    with open(filepath, "w") as stream:
        csvwriter = csv.writer(stream, delimiter="\t")
        csvwriter.writerow(("Username", "Name", "Email", "Forks", "Stars"))
        csvwriter.writerows(
            [
                (
                    _.username,
                    _.name,
                    _.email,
                    ", ".join(_.forks),
                    ", ".join(_.stars),
                )
                for _ in users
            ]
        )


if __name__ == "__main__":
    # Run main
    main()
