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
import yaml
import random
from pprint import pprint

RepoStar = namedtuple("RepoStar", "username repo")
RepoFork = namedtuple("RepoFork", "username repo")
PROFILE_PARAMETERS = (
    "name username email location company twitter_username blog "
    "html_url created_at followers public_repos updated_at"
)
UserProfile = namedtuple("UserProfile", PROFILE_PARAMETERS)
UserDetail = namedtuple(
    "UserDetail",
    "{0} stars forks".format(PROFILE_PARAMETERS),
)


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
        sleep(delay)

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
        sleep(delay)

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
    sleep(delay)

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
            company=data.get("company"),
            location=data.get("location"),
            twitter_username=data.get("twitter_username"),
            blog=data.get("blog"),
            html_url=data.get("html_url"),
            created_at=data.get("created_at"),
            followers=data.get("followers"),
            public_repos=data.get("public_repos"),
            updated_at=data.get("updated_at"),
        )

    # Print the status
    if bool(verbose) is True:
        pprint(data)
    return result


def default_to_regular(data):
    """Recursively convert a defaultdict to a dict.

    Args:
        data: defaultdict to convert

    Returns:
        data: Converted to dict

    """
    # Return
    if isinstance(data, defaultdict):
        data = {k: default_to_regular(v) for k, v in data.items()}
    return data


def sleep(delay):
    """Sleep for a random time.

    Args:
        delay: Minimum duration of sleep

    Returns:
        None

    """
    # Sleep
    time.sleep(random.randint(delay, delay * 2))


def args():
    """Process CLI arguments.

    Args:
        None

    Returns:
        _args: Defines whether to initialize the database or not

    """
    # Parse the CLI
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--filename", required=True, type=str, help="Output TSV filename"
    )
    parser.add_argument(
        "--verbose", help="Increase output verbosity", action="store_true"
    )
    parser.add_argument(
        "--skip",
        help="Skip getting the stars and forks data. "
        "This assumes that you have already saved this data by doing a "
        "previous run. This feature makes the recovery from "
        "'HTTP Error 403: rate limit exceeded' errors easier.",
        action="store_true",
    )
    parser.add_argument(
        "--delay",
        help="Delay in seconds between API calls. "
        "Default '60' which is slow, but certain.",
        type=int,
        default=60,
    )
    parser.add_argument(
        "--test", help="Test the operation of the script", action="store_true"
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
    skip = cli.skip
    test = cli.test

    # Check the validity of the output file
    filepath = os.path.expanduser(cli.filename)
    if filepath.lower().endswith(".tsv") is False:
        filepath = "{}.tsv".format(filepath)
    try:
        open(filepath, "a").close()
    except:
        print('Cannot create filename "{0}"'.format(filepath))
        sys.exit(1)
    if "talawa" in filepath.lower():
        print(
            'Cannot create filename "{0}" in the repository tree.'.format(
                filepath
            )
        )
        sys.exit(1)
    yaml_filepath = "{0}.yaml".format(filepath)

    if bool(skip) is False:
        if bool(test) is False:
            # Get the users who have starred and forked the repos
            for repo in repos:
                stars.extend(
                    star_users(org, repo, delay=delay, verbose=verbose)
                )
                forks.extend(
                    fork_users(org, repo, delay=delay, verbose=verbose)
                )

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
        else:
            # Run test
            for _ in range(10):
                for __ in range(10):
                    interests[_]["stars"].append(random.randint(1, 10))
                    interests[_]["forks"].append(random.randint(1, 10))
            test_data = interests

        # Convert the default dict to dict for output to YAML
        interests = default_to_regular(interests)

        # Save the interests in YAML file
        with open(yaml_filepath, "w") as stream:
            yaml.dump(interests, stream)
    else:
        # Load previously saved data
        print("Loading data from {0}".format(yaml_filepath))
        with open(yaml_filepath) as stream:
            interests = yaml.safe_load(stream)

    # Verify test
    if bool(test) is True:
        if bool(verbose) is True:
            pprint(interests)

        # Test the data
        if test_data != interests:
            print("Test Failed!")
            sys.exit(0)
        else:
            print("Test Passed!")
            sys.exit(1)
        os.remove(yaml_filepath)
        os.remove(filepath)

    # Get the profile data for each user
    print("Processing {0} usernames".format(len(usernames)))
    for username, _ in interests.items():
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
                company=profile.company,
                location=profile.location,
                twitter_username=profile.twitter_username,
                blog=profile.blog,
                html_url=profile.html_url,
                created_at=profile.created_at,
                updated_at=profile.updated_at,
                followers=profile.followers,
                public_repos=profile.public_repos,
                forks=interests.get(username, {}).get("forks"),
                stars=interests.get(username, {}).get("stars"),
            )
        )

    # Output to TSV
    print('Creating file "{}"'.format(filepath))
    with open(filepath, "w") as stream:
        csvwriter = csv.writer(stream, delimiter="\t")
        csvwriter.writerow(
            (
                "Username",
                "Name",
                "Email",
                "Company",
                "Location",
                "Followers",
                "Public Repos",
                "Created",
                "Updated",
                "Forks",
                "Stars",
                "Profile",
                "Blog",
                "Twitter",
            )
        )
        csvwriter.writerows(
            [
                (
                    _.username,
                    _.name,
                    _.email,
                    _.company,
                    _.location,
                    _.followers,
                    _.public_repos,
                    _.created_at,
                    _.updated_at,
                    ", ".join(_.forks),
                    ", ".join(_.stars),
                    _.html_url,
                    _.blog,
                    _.twitter_username,
                )
                for _ in users
            ]
        )


if __name__ == "__main__":
    # Run main
    main()
