<span align="center">
  
<h1>Nuxt.js Template</h1>
<h3>Full-featured template for JAMstack websites using nuxt.js</h3>

<p>
  
[![Build Status](https://travis-ci.org/jsulpis/nuxtjs-template.svg?branch=master)](https://travis-ci.org/jsulpis/nuxtjs-template)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nuxt-template&metric=alert_status)](https://sonarcloud.io/dashboard?id=nuxt-template)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=nuxt-template&metric=coverage)](https://sonarcloud.io/dashboard?id=nuxt-template)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
</p>

<a href="https://nuxtjs-template.netlify.app">
  <img class="repo-preview" src="https://raw.githubusercontent.com/jsulpis/nuxtjs-template/master/preview.png" alt="Screenshot image"/>
</a>

</span>

**Deploy your own copy of this project on Netlify in just a few clicks:**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jsulpis/nuxtjs-template)

## About

I built this template with all the tools I found useful to develop my own personal projects, so it can be a bit biased. If you find something that you think is not relevant or could be improved, please open an issue or a pull request to fix it.

## Features

**Vue.js + TypeScript**

- Because I love strongly typed languages (I'm a bit of a java developer at heart)

**Linting**

- Don't bother with linting ever again. Let Prettier handle it for you. Pre-commit hook included to lint your staged files.

**Testing Setup**

- Unit tests with Jest and Vue Test Utils
- E2e tests with Cypress (runs in the CI)

**UI**

- Multiple color themes
- Leverage the power of Tailwind CSS to build beautiful interfaces. You will find a Tailwind config file that you can customize to build your own theme.
- You can also use conventional scss style in the components.
- FontAwesome icons ready to use.

**SEO**

- Populate each page header metadata with name, description, image, etc.

**Accessibility**

- i18n preconfigured with two locales (English and French)

**PWA**

- Users can install the application on their device and run it offline

**Deployment**

- Example of CI with Travis-CI
- Ready to deploy on Netlify using git integration
- Google global site tag (gtag.js) for sending data to Google Analytics

## Installation

Clone the repository and install the dependencies:

```shell
git clone https://github.com/jsulpis/nuxtjs-template.git && cd nuxtjs-template && yarn
```

## Usage

### Development

Serve with hot reload at localhost:3000.

```
yarn dev
```

### Build

If you want a JAMstack website: generate a fully static project with pre-rendered pages to put directly on a server or any hosting platform.

```
yarn generate
```

If you want to serve your website with SSR:

```
yarn build
yarn start
```

## Deployment

This template is ready to be deployed on Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jsulpis/nuxtjs-template)

See the `Deployment` section of the [documentation](https://nuxtjs-template.netlify.app/documentation) for more information.

You can integrate Netlify with your GitHub account, which will allow it to deploy each branch and pull request to their own environment, and the master branch in production.

## Configuration

See the [documentation](https://nuxtjs-template.netlify.app/documentation)

## License

Although you don't _have_ to, if you reuse this template for your projects I would appreciate it if you would credit me and provide a link to my GitHub profile in the footer. Thanks !

Released under the [MIT](https://github.com/jsulpis/nuxtjs-template/blob/master/LICENSE) license.
