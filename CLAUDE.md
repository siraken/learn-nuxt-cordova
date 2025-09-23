# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

This is a hybrid mobile app built with **Nuxt.js 4** and **Apache Cordova**, targeting both Android and iOS platforms.

- **Package Manager**: `bun`
- **Linting**: Uses Biome with `@novalumo/biome-config` preset
- **TypeScript**: Enabled with Nuxt 4 built-in TypeScript support
- **Styling**: CSS with Tailwind CSS

## Key Commands

```bash
# Development
bun run dev              # Start Nuxt development server
bun run build           # Build Nuxt app for production
bun run start           # Preview production build
bun run generate        # Generate static files and sync to Cordova

# Mobile Development
bun run cordova [command]  # Run Cordova commands from app directory
bun run android            # Build and run on Android
bun run ios               # Build and run on iOS

# Code Quality
npx biome check        # Run Biome linter/formatter
npx biome check --write # Auto-fix linting issues
```

## Architecture

- **Framework**: Nuxt.js 4 in SPA mode (`ssr: false`) for Cordova compatibility
- **Build Output**: Generated files are synced to `app/www/` for Cordova packaging with path replacement from `/nuxt/` to `nuxt/` for Cordova
- **Mobile Integration**: Cordova.js script integration ready for device APIs
- **Configuration**: Uses TypeScript configuration file (`nuxt.config.ts`)

### Directory Structure

- `pages/` - Nuxt.js pages
- `components/` - Vue components
- `assets/css/` - CSS stylesheets with app-wide styles
- `app/` - Cordova project directory containing mobile app configuration

### Mobile Configuration

- **App ID**: `net.siraken.cordovanuxtapp`
- **Platforms**: Android & iOS
- **Target**: ES2015 for mobile compatibility
- **Viewport**: Optimized for mobile with viewport-fit=cover
