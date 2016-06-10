#!/usr/bin/env bash
cd "$(dirname "$0")"

echo "Starting application..."

node --es_staging --max-old-space-size=512 ../dist/application/node_modules/Application/Api/app > /proc/1/fd/2 2>&1 &