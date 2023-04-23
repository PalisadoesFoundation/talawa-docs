# Work on a feature branch

Working with git can be organized by creating a branch for each issue or feature. Recall from [how Git is different](https://zulip.readthedocs.io/en/latest/git/the-git-difference.html) that Git is designed for lightweight branching and merging. You can and should create as many branches as you’d like.

First, make sure your `develop` branch is up-to-date with Talawa upstream [(see how)](#keep-your-fork-up-to-date)

Next from your `develop` branch, create a new branch.We recommended naming your branch a descriptive name relating to your feature or issue. 

```
$ git checkout develop
Switched to branch 'develop'
$ git checkout -b issue-178-docsissue
Switched to a new branch 'issue-178-docsissue'
```

Now you are ready to work on the issue or feature. 
