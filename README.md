<span align="center">
  
<h1>Nuxt template</h1>
<h3>A comprehensive template for nuxt-based projects.</h3>

<p>
  
[![Build Status](https://travis-ci.org/jsulpis/nuxt-template.svg?branch=master)](https://travis-ci.org/jsulpis/nuxt-template)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/86fbae01c9e747539b33b869142eff69)](https://www.codacy.com/app/jsulpis/nuxt-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jsulpis/nuxt-template&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/86fbae01c9e747539b33b869142eff69)](https://www.codacy.com/app/jsulpis/nuxt-template?utm_source=github.com&utm_medium=referral&utm_content=jsulpis/nuxt-template&utm_campaign=Badge_Coverage)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
</p>

<a href="https://jsulpis.github.io/nuxt-template/">
  <img class="repo-preview" src="https://raw.githubusercontent.com/jsulpis/nuxt-template/master/preview.png" alt="ScreenShot image"/>
</a>

</span>

## Introduction

After some research on the Internet, I found Nuxt templates with a lot of good features: templates for using Nuxt with TypeScript, templates with internationalisation, templates with good testing setups... but none of them had ALL those features together. So I made this template which gathers all I wanted to have in a Nuxt application. I hope it will suit your needs as well.

## Features

This template started from an application generated with the 'create-nuxt-app' command. Then I added some features.

**TypeScript**

- Supported in vue files. You can also write your business logic in separate TypeScript files and import it in your components.

**Linting**

- ESlint
- Prettier

**Testing Setup**

- Unit tests with Jest
- E2E tests with Nightwatch

**Internationalisation**

- with nuxt-i18n to translate your app in multiple languages

**Deployment**

- Example of CI/CD on GitHub Pages with Travis-CI
- Plugin for Google Analytics

## Installation

### Install

Download the zip or clone this project.

```
git clone https://github.com/jsulpis/nuxt-template.git
cd nuxt-template
```

then install all the dependencies.

```
npm install
```

## Usage

### Development

Serve with hot reload at localhost:3000.

```
npm run dev
```

### Deployment

Build for production and launch server. Your application is then served with server-side rendering (SSR).

```
npm run build
npm start
```

Or generate a static project with pre-rendered pages to put directly on your server (or GitHub Pages). This is better for SEO.

```
npm run generate
```

## Contributing

Contributions are welcome ! If you improve this template, feel free to share it.

1. Fork the project (<https://github.com/jsulpis/nuxt-template/fork>)
2. Clone it on your machine (`git clone https://github.com/yourName/nuxt-template.git`)
3. Create your feature branch (`git checkout -b feature/awesomeFeature`)
4. Commit your changes (`git commit -am 'Add my awesome feature'`)
5. Push your branch (`git push origin feature/awesomeFeature`)
6. Open a new Pull Request

## License

Released under the [MIT](https://github.com/jsulpis/nuxt-template/blob/master/LICENSE) license.
