#!/bin/bash
rm -rf dist
mkdir dist
npx terser src/index.mjs -o ./dist/index.min.js --compress --mangle
