# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

This is a hybrid mobile app built with **Nuxt.js 2** and **Apache Cordova**, targeting both Android and iOS platforms.

- **Package Manager**: `pnpm` (primary) or `bun` (alternative, based on lock files present)
- **Linting**: Uses Biome with `@novalumo/biome-config` preset
- **TypeScript**: Enabled with Nuxt TypeScript build module
- **Styling**: SCSS with Tailwind CSS

## Key Commands

```bash
# Development
pnpm dev              # Start Nuxt development server
pnpm build           # Build Nuxt app for production
pnpm generate        # Generate static files and sync to Cordova

# Mobile Development
pnpm cordova [command]  # Run Cordova commands from app directory
pnpm run-android        # Build and run on Android
pnpm run-ios           # Build and run on iOS

# Code Quality
npx biome check        # Run Biome linter/formatter
npx biome check --write # Auto-fix linting issues
```

## Architecture

- **Framework**: Nuxt.js 2 in SPA mode (`ssr: false`) with hash router for Cordova compatibility
- **Build Output**: Generated files are synced to `app/www/` for Cordova packaging
- **Public Path**: Set to `/nuxt/` with runtime replacement to `nuxt/` for Cordova
- **Mobile Integration**: Cordova.js script loaded in HTML head for device APIs

### Directory Structure

- `pages/` - Nuxt.js pages (egift, index, order, pay, settings, stores)
- `components/` - Vue components (Balance, Footer, Header)
- `assets/scss/` - SCSS stylesheets with app-wide styles
- `app/` - Cordova project directory containing mobile app configuration

### Mobile Configuration

- **App ID**: `net.siraken.cordovanuxtapp`
- **Platforms**: Android & iOS with camera permissions for QR/barcode scanning
- **Content Security Policy**: Configured for Cordova hybrid app requirements
