# pathpida (forked by ubugeeei)
 \- Nuxt Route Type Implementation -

<br />
<img src="https://aspida.github.io/pathpida/logos/png/logo.png" alt="pathpida" title="pathpida" />
<div align="center">
  <a href="https://www.npmjs.com/package/pathpida">
    <img src="https://img.shields.io/npm/v/pathpida" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/pathpida">
    <img src="https://img.shields.io/npm/dm/pathpida" alt="npm download" />
  </a>
  <a href="https://github.com/aspida/pathpida/actions?query=workflow%3A%22Node.js+CI%22">
    <img src="https://github.com/aspida/pathpida/workflows/Node.js%20CI/badge.svg?branch=master" alt="Node.js CI" />
  </a>
  <a href="https://codecov.io/gh/aspida/pathpida">
    <img src="https://img.shields.io/codecov/c/github/aspida/pathpida.svg" alt="Codecov" />
  </a>
  <a href="https://lgtm.com/projects/g/aspida/pathpida/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/g/aspida/pathpida.svg" alt="Language grade: JavaScript" />
  </a>
</div>
<br />
<p align="center">TypeScript friendly internal link client for Next.js, Nuxt.js and Sapper.</p>
<br />
<br />

## Features

- **Type safety**. Automatically generate type definition files for manipulating internal links in Next.js/Nuxt.js/Sapper.
- **Zero configuration**. No configuration required can be used immediately after installation.
- **Zero runtime**. Lightweight because runtime code is not included in the bundle.
- **Support for static files**. Static files in public/ are also supported, so static assets can be safely referenced.

## Table of Contents

- [pathpida (forked by ubugeeei)](#pathpida-forked-by-ubugeeei)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Setup - Nuxt.js](#setup---nuxtjs)
  - [Usage - Nuxt.js](#usage---nuxtjs)
  - [License](#license)

## Install

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install ubugeeei-pathpida npm-run-all --save-dev
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add  ubugeeei-pathpida npm-run-all --dev
  ```

## Setup - Nuxt.js

`package.json`

```json
{
  "scripts": {
    "dev": "run-p dev:*",
    "dev:nuxt": "nuxt-ts",
    "dev:path": "ubugeeei-pathpida --ignorePath .gitignore --watch",
    "build": "ubugeeei-pathpida --ignorePath .gitignore && nuxt-ts build"
  }
}
```

`nuxt.config.js` or `nuxt.config.ts`

```js
{
  plugins: ['~/plugins/$path'],
  srcDir: 'client', // optional
  router: {
    trailingSlash: true // optional
  }
}
```

<a id="Usage-nuxt"></a>

## Usage - Nuxt.js

```
pages/index.vue
pages/post/create.vue
pages/post/_pid.tsx

plugins/$path.ts // Generated automatically by pathpida
```

`pages/index.vue`

```vue
<template>
  <div>
    <nuxt-link :to="$pagesPath.post._pid(1).$url()" />
    <div @click="onClick" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { pagesPath } from "~/plugins/$path"

export default Vue.extend({
  methods: {
    onClick() {
      this.$router.push(pagesPath.post._pid(1).$url())
    }
  }
})
</script>
```

ubugeeei-pathpida custom implements

```vue
<template>
  <div>
    <nuxt-link :to="$pagesPath.post.create.$url()" />
    <div @click="onClick($pagesPath.post.create.$name())" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { RouteName } from "~/plugins/$path"

export default Vue.extend({
  methods: {
    onClick(routeName: RouteName) {
      this.$router.push({ name: routeName })
    }
  }
})
</script>
```

## License

pathpida is licensed under a [MIT License](https://github.com/aspida/pathpida/blob/master/LICENSE).
