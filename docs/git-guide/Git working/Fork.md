# Keep your fork up to date

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