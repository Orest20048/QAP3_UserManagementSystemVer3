#!/bin/bash
echo "Resetting application data..."

echo "Restarting the server to clear in-memory data..."
pkill -f node
npm start &

echo "Application data has been reset."
