#!/bin/bash
echo "Setting up environment variables..."

if [ ! -f .env ]; then
    echo "Creating .env file..."
    echo "SESSION_SECRET=$(openssl rand -base64 32)" > .env
    echo ".env file created with a secure SESSION_SECRET."
else
    echo ".env file already exists. Skipping creation."
fi
