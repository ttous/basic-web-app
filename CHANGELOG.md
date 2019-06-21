# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Summary
- [1.0.0 (unreleased)](#100---unreleased)
- [0.0.8](#008---2019-06-21)
- [0.0.7](#007---2019-03-25)
- [0.0.6](#006---2019-03-01)
- [0.0.5](#005---2019-02-27)
- [0.0.4](#004---2019-02-27)
- [0.0.3](#003---2019-02-26)
- [0.0.2](#002---2019-02-24)
- [0.0.1](#001---2019-02-24)

## [0.0.8] - (2019-06-21)
### Fixed
- Build command for development using `npm`: replace `npm dev_build` by `npm run dev_build`.
### Changed
- Update all packages.

## [0.0.7] - 2019-03-25
### Added
- FAQ in the [README](https://github.com/ttous/basic-web-app/blob/master/README.md).
### Changed
- Update [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) to version 2.0.0.
- Update [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) to version 5.0.0.
- Replace [file-loader](https://github.com/webpack-contrib/file-loader) by [url-loader](https://github.com/webpack-contrib/url-loader).
### Removed
- [opn](https://github.com/sindresorhus/opn) types definitions package.

## [0.0.6] - 2019-03-01
### Fixed
- [TSLint](https://github.com/palantir/tslint) not running everywhere.
- Installation process: first dev run bugging.
### Added
- Images handling.
- [nodemon](https://github.com/remy/nodemon) to automatically restart the server after a build.
### Removed
- [opn](https://github.com/sindresorhus/opn) for opening the app automatically on dev run.
### Changed
- Replace [url-loader](https://github.com/webpack-contrib/url-loader) by [file-loader](https://github.com/webpack-contrib/file-loader).

## [0.0.5] - 2019-02-27
### Added
- A complete [README](https://github.com/ttous/basic-web-app/blob/master/README.md).
- [opn](https://github.com/sindresorhus/opn) for opening the app automatically on dev run.

## [0.0.4] - 2019-02-27
### Fixed
- Runtime error displaying `Error: UNKNOWN: unknown error, stat '\\..\client\index.html'`.
### Changed
- [Webpack](https://github.com/webpack/webpack) bundle build for the server instead of [TypeScript](https://github.com/Microsoft/TypeScript) transpilation build.

## [0.0.3] - 2019-02-26
### Added
- [CHANGELOG](https://github.com/ttous/basic-web-app/blob/master/CHANGELOG.md).
- [React Router](https://github.com/ReactTraining/react-router).
- [Jest](https://github.com/facebook/jest).
- Badges for the [README](https://github.com/ttous/basic-web-app/blob/master/README.md):
    - NPM version.
    - License.
    - Build status ([Travis.ci](https://travis-ci.org)).
    - Dependencies and devDependencies ([David-dm.org](https://david-dm.org)).
    - Vulnerability ([Synk.io](https://snyk.io)).
    - Code coverage ([Coveralls](https://coveralls.io)).
### Removed
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

## [0.0.2] - 2019-02-24
### Added
- [README](https://github.com/ttous/basic-web-app/blob/master/README.md).
- [LICENSE](https://github.com/ttous/basic-web-app/blob/master/LICENSE).
- [CODE_OF_CONDUCT](https://github.com/ttous/basic-web-app/blob/master/CODE_OF_CONDUCT.md).
- [ISSUE_TEMPLATE](https://github.com/ttous/basic-web-app/tree/master/.github/ISSUE_TEMPLATE).

## [0.0.1] - 2019-02-24
### Added
- Initial commit based on [crsandeep](https://github.com/crsandeep)'s [simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack).
- [TSLint](https://github.com/palantir/tslint) for code styling.
- [Pino](https://github.com/pinojs/pino) for logging.
- [Sass](https://github.com/sass/node-sass) for CSS.
### Removed
- [ESLint](https://github.com/eslint/eslint).
