#!/bin/bash
# type-check.sh — Run TypeScript type checking after file edits.
# Only activates in projects that have a tsconfig.json.
# Runs as a PostToolUse hook on Edit|Write events.

set -euo pipefail

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Skip if no file path
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Only check TypeScript files
EXT="${FILE_PATH##*.}"
if [[ "$EXT" != "ts" && "$EXT" != "tsx" ]]; then
  exit 0
fi

# Only run if tsconfig.json exists in the project
# Walk up from the file to find the nearest tsconfig
DIR=$(dirname "$FILE_PATH")
FOUND_TSCONFIG=false
while [ "$DIR" != "/" ]; do
  if [ -f "$DIR/tsconfig.json" ]; then
    FOUND_TSCONFIG=true
    break
  fi
  DIR=$(dirname "$DIR")
done

if [ "$FOUND_TSCONFIG" = false ]; then
  exit 0
fi

# Run type check (non-blocking — report errors to stderr for Claude to see)
cd "$DIR"
if command -v npx &> /dev/null; then
  TYPE_ERRORS=$(npx tsc --noEmit --pretty 2>&1) || {
    echo "$TYPE_ERRORS" >&2
    echo "TypeScript type errors found in $FILE_PATH. Please fix them." >&2
    # Exit 0 — don't block, but Claude will see the stderr feedback
    exit 0
  }
fi

exit 0
