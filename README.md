# KizilEcommerce

## Overview

KizilEcommerce is a frontend e-commerce storefront project. Its home page brings together a hero banner, product categories, flash deals, new arrivals, top picks, and popular bundles, with shared navigation and footer components.

## Purpose

This project is being built for learning and practice. It is a hands-on way to explore React, TypeScript, reusable UI components, styling, and routing while creating an e-commerce style interface. Product content is currently presented as a frontend experience; no backend or checkout flow is configured in this repository.

## Tech stack

- React 19
- TypeScript
- React Router 7 (framework mode)
- Vite
- Tailwind CSS 4, with the Tailwind Vite plugin
- Material UI and Emotion
- Lucide React and React Icons
- Node.js for development and serving the production build

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Generate route types and run TypeScript checks |

## Project structure

```text
app/
  mainLayout/   Shared navigation, layout, and footer
  routes/       Home page and storefront sections
  root.tsx      Application document and global styles
public/         Static assets
```
