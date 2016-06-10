#!/usr/bin/env bash
cd "$(dirname "$0")"

sh compile.sh
sh run.sh

# Run top as a long running process just to stay up and running. That might be workaround.
if pgrep "top" > /dev/null
then
    echo "Top is Running"
else
    top > /dev/null
fi
