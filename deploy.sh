#!/usr/bin/env bash
yarn run build

scp -r ./build/* masters-prod:/usr/share/nginx/html
