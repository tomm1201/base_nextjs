# CI/CD Pipeline

This project uses GitHub Actions for continuous integration.

## CI Workflow

The CI workflow runs automatically on:

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

### CI Steps

1. **Type Check** - Validates TypeScript types

   ```bash
   npm run type-check
   ```

2. **Lint** - Checks code quality with ESLint

   ```bash
   npm run lint
   ```

3. **Format Check** - Ensures code formatting with Prettier

   ```bash
   npm run format:check
   ```

4. **Test** - Runs unit tests (placeholder for now)

   ```bash
   npm run test
   ```

5. **Build** - Creates production build
   ```bash
   npm run build
   ```

## Running CI Locally

Before pushing code, you can run all CI checks locally:

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Check formatting
npm run format:check

# Auto-fix formatting
npm run format

# Run tests
npm run test

# Build project
npm run build
```

## Run all checks at once

```bash
npm run type-check && npm run lint && npm run format:check && npm run test && npm run build
```

## Status Badge

Add this to your main README.md:

```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/badge.svg)
```
