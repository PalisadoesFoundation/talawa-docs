# Push your commits to Github

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