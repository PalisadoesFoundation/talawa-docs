# Stage deletions with git rm

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