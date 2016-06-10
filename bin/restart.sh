#!/usr/bin/env bash
cd "$(dirname "$0")"

# Kill previous node process if any
ps aux | grep -ie node | awk '{print $1}' | xargs kill -9 > /dev/null 2>&1

sh run.sh