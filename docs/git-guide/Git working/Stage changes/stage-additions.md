# Stage additions with ```git add```

To add changes to your staging area, use ```git add <filename>```. Because ```git add``` is all about staging the changes you want to commit, you use it to add new files as well as files with changes to your staging area.

Continuing our above example, after we run ```git add docs/introduction.md```, we'll see the following from ```git status```:

```

On branch issue-178-docsissue
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  new file:  docs/introduction.md

```

You can view the changes in files you have staged with ```git diff --cached```. To view changes to files you haven’t yet staged, just ```use git diff```.

If you want to add all changes in the working directory, ```use git add -A``` [(documentation)](https://git-scm.com/docs/git-add).

If you stage a file, you can undo it with ```git reset HEAD <filename>```. Here’s an example where we stage a file ```test2.md``` and then unstage it:

```
$ git add test2.md
On branch issue-234
Changes to be commited:
   (use "git reset HEAD <file>..." to unstage)

   new file: test2.md

$ git reset HEAD test2.md
$ git status
On branch issue-234
Untracked files:
   (use "git add <file>..." to include in what will be commited)

   test2.md

nothing added to commit but untracked files present (use "git add" to track)
```
