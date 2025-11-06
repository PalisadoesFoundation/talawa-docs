# Talawa-Docs Installation

This document provides instructions on how to set up and start a running instance of talawa-docs on your local system. The instructions are written to be followed in sequence so make sure to go through each of them step by step without skipping any sections.

# Table of Contents

<!-- TOC -->

- [Talawa-Docs Installation](#talawa-docs-installation)
- [Table of Contents](#table-of-contents)
  - [Prerequisites for Developers](#prerequisites-for-developers)
    - [Install the Required PNPM Package Manager](#install-the-required-pnpm-package-manager)
    - [Install the Required Packages](#install-the-required-packages)
  - [Running tshe Development Server](#running-tshe-development-server)
  - [Building Static HTML Pages](#building-static-html-pages)

<!-- /TOC -->

## Prerequisites for Developers

The contents of the `talawa-docs` repo is used to automatically create [the talawa-docs Documentation website](https://docs.talawa.io/). The automation uses [Docusaurus](https://docusaurus.io/docs/), a modern static website generator.

We recommend that you follow these steps before beginning development work in this repository.

### Install the Required PNPM Package Manager

For the package installation use `pnpm`. The steps are simple:

1. Validate the `pnpm` installation on your local device by running the following command. You should get the `pnpm` version.

```terminal
$ pnpm -version
```

1. If you get an error, then you'll need to install `pnpm`. A simple way to do this use [fnm](https://github.com/Schniz/fnm).

### Install the Required Packages

From the `talawa-docs/docs` directory, run the following command.

```console
$ pnpm add docusaurus
$ pnpm install
```

## Running tshe Development Server

To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes.

The command to run the server is:

```console
$ pnpm run start
OR
$ pnpm start
```

By default, a browser window will open at http://localhost:3000.

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Building Static HTML Pages

**In most cases is unnecessary**. Running the `development server` will be sufficient.

If you need to generate static HTML pages (unlikely), then follow these steps.

```console
$ pnpm run build
```

This command generates static content into the `/build` directory and can be served using any static contents hosting service.
