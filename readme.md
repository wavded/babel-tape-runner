[![build status](https://img.shields.io/travis/wavded/babel-tape-runner.svg?style=flat-square)](https://travis-ci.org/wavded/babel-tape-runner) [![npm package](https://img.shields.io/npm/v/babel-tape-runner.svg?style=flat-square)](https://www.npmjs.org/package/babel-tape-runner) [![dependency status](https://img.shields.io/david/wavded/babel-tape-runner.svg?style=flat-square)](https://david-dm.org/wavded/babel-tape-runner)

```
Using Babel 6: Use ^2.0.0
Using Babel 5: Use ^1.0.0
```

A test runner for tape that utilizes babel in order to run test suites that include ESNext/Harmony features.

## install

Install globally or locally (for npm scripts):

```sh
npm install babel-tape-runner [-g]
```

## usage

Just run `babel-tape-runner` with the files to test (just like tape's bundled runner).  Store configuration in a `.babelrc` file.

```sh
babel-tape-runner my-es-next-test.js

babel-tape-runner lib/**/__tests__/*-test.js # or glob patterns
```

## licence

MIT
