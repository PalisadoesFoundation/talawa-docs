# Collaborate

## Fetching work of other Contributors

At Talawa, we support collaboration a lot, as we belive in unified approaches, What happens when you would like to collaborate with another contributor and they have some work done in their own fork of Talawa? No problem! Just add their fork as a remote and Pull their changes.

```
$ git remote add <username> https://github.com/<username>/talawa-docs.git
$ git fetch <username>
```

Now you can check out their branch just like you would any other. You can name the branch anything you want, but using both the username and branch name will help you keep things organized.

```
$ git checkout -b <username>/<branchname>
```

You can choose to rename the branch if you prefer:

```
$ git checkout -b <custombranchname> <username>/<branchname>
```

## Check out a Pull reuqest locally

As we saw above how we can fetch a user's branch locally. you can also check out any pull request locally. Github provides a special method [details](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) for this since pull requests are specific to Github rather than Git.

First, fetch and create a branch for the pull request, replacing **ID** and **BRANCHNAME** with the ID of the pull request and your desired branch name:

```
$ git fetch upstream pull/ID/head:BRANCHNAME
```

Now switch to the branch

```
$ git checkout BRANCHNAME
```

Now you can work on this branch as you normally work in other branch.