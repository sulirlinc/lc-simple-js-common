#!/bin/bash
rm -rf dist
mkdir dist
npx terser src/index.mjs -o ./dist/index.min.js --compress --mangle
cp src/index.d.ts dist/lc-simple-js-common.d.ts
