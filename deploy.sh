#!/bin/bash

# replace the webpack-dev-server javascript line
sed -i '/webpack:8080/d' ./public/index.html &&

# Run webpack which will inject the js files into the index.html files
./node_modules/.bin/webpack --config webpack.production.js&&

./node_modules/.bin/styleguidist build &&

goapp deploy &&

# Clear out the webpack generated bundle directory
rm -rf ./public/bundle &&
git checkout public/index.html
