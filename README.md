# Talawa Docs
💬 Join the community on Slack. The link can be found in the `Talawa` [README.md](https://github.com/PalisadoesFoundation/talawa) file.

[![N|Solid](static/img/logos/talawa-logo-200x200.png)](https://github.com/PalisadoesFoundation/talawa-docs)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub stars](https://img.shields.io/github/stars/PalisadoesFoundation/talawa-docs.svg?style=social&label=Star&maxAge=2592000)](https://github.com/PalisadoesFoundation/talawa-docs)
[![GitHub forks](https://img.shields.io/github/forks/PalisadoesFoundation/talawa-docs.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/PalisadoesFoundation/talawa-docs)

Talawa is a modular open source project to manage group activities of both non-profit organizations and businesses.

Core features include:

 1. Membership management
 2. Groups management
 3. Event registrations
 4. Recurring meetings
 5. Facilities registrations

``talawa`` is based on the original ``quito`` code created by the [Palisadoes Foundation][pfd] as part of its annual Calico Challenge program. Calico provides paid summer internships for  Jamaican university students to work on selected open source projects. They are mentored by software professionals and receive stipends based on the completion of predefined milestones. Calico was started in 2015. Visit [The Palisadoes Foundation's website](http://www.palisadoes.org/) for more details on its origin and activities.

# Talawa Components

`talawa` has these major software components:

1. **talawa**: [A mobile application with social media features](https://github.com/PalisadoesFoundation/talawa)
1. **talawa-api**: [An API providing access to user data and features](https://github.com/PalisadoesFoundation/talawa-api)
1. **talawa-admin**: [A web based administrative portal](https://github.com/PalisadoesFoundation/talawa-admin)
1. **talawa-docs**: [The online documentation website](https://github.com/PalisadoesFoundation/talawa-docs)

# Documentation

- The `talawa` documentation can be found [here](https://docs.talawa.io/).
- Want to contribute? Look at [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
- Visit the [Talawa-Docs GitHub Repository](https://github.com/PalisadoesFoundation/talawa) to see the code.

# Installation

The contents of the `talawa-docs` repo is used to automatically create [the talawa documentation website](https://docs.talawa.io/). The automation uses [Docusaurus](https://docusaurus.io/docs/), a modern static website generator.

Intallation will vary depending on whether you use the `yarn` or `npm` packages. Visit the [Docusaurus installation web page](https://docusaurus.io/docs/installation) if you have any difficulties with the steps below.

## Using Yarn

The steps are simple:

1. Clone this repository
2. [Install `yarn` on your system using these instructions](https://classic.yarnpkg.com/en/docs/install)
3. Follow these steps next

```console
$ git clone https://github.com/PalisadoesFoundation/talawa-docs
$ cd talawa-docs
$ yarn add docusaurus
```

## Using NPM

The steps are simple:

1. Clone this repository
2. [Install `npm` on your system using these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. Follow these steps next

```console
$ git clone https://github.com/PalisadoesFoundation/talawa-docs
$ cd talawa-docs
$ npm install docusaurus
```

# Running the Development Server

To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes.

## Using Yarn

Follow these steps:

**Note:** Install the latest stable version of Node.js on your system if you get a `The engine "node" is incompatible with this module. Expected version` message during the procedure below. You may need to use a custom repository for this.

```console
$ sudo apt-get -y install npm
$ sudo npm install --global yarn
$ cd talawa-docs
$ yarn add docusaurus
$ yarn run start
```

By default, a browser window will open at http://localhost:3000.

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Using NPM

Follow these steps:

**Note:** Install the latest Node.js on your system to run the development server. You can install Node.js from [here](https://nodejs.org/en/download/)

```console
$ npm install -g npm
$ cd talawa-docs
$ npm install docusaurus
$ npm run start 
```

By default, a browser window will open at http://localhost:3000.

# Building Static HTML Pages

**In most cases is unnecessary**. Running the `development server` will be sufficient.

If you need to generate static HTML pages (unlikely), then follow these steps.

```console
$ yarn run build
```

This command generates static content into the `/build` directory and can be served using any static contents hosting service.
