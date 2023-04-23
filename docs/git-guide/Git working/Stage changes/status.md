# Get status of working directory

To see what files in the working directory have changes that have not been staged, use ```git status```.

If you have no changes in the working directory, you’ll see something like this:

```
$ git status
on branch issue-178-docsissue
nothing to commit, working directory clean
```

If you have unstaged changes, you’ll see something like this:

```
On branch issue-178-docsissue
Untracked files:
  (use "git add <file>..." to include in what will be committed)
  
  docs/introduction.md

nothing added to commit but untracked files present (use "git add" to track)  
```