#!/usr/bin/env python3

# Standard imports
from urllib.request import urlopen
import json
from collections import namedtuple
import time

from pprint import pprint


def fork_users(org, repo):
    """Get the users who have forked a repo.

    Args:
        org: The organization
        repo: The repository under the organization

    Returns:
        result: List of Fork objects

    """
    # Initialize key variables
    pages = 100
    result = []
    Fork = namedtuple("Fork", "username repo")

    # Extract the data
    for page in range(1, pages):
        # Create the query URL
        url = (
            "http://api.github.com/repos/"
            "{u}/{r}/forks?per_page=100&page={p}".format(u=org, r=repo, p=page)
        )

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
                        Fork(
                            username=_.get("owner", {}).get("login"), repo=repo
                        )
                        for _ in data
                    ]
                )
            else:
                break
        print(page)
        time.sleep(10)

    # Return
    return result


def star_users(org, repo):
    """Get the users who have stared a repo.

    Args:
        org: The organization
        repo: The repository under the organization

    Returns:
        result: List of Star objects

    """
    # Initialize key variables
    url = "http://api.github.com/repos/{u}/{r}/stargazers".format(
        u=org, r=repo
    )
    Star = namedtuple("Star", "username repo")

    # Extract the data
    with urlopen(url) as stream:
        data = json.loads(stream.read().decode("utf8"))

    # Return
    result = [Star(username=_.get("login"), repo=repo) for _ in data]
    return result


def user_data(username):
    """Get user data.

    Args:
        username: GitHub username

    Returns:
        result: User object

    """
    # Initialize key variables
    url = "https://api.github.com/users/{0}".format(username)
    User = namedtuple("User", "name username email")

    # Extract the data
    with urlopen(url) as stream:
        data = json.loads(stream.read().decode("utf8"))

    pprint(data)

    # Return
    result = User(
        username=data.get("login"),
        name=data.get("name"),
        email=data.get("email"),
    )
    return result


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
    usernames = []

    # Get the users who have starred and forked the repos
    for repo in repos:
        # stars.extend(star_users(org, repo))
        forks.extend(fork_users(org, repo))
        time.sleep(5)

    print(stars)
    print("\n")
    print(forks)
    print("\n")

    # Get a list of usernames
    for items in [stars, users]:
        listing = [_.username for _ in items]
        usernames.extend(listing)
    # usernames = list(set(usernames))
    print(sorted(usernames))


if __name__ == "__main__":
    # Run main
    main()
