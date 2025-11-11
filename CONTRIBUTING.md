# Contributing to Talawa Docs
Thank you for your interest in contributing to Talawa Docs. Regardless of the size of the contribution you make, all contributions are welcome and are appreciated.

- [Contributing to Talawa Docs](#contributing-to-talawa-docs)
  - [Ways to Contribute](#ways-to-contribute)
    - [Our Development Process](#our-development-process)
      - [Issues](#issues)
      - [Pull Requests](#pull-requests)
      - [Git Flow](#git-flow)
    - [Contributing Code](#contributing-code)
    - [Who Can Contribute](#who-can-contribute)
    - [Internships](#internships)
  - [Community](#community)


If you are new to contributing to open source, please read the Open Source Guides on [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/).

## Ways to Contribute
We know you are ready to start contributing code right away! Hers is a list of [good first issues](https://github.com/PalisadoesFoundation/talawa-docs/labels/good%20first%20issue) that contain issues with a limited scope.

### Our Development Process
We utilize GitHub issues and pull requests to keep track of issues and contributions from the community.

#### Issues
Make sure you are following [issue report guidelines](ISSUE_GUIDELINES.md) available here before creating any new issues on Talawa API project.

#### Pull Requests
[Pull Request guidelines](PR_GUIDELINES.md) is best resource to follow to start working on open issues.

#### Git Flow
For Talawa Docs, we utilize the GitFlow branching model. GitFlow is geared towards efficiently tracking development and managing releases. The model makes parallel development efforts easy and safe by isolating new development efforts from completed work.

The different types of branches we may use are:
* Feature branches (feature/branch-name)
* Release branches (release/1.XX)
* Bug branches  (bugfix/branch-name)
* Hotfix branches (hotfix/branch-name)

Detailed document containing how GitFlow works: https://nvie.com/posts/a-successful-git-branching-model/

### Contributing Code
Code contributions to Talawa come in the form of pull requests. These are done by forking the repo and making changes locally.

Make sure you have read the [Documentation for Setting up the Project](https://github.com/PalisadoesFoundation/talawa-docs#readme)

The process of proposing a change to Talawa Docs can be summarized as:
1. Fork the Talawa Docs repository and branch off `master`.
2. The repository can be cloned locally using `git clone <forked repo url>`.
3. Make the desired changes to the Talawa Docs source.
4. Run the website and test your changes.
5. If you've added code that should be tested, write tests.
6. After making changes you can add them to git locally using `git add <file_name>`(to add changes only in a particular file) or `git add .` (to add all changes).
7. After adding the changes you need to commit them using `git commit -m '<commit message>'`(look at the commit guidelines below for commit messages).
8. Once you have successfully commited your changes, you need to push the changes to the forked repo on github using: `git push origin <branch_name>`.(Here branch name must be name of the branch you want to push the changes to.)
9. Now create a pull request to the Talawa Docs repository from your forked repo. Open an issue regarding the same and link your PR to it.
10. Ensure the test suite passes, either locally or on CI once a PR has been created.
11. Review and address comments on your pull request if requested.

### Who Can Contribute

Unfortunately, because of recent abuse, we will only be assigning issues to persons who have:

1. At least two years of GitHub history
1. Consistent code updates throughout their GitHub life, especially the most recent 18 months.

This is a new policy triggered by newly created accounts that: 

1. Use automation to blindly submit and update pull requests.
1. SPAM our volunteers to be assigned issues to the exclusion of others.
1. Frequently abandon issues after being assigned.
1. Frequently close pull requests with ratios of merged to closed PRs approaching 10:1
1. Repeatedly ignore PR requested changes from reviewers
1. Resolve Code Rabbit suggestions without implementing them.
1. Use AI to generate generic plans of action without an in-depth knowledge of the code base. This is not helpful for us.

As expected, we need contributors who are interested in coding with a proven track record. This is an unfortunate development but the recent abuse of the system has given us no choice.

### Internships
If you are participating in any of the various internship programs we ar members of then please read the [introduction guides on our documentation website](https://docs.talawa.io/docs/).

## Community
There are many ways to communicate with the community.

1. The Palisadoes Foundation has an [online community](https://community.talawa.io/) where members can assist with support and clarification. 
2. We also have a technical email list run by [freelists.org](https://www.freelists.org/). Search for "palisadoes" and join. Members on this list are also periodically added to our marketing email list that focuses on less technical aspects of our work.
