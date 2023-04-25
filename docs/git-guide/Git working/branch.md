# Know what branch you're currently working on 

When working with Git, it's crucial to Know which branch you have currently checked out, Most of the Git commands implicitly operate on the current branch. you can determine the currently checked out branch in several ways

One of the most common way is with [git status](https://git-scm.com/docs/git-status)

```
$ git status
on branch git-demo
nothing to commit, working directory clean
```

Another is with [git branch](https://git-scm.com/docs/git-branch) which will display all local branches, with a star icon next to the current branch:

```
$ git branch
* git-demo
  main
```

You can see more detailed information about your branches, including remote branches, to do the same use, ```git branch -vva```

```
$ git branch -vva
  develop                3ca006a [origin/develop] Updating talawa documentation as new PR merged into talawa:automated-docs
* docs                   3ca006a Updating talawa documentation as new PR merged into talawa:automated-docs
  remotes/origin/HEAD    -> origin/develop
  remotes/origin/develop 3ca006a Updating talawa documentation as new PR merged into talawa:automated-docs
```