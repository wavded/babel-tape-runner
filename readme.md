# babel-tape-runner

A test runner for tape that utilizes babel in order to run test suites that include ESNext/Harmony features.

## install

Install globally or locally (for npm scripts):

```sh
npm install babel-tape-runner [-g]
```

## usage

Just run `babel-tape-runner` with the files to test (just like tape's bundled runner).

```sh
babel-tape-runner my-es-next-test.js

babel-tape-runner lib/**/__tests__/*-test.js # or glob patterns
```

## licence

MIT
