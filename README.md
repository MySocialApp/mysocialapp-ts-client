# MySocialApp Typescript Library
[![npm version](https://img.shields.io/npm/v/mysocialapp-ts-client.svg?style=flat-square)](https://www.npmjs.com/package/mysocialapp-ts-client)

SDK still in beta phase. Stable version will be out current October.

The Javascript library for interacting with the [MySocialApp](https://mysocialapp.io?ref=github) API.

In order to use this library, you need to have a free account on [https://go.mysocialapp.io](https://go.mysocialapp.io?ref=github). After registering, you will need the application credentials for your app.


# What is MySocialApp?
#### MySocialApp - Seamless Social Networking features for your app

MySocialApp’s powerful API lets you quickly and seamlessly implement social networking features within your websites, mobile and back-end applications. Save months of development headache and focus on what makes your app unique.


# Table of contents

- [Install](#install)
- [Getting Started](#getting-started)
- [Documentation](https://docs.mysocialapp.io/reference?ref=github)
- [Demo app](#demo-app) 
- [Docker](##Compile)
- [Contributions](#contributions)

# Install

```
    npm install mysocialapp-ts-client
```


## Getting Started

[Read Javascript getting started](https://docs.mysocialapp.io/v1.0/docs/quick-start-javascript?ref=github)

## API Documentation

[Complete API documentation is available here](https://docs.mysocialapp.io/reference?ref=github)

# Demo app

Here are demo apps that use the 100% MySocialApp API

* [MySocialApp Android](https://play.google.com/store/apps/details?id=io.mysocialapp.android)
* [MySocialApp iOS](https://itunes.apple.com/fr/app/mysocialapp-your-social-app/id1351250650)


## Compile

Use docker to compile project

````
docker run -v $PWD:/mnt -it --entrypoint /bin/sh node:9-alpine
````

- Get node modules

```
cd /mnt && npm install
```


```
#compile ts files
cd /mnt && npm run build

# exec tests
npm run test 
    OR
cd /mnt && ./node_modules/.bin/jest test

# concat file
cd /mnt && npm run concat
```

# Contributions

All contributions are welcomed