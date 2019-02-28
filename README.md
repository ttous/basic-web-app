# basic-web-app

[![NPM Version](https://img.shields.io/npm/v/basic-web-app.svg)](https://www.npmjs.org/package/basic-web-app) [![License](https://img.shields.io/npm/l/basic-web-app.svg)](https://www.npmjs.org/package/basic-web-app) [![Build Status](http://img.shields.io/travis/ttous/basic-web-app/master.svg)](https://travis-ci.org/ttous/basic-web-app) [![Dependencies Status](https://img.shields.io/david/ttous/basic-web-app.svg)](https://david-dm.org/ttous/basic-web-app) [![devDependencies Status](https://david-dm.org/ttous/basic-web-app/dev-status.svg)](https://david-dm.org/ttous/basic-web-app?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/ttous/basic-web-app/badge.svg)](https://snyk.io/test/github/ttous/basic-web-app) [![Coverage Status](https://coveralls.io/repos/github/ttous/basic-web-app/badge.svg)](https://coveralls.io/github/ttous/basic-web-app)

_basic-web-app_ is a ~~basic~~ isomorphic web app code to start a project using React.js, Sass, Node.js, Express, Jest, TSLint, React Router and Webpack.

## Summary
- [Installation](#installation)
- [Quick start](#quick-start)
- [Features](#features)
- [Contributing](#contributing)
- [Special thanks](#special-thanks)

## Installation
#### Fork it
To start your project, fork this one from the [github page](https://github.com/ttous/basic-web-app).
You can also mirror it to another repository if you would like to keep being updated by the original one. Check [this Github documentation](https://help.github.com/en/articles/duplicating-a-repository) on repository duplication and mirroring for more information.

#### Change it
Now that you have your own copy of the code, you should customize it by editing the following files:
- `README.md`: The edition depends on you.
- `CHANGELOG.md`: It should be empty.
- `package.json`: You can change the `name`, `version`, `description`, `author`, `homepage`, `repository` and `bugs` properties.

#### Yarn it
After the app was put in your Github repository, you can install it locally as follow:
```bash
git clone https://github.com/<your_username>/basic-web-app
cd basic-web-app
yarn          # or 'npm i'
```

#### That's it!
You can finally start developing! No further configuration is needed: _basic-web-app_ is intended to allow you to start coding as soon as it is installed.

## Quick start
#### Development
For development, you can run:
```bash
yarn dev      # or 'npm run dev'
```
Your favorite browser should open right after the webpack bundling is done.

#### Production
For your production, simply run:
```bash
yarn start    # or 'npm start'
```

#### Tests
To launch the tests, run:
```bash
yarn test     # or 'npm test'
```
Happy coding!

## Features
_basic-web-app_ implements a lot of features already put together for you to skip the ~~boring~~ configuration and go directly to the fun part!
- [React.js](https://github.com/facebook/react) for the frontend.
- [Sass](https://github.com/sass/node-sass) for the style.
- [Node.js](https://github.com/nodejs/node) for the backend.
- [TSLint](https://github.com/palantir/tslint) for the code.
- [Express](https://github.com/expressjs/express) for the server.
- [React Router](https://github.com/ReactTraining/react-router) for the routing.
- [Jest](https://github.com/facebook/jest) for the tests.
- [Webpack](https://github.com/webpack/webpack) for the unity.

## Contributing
Contributions are very welcome! Please check out the [Code of Conduct](https://github.com/ttous/basic-web-app/blob/master/CODE_OF_CONDUCT.md) before making your pull requests.

## Special thanks
- Thanks to [crsandeep](https://github.com/crsandeep) and his repository ([simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)) on which this one is based on.
- Thanks to [Alligator.io](https://alligator.io) and their article about React routing: [Using React Router 4 with Server-Side Rendering](https://alligator.io/react/react-router-ssr/).
- Thanks to [Soon Hin Khor](https://medium.com/@khor) and his article about full-stack [Webpack](https://github.com/webpack/webpack) configuration: [Webpack Javascript Bundling for Both Front-end and Back-end (nodejs)](https://medium.com/code-oil/webpack-javascript-bundling-for-both-front-end-and-back-end-b95f1b429810).
