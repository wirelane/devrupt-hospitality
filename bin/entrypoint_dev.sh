#!/usr/bin/env sh

cd /app

npm install
npm run build

exec "$@"
