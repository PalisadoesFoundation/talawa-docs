# Get Talawa code

Talawa uses a **forked-repo** and **merge-oriented** workflow. This means all contributors create a fork of the Talawa repository they want to contribute to and then submit pull requests to the upstream repository to have their contributions reviewed and accepted. We also recommend you work on feature branches.

## step1: Create your fork

The following steps you'll only need to do the first time you setup a machine for contributing to a given Talawa Project. You will need to repeat the steps for any additional Talawa Projects([list](https://github.com/PalisadoesFoundation)) that you would like to work on. 

The first thing you'll want to do to contribute to Talawa is fork [see how](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the appropriate Talawa repository([list](https://github.com/PalisadoesFoundation)). For the main Talawa app. this is [PalisadoesFoundation/talawa](https://github.com/PalisadoesFoundation/talawa)

## step2: Clone to your machine

Next, clone your fork to your local machine, Here we are taking the example of the [Talawa docs repository](https://github.com/PalisadoesFoundation/talawa-docs)

```
git clone https://github.com/YOUR_USERNAME/talawa-docs.git
Cloning into 'talawa'
remote: Counting objects: 86768, done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 86768 (delta 5), reused 1 (delta 1), pack-reused 86752
Receiving objects: 100% (86768/86768), 112.96 MiB | 523.00 KiB/s, done.
Resolving deltas: 100% (61106/61106), done.
Checking connectivity... done.
```

:::note
 If you receive an error while cloning, you may not have added your ssh key to GitHub.
:::

## Step 3: Connect your fork to Talawa upstream

Next, you’ll want to [configure an upstream remote repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork) for your fork of Talawa. This will allow you to [sync changes](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) from the main project back into your fork.

First, show the currently configured remote repository:

```
$ git remote -v
origin  https://github.com/YOUR_USERNAME/talawa-docs.git (fetch)
origin  https://github.com/YOUR_USERNAME/talawa-docs.git (push)
```

Next is adding the Upstream, you will need to do it with:

```
$ git remote add upstream https://github.com/PalisadoesFoundation/talawa-docs.git
```

Finally, confirm that the new remote repository, upstream, has been configured:

```
$ git remote -v
origin  https://github.com/Biki-das/talawa-docs.git (fetch)
origin  https://github.com/Biki-das/talawa-docs.git (push)
upstream https://github.com/PalisadoesFoundation/talawa-docs.git (fetch)
upstream https://github.com/PalisadoesFoundation/talawa-docs.git (push)
```

The above instructions would help you to get ready for contributions! Thank you.


