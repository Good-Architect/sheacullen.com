#!/bin/bash
# test-gate-commit.sh — Block git commits if tests haven't passed.
# Intercepts 'git commit' commands and runs the project's test suite first.
# Runs as a PreToolUse hook on Bash events.
# Exit 2 = block the commit. Exit 0 = allow it.

set -euo pipefail

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Only intercept git commit commands
if ! echo "$COMMAND" | grep -qE '^\s*git\s+commit'; then
  exit 0
fi

# Determine the project directory
CWD=$(echo "$INPUT" | jq -r '.cwd // empty')
if [ -z "$CWD" ]; then
  exit 0
fi

cd "$CWD"

# Detect and run the project's test suite
RAN_TESTS=false

# Node.js projects
if [ -f "package.json" ]; then
  # Check if a test script exists
  HAS_TEST=$(jq -r '.scripts.test // empty' package.json 2>/dev/null)
  if [ -n "$HAS_TEST" ] && [ "$HAS_TEST" != "echo \"Error: no test specified\" && exit 1" ]; then
    echo "Running tests before commit..." >&2
    if command -v pnpm &> /dev/null && [ -f "pnpm-lock.yaml" ]; then
      pnpm test 2>&1 || {
        echo "Tests failed. Fix failing tests before committing." >&2
        exit 2
      }
    elif command -v npm &> /dev/null; then
      npm test 2>&1 || {
        echo "Tests failed. Fix failing tests before committing." >&2
        exit 2
      }
    fi
    RAN_TESTS=true
  fi
fi

# Python projects
if [ "$RAN_TESTS" = false ]; then
  if [ -f "pyproject.toml" ] || [ -f "pytest.ini" ] || [ -f "setup.py" ] || [ -d "tests" ]; then
    if command -v pytest &> /dev/null; then
      echo "Running pytest before commit..." >&2
      pytest --tb=short 2>&1 || {
        echo "Tests failed. Fix failing tests before committing." >&2
        exit 2
      }
      RAN_TESTS=true
    fi
  fi
fi

# Go projects
if [ "$RAN_TESTS" = false ]; then
  if [ -f "go.mod" ]; then
    if command -v go &> /dev/null; then
      echo "Running go test before commit..." >&2
      go test ./... 2>&1 || {
        echo "Tests failed. Fix failing tests before committing." >&2
        exit 2
      }
      RAN_TESTS=true
    fi
  fi
fi

# If no test suite detected, allow the commit
exit 0
