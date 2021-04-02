# About The Palisadoes Foundation
<!-- There is no description of the Palisadoes Foundation -->
## Promoting software development education in Jamaica. Always Forward.

**The Palisadoes Foundation** is a non-profit organization based in **Cupertino, California, USA** founded in *2016*  by members of the **Jamaican Diaspora** and **The Jamaica Diaspora Technology Taskforce** to promote the use of information technology in Jamaica. 

Since 2016, we had been promoting equitable access to life opportunities for STEM education recipients. We also have managed the Calico Challenge that gives Jamaican students the opportunity to work on Open Source projects under the guidance of a mentor.  Our annual internship programs match university students with Information and Communications Technology (ICT) professionals as they collaborate on Open Source software projects.

Our aim is to provide new avenues of promoting Jamaica’s technology talent through a series of programs which create increased awareness of the island’s abilities in the global marketplace. It was founded by Jamaicans living in the United States.​

Calico is modeled on the Google Summer of Code. In 2021 The Palisadoes Foundation was awarded participation in the Google Summer of Code.

[The Palisadoes Foundation](http://www.palisadoes.org/)

# About Talawa
<!-- There is no description of the various Talawa projects -->
##  Talawa has three main components
Talawa is a modular open source project to help community-based organizations such as clubs, neighborhood groups, volunteer associations, non-profits and small religious institutions manage their daily activities where most user interaction is via a mobile app. 

The Palisadoes Foundation wants to eventually host Talawa as a cloud service to help finance its education outreach.​

Talawa’s desired main features for 2021 are:
​
1. User news feed
2. Event calendars with lightweight project management
3. Group chats
4. Member notifications
5. Donation acceptance
6. Service provider level multi-organization capability
7. Plugin support for administration services such as billing

### Talawa
A mobile application with social media features. 
[GitHub](https://github.com/PalisadoesFoundation/talawa)
### Talawa-api
An API providing access to data and features.​
[GitHub](https://github.com/PalisadoesFoundation/talawa-api)
### Talawa-admin
A web based portal to be used by the organization’s administrative team.
 [GitHub](https://github.com/PalisadoesFoundation/talawa-admin)


# Guidlines
<!--There isn't a reference to Contributing.md nor the style guide document-->
Visit our [*Contributing guidlines*](https://github.com/PalisadoesFoundation/talawa-docs/blob/master/CONTRIBUTING.md)

Visit our [*style-guide*](https://github.com/PalisadoesFoundation/talawa-docs/blob/master/docs/style-guide.md)

# Website

[This](https://palisadoesfoundation.github.io/talawa-docs/) website of **Talawa** is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Required system configuation
<!-- There are no detailed explanations of how to configure your system to work with the Docusaurus model -->

**Docusaurus** has a unique take on configurations. We encourage you to congregate information of your site into one place.

You should not have to write your `docusaurus.config.js` from scratch even if you are developing your site. All templates come with a `docusaurus.config.js` that includes defaults for the common options.

However, if you have a high-level understanding of how the configurations are designed and implemented visit [this documentation](https://docusaurus.io/docs/configuration).

## Adding new pages
<!-- There isn't a reference on how to add new pages and integrate your changes into our Docusaurus system  -->

Now for adding new pages we should know about creating `ad-hoc` pages in Docusaurus using React.

The functionality of pages is powered by `@docusaurus/plugin-content-pages`.

For information on adding new pages refer [this documentation](https://docusaurus.io/docs/creating-pages).

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
