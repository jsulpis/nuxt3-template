<span align="center">
  
<h1>Nuxt 3 Template</h1>
<h3>Optimized for public websites</h3>

<p>
  
[![CI](https://github.com/jsulpis/nuxt3-template/actions/workflows/ci.yml/badge.svg)](https://github.com/jsulpis/nuxt3-template/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
</p>

<a href="https://nuxt3-template-jsulpis.vercel.app">
  <img src="https://raw.githubusercontent.com/jsulpis/nuxt3-template/master/preview.jpg" alt="Screenshot of the website"/>
</a>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjsulpis%2Fnuxt3-template&demo-title=Nuxt%203%20template&demo-description=Template%20for%20public%20websites&demo-url=https%3A%2F%2Fnuxt3-template-jsulpis.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fjsulpis%2Fnuxt3-template%2Fmaster%2Fpreview.jpg)

</span>

## About

I built this template with all the tools I use in my own personal projects, in order to have a solid starting point for new projects, and hopefully for other developers to benefit from it. I did my best to build the skeleton of what I think is a solid website with proper accessibility, SEO, performance etc.

You can see this template in action on my [photography portfolio](https://www.jsulpis.photos).

Be aware that this template might quickly become out of date because the web is moving fast !

### Why 'public websites' ?

My side projects are simple public websites, mostly static, with a few simple APIs (contact, fetch data...). This template is optimized for this kind of project.

If you are starting something more complex that needs a full backend with database, authentication etc, I suggest that you give a look at [sidebase](https://sidebase.io/).

## Features

**Core**

- [Nuxt 3](https://nuxt.com/), powered by [Vite](https://vitejs.dev/) and [Nitro](https://nitro.unjs.io/) (among others), auto-imports, API routes
- State management with [Pinia](https://pinia.vuejs.org/) stores
- [VueUse](https://vueuse.org/) functions
- Sass theme, functions and mixins for common use cases

**Performance**

- Hybrid rendering: combination of SSG and SSR depending on the routes
- Cache-Control header pre-configured on API and SSR routes using a Nuxt [server middleware](https://nuxt.com/docs/guide/directory-structure/server#server-middleware)
- Self-hosted fonts using [Fontsource](https://fontsource.org/)
- [100% Lighthouse score](https://pagespeed.web.dev/report?url=https%3A%2F%2Fnuxt3-template-jsulpis.vercel.app%2F&hl=fr&form_factor=desktop) on desktop, 97 on mobile

**Static checks**

- Typescript everywhere
- eslint, prettier
- pre-commit hook for lint and format

**Testing**

- E2e tests on multiple browsers, desktop and mobile, using [Playwright](https://playwright.dev/)
- Script that fetches the API data and stores it in local files in order to run the app in "mock" mode. It is used for the e2e tests but can be run in standalone, for offline development for instance.

**i18n**

- multiple languages support with the [@nuxtjs/i18n](https://nuxt.com/modules/i18n) module
- language switch
- automatic language detection and redirection using [Vercel Edge Middleware](https://vercel.com/docs/concepts/functions/edge-middleware)
- meta and link tags for SEO (`og:locale`, `hreflang`...)

**SEO**

- meta tags automatically setup for all pages, using titles and descriptions from translation files
- robots.txt, sitemap.xml

**Accessibility**

- accessible navigation provided by default for desktop and mobile
- 'Skip navigation' link for keyboard users

**CI / CD**

- GitHub Action workflow pre-configured on PRs and main branch to run all static checks and tests
- Ready to deploy on Vercel (see the [Deployment](https://github.com/jsulpis/nuxt3-template#deployment) section below)

**Analytics**

- integration of [Plausible](https://plausible.io), which is the only paid service here: you can use something else (or nothing at all), but I chose this one because it is GDPR compliant without the need for a cookie banner, it has a lightweight script, a nice clean UI with only relevant data, and unlimited data retention.

## Installation

**Using GitHub**

Click on the button 'Use this template' at the top of this page.

Please check 'Include all branches' in order to have the starter branch, which is the pristine template without the demo and documentation.

**Using your terminal**

Fetch the starter branch without all the git history:

```shell
npx degit jsulpis/nuxt3-template#starter your-project
```

```shell
cd your-project && pnpm install
```

## Usage

### Development

Start the development server with hot module replacement:

```bash
pnpm dev
```

Start in mock mode:

```bash
pnpm dev:mock
```

See the other scripts in the `package.json`.

## Deployment

You can connect Vercel and GitHub to deploy each branch and pull request to their own environment, and the main branch in production:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjsulpis%2Fnuxt3-template&demo-title=Nuxt%203%20template&demo-description=Template%20for%20public%20websites&demo-url=https%3A%2F%2Fnuxt3-template-jsulpis.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fjsulpis%2Fnuxt3-template%2Fmaster%2Fpreview.jpg)

Note that you should be able to deploy this template on another cloud provider (Nuxt 3 supports [a lot of them](https://nuxt.com/docs/getting-started/deployment#supported-hosting-providers)), but you will have to do the redirection of the users based on their language, which is currently implemented with Vercel Edge Middleware.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

Released under the [MIT](https://github.com/jsulpis/nuxt3-template/blob/master/LICENSE) license.

Although you don't _have_ to, if you reuse this template for your projects I would appreciate if you would add a little note like '_[Nuxt 3](https://nuxt3-template-jsulpis.vercel.app) template by [@jsulpis](https://twitter.com/jsulpis)_' in your footer. Thanks !
