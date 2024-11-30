#!/bin/bash
echo "Preparing application for deployment..."

echo "Cleaning up node_modules..."
rm -rf node_modules

echo "Installing production dependencies..."
npm install --production

echo "Application is ready for deployment!"
