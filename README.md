# Astro HTTPS: Integration Package

This is an Astro integration to provide certificate support (HTTPS) using mkcert.

## Install from Github

```sh
pnpm install github:jllahi/astro-https
```

## Configure astro.config.mjs

```js
import { defineConfig } from 'astro/config'
import https from 'astro-https'

// https://astro.build/config
export default defineConfig({
	integrations: [https()],
})
```
