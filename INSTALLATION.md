# Talawa-Docs Installation

This document provides instructions on how to set up and start a running instance of `talawa-docs` on your local system. The instructions are written to be followed in sequence so make sure to go through each of them step by step without skipping any sections.

# Table of Contents

1. [Prerequisites for Developers](#prerequisites-for-developers)
1. [Installation](#installation)
   1. [Clone this repository](#clone-this-repository)
   1. [Change directory into the cloned repo](#change-directory-into-the-cloned-repo)
   1. [Setting up yarn](#setting-up-yarn)
   1. [Installing required packages/dependencies](#installing-required-packagesdependencies)
1. [Post Configuration Steps](#post-configuration-steps)
   1. [Running Talawa-Docs](#running-talawa-docs)
   1. [Accessing Talawa-Docs](#accessing-talawa-docs)
1. [Testing](#testing)
   1. [Running tests](#running-tests)
   1. [Linting code files](#linting-code-files)
   1. [Husky for Git Hooks](#husky-for-git-hooks)

# Prerequisites for Developers

We recommend that you have the following installed in your local machine before beginning development work on Talawa-Docs:

1. Nodejs: Nodejs allows developers to write server-side code using JavaScript. Node.js also enables developers to use JavaScript for both client-side and server-side development, making it a versatile and powerful tool for web development. You have to install Nodejs first in your local machine before proceeding to clone this repo.

2. Yarn: Yarn is the recommended package manager for this project.

# Installation

You will need to have copies of your code on your local system. Here's how to do that.

## Clone This Repository

First you need a local copy of `talawa-docs`. Run the following command in the directory of choice on your local system.

```
git clone https://github.com/PalisadoesFoundation/talawa-docs
```

This will download a local copy of `talawa-docs` in that directory.

## Change Directory into the Cloned Repo

Right after cloning the repo you can change the directory of your current `terminal(shell)` to the root directory of cloned repository using this command:

```
cd talawa-docs
```

**NOTE:** `All the commands we're going to execute in the following instructions will assume you are in the root directory of the cloned talawa-docs project. If you fail to do so, the commands will not work.`

## Setting up Yarn

If you've followed the previous steps you should have already set up node.js on your system. [Click here](https://yarnpkg.com/getting-started/install) for the official setup guide for yarn.
Please note that Talawa's docs system is only compatible with yarn version 1. Using versions 2 or 3 may cause errors.
To install yarn version you can use following command:

_Windows/ Mac-OS_

```
npm install -g yarn@1.22.17
```

_Linux_

```
sudo npm install -g yarn@1.22.17
```

To verify yarn is correctly installed in your system use:

```
yarn -v
OR
yarn --version
```

## Installing required packages/dependencies

Run the following command to install the packages and dependencies required by `talawa-docs`:

```
yarn install
```

# Post Configuration Steps

It's now time to start Talawa-Docs and get it running

## Running Talawa-Docs

Run the following command to start `talawa-docs` development server:

```
yarn serve
```

## Accessing Talawa-Docs

By default `talawa-docs` runs on port `3000` on your system's localhost. It is available on the following endpoint:

```
http://localhost:3000/
```

# Testing

It is important to test our code. If you are a contributor, please follow these steps.

## Running tests

You can run the tests for `talawa-docs` using this command:

```
yarn test
```

## Linting code files

You can lint your code files using this command:

```
yarn lint:fix
```

## Husky for Git Hooks

We are using the package `Husky` to run git hooks that run according to different git workflows.

<br/>

#### pre-commit hook

We run a pre-commit hook which automatically runs code quality checks each time you make a commit and also fixes some of the issues. This way you don't have to run them manually each time.

If you don't want these pre-commit checks running on each commit, you can manually opt out of it using the `--no-verify` flag with your commit message as shown:-

        git commit -m "commit message" --no-verify

<br/>

#### post-merge hook

We are also running a post-merge(post-pull) hook which will automatically run "yarn" only if there is any change made to pakage.json file so that the developer has all the required dependencies when pulling files from remote.

If you don't want this hook to run, you can manually opt out of this using the `no verify` flag while using the merge command(git pull):

        git pull --no-verify

<br/>
