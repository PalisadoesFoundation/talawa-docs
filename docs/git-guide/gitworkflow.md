# Using Git as you work

## Know what branch you're currently working on 

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

## Keep your fork up to date

You'll want to [keep your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) up-to-date with changes from Talawa's main repositories

First Make sure you have check out your `develop` branch

```
$ git checkout develop
Switched to branch 'develop'
```

Next is pulling the upstream and [pushing the changes](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) to your remote fork.Then run `git push`

```
$ git pull upstream develop
$ git push origin develop
```

## Work on a feature branch

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

## Stage changes

Files in Git can have three possible states: committed, modified, and staged.

To prepare a commit, first add the files with changes that you want to include in your commit to your staging area. You add both new files and existing ones. You can also remove files from staging when necessary.

## Get status of working directory

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

## Stage additions with ```git add```

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

## Stage deletions with git rm

To remove existing files from your repository, use ```git rm``` [documentation](https://git-scm.com/docs/git-rm). This command can either stage the file for removal from your repository AND delete it from your working directory or just stage the file for deletion and leave it in your working directory.

To stage a file for deletion and remove it from your working directory, ```use git rm <filename>```:

```
$ git rm --cached test4.md
rm 'test4.md'

$ git status
On branch issue-100
Changes to be commited:
   (use "git reset HEAD <file>..." to unstage)

   deleted: test4.md

$ ls test4.md
test4.md   

```

If you stage a file for deletion with the ```--cached option```, and haven’t yet run ```git commit```, you can undo it with ```git reset HEAD <filename>```:

```
$ git reset HEAD test4.md 
```

Unfortunately, you can’t restore a file deleted with ```git rm``` if you didn’t use the ```--cache``` option. However, ```git rm``` only deletes files it knows about. Files you have never added to Git won’t be deleted.

## Commit changes

Once you've staged all your changes, you're ready to commit. You can do this with ``` git commit -m "My commit message." ``` to include a commit message.

Here’s an example of committing with the ```-m``` for a one-line commit message:

```
$ git commit -m "Add few lines to docs"
[issue-178-docsissue] Add a few lines to docs.
1 file changed, 1 insertion(+)
created mode 100644 test.md
```

You can also use git commit without the ```-m``` option and your editor to open, allowing you to easily draft a multi-line commit message.

How long your commit message should be depends on where you are in your work. Using short, one-line messages for commits related to in-progress work makes sense. For a commit that you intend to be final or that encompasses a significant amount or complex work, you should include a longer message.


## Push your commits to Github

As you’re working, it’s a good idea to frequently push your changes to GitHub. This ensures your work is backed up should something happen to your local machine and allows others to follow your progress. It also allows you to work from multiple computers without losing work.

Pushing to a feature branch is just like pushing to develop:

```
$ git push origin <branch-name>
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 658 bytes | 0 bytes/s, done.
Total 6 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 1 local objects.
To git@github.com:USERNAME/talawa-docs.git
 * [new branch]      issue-demo -> issue-demo
```

If you want to see what Git will do without actually performing the push, add the ```-n``` (dry-run) option: ```git push -n origin <branch-name>```. If everything looks good, re-run the push command without ```-n```.

If the feature branch does not already exist on GitHub, it will be created when you push and you’ll see ```* [new branch]``` in the command output.