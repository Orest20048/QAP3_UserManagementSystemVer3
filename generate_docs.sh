#!/bin/bash
echo "Generating documentation..."

if [ -d "docs" ]; then
    rm -rf docs
fi

npx jsdoc -c jsdoc.json

echo "Documentation generated in the 'docs' directory."
