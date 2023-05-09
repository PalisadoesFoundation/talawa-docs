#!/usr/bin/env python3

# Standard imports
from urllib.request import urlopen
import json
from collections import namedtuple
import time
import argparse
import os
import csv
import random
import yaml

PROFILE_PARAMETERS = "name username email"
CommitUser = namedtuple("CommitUser", PROFILE_PARAMETERS)


def repo_commits(org, repo, usernames, filepath, delay=60, verbose=False):
    """Get the commits for a repo.

    Args:
        org: The organization
        repo: The repository under the organization
        usernames: List of usernames to ignore
        delay: Delay in seconds between queries to avoid rate limiting error
        verbose: Verbose output if True

    Returns:
        result: List of CommitUser objects

    """
    # Initialize key variables
    pages = 100000000000000000
    result = []
    starts = {}

    # Check the tracker file
    tracker_filepath = "{0}.track".format(filepath)

    # Load previously saved page data
    if bool(os.path.isfile(tracker_filepath)) is True:
        print("Loading data from {0}".format(tracker_filepath))
        with open(tracker_filepath) as stream:
            starts = yaml.safe_load(stream)
    else:
        starts[repo] = 1

    # Print status
    print('Getting commits for repo "{}"'.format(repo))

    # Extract the data
    for page in range(starts.get(repo, 1), pages):
        # Create the query URL
        url = (
            "http://api.github.com/repos/"
            "{u}/{r}/commits?per_page=100&page={p}".format(
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
                for item in data:
                    email = (
                        item.get("commit", {})
                        .get("author", {})
                        .get("email", "")
                    )
                    name = item.get("commit", {}).get("author", {}).get("name")
                    username = item.get("author", {}).get("login")
                    record = CommitUser(
                        name=name, email=email, username=username
                    )

                    # Skip in certain cases
                    if bool(username) is False:
                        continue
                    if "noreply.github.com" in email.lower():
                        continue
                    if username in usernames:
                        continue
                    else:
                        usernames.append(username)
                        tsv_write(filepath, record)
            else:
                break

        # Save the interests in YAML file
        with open(tracker_filepath, "w") as stream:
            yaml.dump(starts, stream)
        starts[repo] += 1

        print("Processing {0} commit page {1}".format(repo, page))
        sleep(delay)

    # Return
    return result


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
        "--delay",
        help="Delay in seconds between API calls. "
        "Default '60' which is slow, but certain.",
        type=int,
        default=60,
    )
    _args = parser.parse_args()

    # Return
    return _args


def tsv_make(filepath):
    """Create the output TSV file.

    Args:
        filepath: Name of file

    Returns:
        None

    """
    # Create file
    if os.path.exists(filepath) is False:
        # Output to TSV
        print('Creating file "{0}"'.format(filepath))
        with open(filepath, "w") as stream:
            csvwriter = csv.writer(stream, delimiter="\t")
            csvwriter.writerow(
                (
                    "Username",
                    "Name",
                    "Email",
                )
            )


def tsv_read(filepath):
    """Read the output TSV file  for usernames.

    Args:
        filepath: Name of file

    Returns:
        usernames: List of usernames found

    """
    # Initialize key variables
    usernames = []

    # Read file
    if os.path.exists(filepath) is True:
        print('Reading usernames from file "{}"'.format(filepath))
        with open(filepath) as stream:
            reader = csv.reader(stream, delimiter="\t")

            # Skip the headers
            next(reader, None)  # skip the headers
            for row in reader:
                username = row[0]
                usernames.append(username)
                print('Found "{0}"'.format(username))

    # Return
    return usernames


def tsv_write(filepath, record, verbose=False):
    """Update the output TSV file.

    Args:
        filepath: Name of file
        record: Record to write

    Returns:
       None

    """
    # Update file
    if os.path.exists(filepath) is True:

        # Print update
        if bool(verbose) is False:
            print('Adding "{}"'.format(record.username))
        else:
            print('Adding "{}"'.format(record))

        # Output to TSV
        with open(filepath, "a") as stream:
            csvwriter = csv.writer(stream, delimiter="\t")
            csvwriter.writerow(
                (
                    record.username,
                    record.name,
                    record.email,
                )
            )


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

    # Get the CLI args
    _args = args()
    delay = _args.delay
    verbose = _args.verbose

    # Check the validity of the output file
    filepath = os.path.expanduser(_args.filename)
    if filepath.lower().endswith(".tsv") is False:
        filepath = "{}.tsv".format(filepath)

    # Ensure that the output TSV file has been created
    tsv_make(filepath)

    # Get the existing processed usernames in the file
    usernames = tsv_read(filepath)

    # Process the repo
    for repo in repos:
        repo_commits(
            org, repo, usernames, filepath, delay=delay, verbose=verbose
        )


if __name__ == "__main__":
    # Run main
    main()
