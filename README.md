# esbuild-ts-register

Transforms Typescript to Javascript in `require()` calls. Often used in test suites written in Typescript.

Sample `.mocharc.js` usage:

```js
module.exports = {
  extension: ["ts"],
  require: ["@lookback/esbuild-ts-register"],
};
```
