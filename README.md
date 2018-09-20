[![Build Status](https://travis-ci.com/web3data/web3data-js.svg?branch=master)](https://travis-ci.com/web3data/web3data-js)
[![Discord](https://img.shields.io/discord/102860784329052160.svg)](https://forum.amberdata.io/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

# Web3data Javascript API

## Table of Contents
&nbsp;&nbsp;[Usage](#usage)
<br/>&nbsp;&nbsp;[Installation](#installation)
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Requirements](#requirements)
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Building](#building)
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Testing](#testing)
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[Community](#community)
<br/>&nbsp;&nbsp;[Resources](#resources)
<br/>&nbsp;&nbsp;[Licensing](#licensing)

## Usage
## Installation
Using node:
```bash
npm install web3data
```
Using yarn:
```bash
yarn add web3data
```
Using bower:
```bash
bower install web3data
```
Using CDN:
```html
<script src=".../web3data.min.js"></script>
```

### Requirements
- Node.js
- npm
### Building

#### Builds for node and browser

```bash
npm run build
```

#### Build for node

```bash
npm run build-node
```

#### Build for browser
```bash
npm run build-browser
```

### Testing
```bash
npm test
```
This will run all tests using the prerecorded responses from [fixtures](test/fixtures/eb3ap.io).

```bash
npm test-live
```
Runs tests using live responses from our endpoints. (Requires API key see [Obtaining an Api key](#obtaininganapikey)).

```bash
npm test-record
```
Runs tests using live responses from our endpoints and records them in your fixtures folder.

### Obtaining an Api key
Create an account at Amberdata.io, and in go to your account dash board.
Then place it in a file named `.env`. (See [example](./env.example)).


## Community
- [Discourse](https://forum.amberdata.io/)

## Resources
- [Contributing](./CONTRIBUTING.md)
## Licensing

This project is licensed under the [Apache Licence 2.0](./LICENSE).
