#!/bin/bash

set -e

echo "=============================================="
echo "      Playwright UI Automation Execution"
echo "=============================================="

echo "Environment    : $ENV"
echo "Browser        : $BROWSER"
echo "Suite          : $SUITE"
echo "Shard          : $SHARD"
echo "=============================================="

COMMAND="npx playwright test"

#########################################################
# Browser
#########################################################

if [ -n "$BROWSER" ]; then
  COMMAND="$COMMAND --project=$BROWSER"
fi

#########################################################
# Suite
#########################################################

if [ "$SUITE" != "all" ]; then
  COMMAND="$COMMAND --grep @$SUITE"
fi

#########################################################
# Sharding
#########################################################

if [ -n "$SHARD" ]; then
  COMMAND="$COMMAND --shard=$SHARD"
fi

#########################################################
# Display Command
#########################################################

echo ""
echo "Executing Command:"
echo "$COMMAND"
echo ""

#########################################################
# Execute Tests
#########################################################

eval "$COMMAND"

#########################################################
# Execution Completed
#########################################################

echo ""
echo "=============================================="
echo " UI Automation Execution Completed Successfully "
echo "=============================================="
