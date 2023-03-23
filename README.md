# Talawa Docs

💬 Join the community on Slack. The link can be found in the `Talawa` [README.md](https://github.com/PalisadoesFoundation/talawa) file.

[![N|Solid](static/img/logos/talawa-logo-200x200.png)](https://github.com/PalisadoesFoundation/talawa-docs)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub stars](https://img.shields.io/github/stars/PalisadoesFoundation/talawa-docs.svg?style=social&label=Star&maxAge=2592000)](https://github.com/PalisadoesFoundation/talawa-docs)
[![GitHub forks](https://img.shields.io/github/forks/PalisadoesFoundation/talawa-docs.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/PalisadoesFoundation/talawa-docs)

Talawa is a modular open source project to manage group activities of both non-profit organizations and businesses.

Core features include:

1.  Membership management
2.  Groups management
3.  Event registrations
4.  Recurring meetings
5.  Facilities registrations

`talawa` is based on the original `quito` code created by the [Palisadoes Foundation][pfd] as part of its annual Calico Challenge program. Calico provides paid summer internships for Jamaican university students to work on selected open source projects. They are mentored by software professionals and receive stipends based on the completion of predefined milestones. Calico was started in 2015. Visit [The Palisadoes Foundation's website](http://www.palisadoes.org/) for more details on its origin and activities.

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

For the installation, use only the `yarn` package as `npm` will throw an error. Only `npm` use case would be to install the `yarn` package. Visit the [Docusaurus installation web page](https://docusaurus.io/docs/installation) if you have any difficulties with the steps below.

The steps are simple:

1. Clone this repository
2. Install Yarn on your system using the instructions given below
3. If you have previously installed yarn on your local device run the following command to confirm

```terminal
$ yarn -version
```

4. Follow these steps next

**Note:** Please bear in mind that to install docusaurus your system, a Node.js version 16.14 or above (which can be checked by running node -v) is required. Other requirements that pertains to the installation of docusaurus can be found [here](https://docusaurus.io/docs/installation)

```console
$ git clone https://github.com/PalisadoesFoundation/talawa-docs
$ cd talawa-docs
$ yarn add docusaurus
```

### Install Yarn on Windows Using NPM

NPM (Node Package Manager) is a package manager included with the Node.js installation. It is used for developing and sharing JavaScript code, but it also provides another method of installing Yarn

1. [Download the Node Windows installer](https://nodejs.org/en/download/)
1. After choosing the path, double-click to install. Then give access to run the application
1. Install Yarn by running the following command

```terminal
$ npm install --global yarn
```

4. Check Yarn installation

```terminal
$ yarn -version
```

### Install Yarn on Windows Using msi File

Here’s how to install the Yarn package manager on Windows

1. [Download the Yarn Windows installer](https://classic.yarnpkg.com/en/docs/install#windows-stable)
1. After choosing the path, double-click to install. Then give access to run the application

1. Check Yarn installation

```terminal
$ yarn -version
```

### Install Yarn on macOS Using NPM

The .pkg installer can be used to install Yarn on macOS. Using the .pkg installer also helps resolve dependencies since it does not require a command line to install Node.js

1. [Click on the macOS Installer option to download the .pkg installer](https://nodejs.org/en/download/)
2. Run the Node.js installer
3. Verify Node.js Installation by running the following command in your terminal

```terminal
$ node -v
$ npm -v
```

4. Run the following command to install Yarn

```terminal
$ sudo npm install --global yarn
```

5. Verify Yarn Installation

```terminal
$ yarn --version
```

### Install Yarn on macOS Using Homebrew

One of the easiest way to install Yarn on macOS is to use the command line installer

1. Install Yarn by running the given command in your terminal

```terminal
$ brew install yarn
```

### Install Yarn on Linux Using NPM

Installing Yarn on Linux through NPM can be done via command line installer, this doesn't automatically install Node.js

1. Run the following command in your terminal to install Node and NPM respectively. [Confirm your Linux distro and it's command prompt](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

```terminal
$ sudo apt install nodejs
$ sudo apt install npm
```

2. Verify installation

```terminal
$ node -v
$ npm -v
```

3. Install Yarn with the following command

```terminal
npm install --global yarn
```

# Running the Development Server

To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes.

Follow these steps:

**Note:** Install the latest stable version of Node.js on your system if you get a `The engine "node" is incompatible with this module. Expected version` message during the procedure below. You may need to use a custom repository for this.

- Please bear in mind that to install docusaurus your system, a Node.js version 16.14 or above (which can be checked by running node -v) is required. Other requirements that pertains to the installation of docusaurus can be found [here](https://docusaurus.io/docs/installation)

```console
$ sudo apt-get -y install npm
$ sudo npm install --global yarn
$ cd talawa-docs
$ yarn add docusaurus
$ yarn run start
OR
$ yarn run
```

By default, a browser window will open at http://localhost:3000.

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

# Building Static HTML Pages

**In most cases is unnecessary**. Running the `development server` will be sufficient.

If you need to generate static HTML pages (unlikely), then follow these steps.

```console
$ yarn run build
```

This command generates static content into the `/build` directory and can be served using any static contents hosting service.
