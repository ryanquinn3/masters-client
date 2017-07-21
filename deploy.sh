#!/usr/bin/env bash
yarn run build

scp -r ./build/* pickem:/usr/share/nginx/html
