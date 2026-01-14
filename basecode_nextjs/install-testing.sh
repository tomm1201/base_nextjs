#!/bin/bash

echo "Installing testing dependencies..."

npm install --save-dev \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jest \
  jest-environment-jsdom \
  @types/jest

echo ""
echo "✅ Testing dependencies installed successfully!"
echo ""
echo "You can now run tests with:"
echo "  npm test              - Run all tests"
echo "  npm run test:watch    - Run tests in watch mode"
echo "  npm run test:coverage - Run tests with coverage"
