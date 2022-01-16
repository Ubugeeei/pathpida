/* eslint-disable */
// prettier-ignore
import { Plugin } from '@nuxt/types'
// prettier-ignore
import { Query as Query0 } from '../pages'
// prettier-ignore
import { Query as Query2 } from '../pages/blog/_slug'

// prettier-ignore
type OptionalQuery1 = { hoge: string }

// prettier-ignore
export const pagesPath = {
  _ignore: {
    $url: (url?: { hash?: string }) => ({ path: '/.ignore/', hash: url?.hash }),
    $name: () => `.ignore`
  },
  _a: (a: string | number) => ({
    b: {
      _c: (c: string | number) => ({
        $url: (url?: { hash?: string }) => ({ path: `/${a}/b/${c}/`, hash: url?.hash }),
        $name: () => `a-b-c`
      })
    }
  }),
  _pid: (pid?: string | number) => ({
    $url: (url?: { query?: OptionalQuery1, hash?: string }) => ({ path: `${pid !== undefined ? `/${pid}` : ''}/`, query: url?.query as any, hash: url?.hash }),
    $name: () => `pid`
  }),
  aaa: {
    _bbb: (bbb: string | number) => ({
      ccc: {
        $url: (url?: { hash?: string }) => ({ path: `/aaa/${bbb}/ccc/`, hash: url?.hash }),
        $name: () => `aaa-bbb-ccc`
      },
      $url: (url?: { hash?: string }) => ({ path: `/aaa/${bbb}/`, hash: url?.hash }),
      $name: () => `aaa-bbb`
    })
  },
  blog: {
    _slug: (slug?: string | number) => ({
      $url: (url: { query: Query2, hash?: string }) => ({ path: `/blog${slug !== undefined ? `/${slug}` : ''}/`, query: url.query as any, hash: url.hash }),
      $name: () => `blog-slug`
    })
  },
  $url: (url: { query: Query0, hash?: string }) => ({ path: '/', query: url.query as any, hash: url.hash }),
  $name: () => ``
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  aa_json: '/aa.json',
  bb: {
    _ignore: '/bb/.ignore',
    cc_png: '/bb/cc.png'
  },
  duplicate_json_0: {
    sample_json: '/duplicate-json/sample.json'
  },
  duplicate_json_1: '/duplicate.json',
  duplicate_json_2: '/duplicate_json'
} as const

// prettier-ignore
export type StaticPath = typeof staticPath

// prettier-ignore
declare module 'vue/types/vue' {
  interface Vue {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }
}

// prettier-ignore
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }

  interface Context {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }
}

// prettier-ignore
declare module 'vuex/types/index' {
  interface Store<S> {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }
}

// prettier-ignore
const pathPlugin: Plugin = (_, inject) => {
  inject('pagesPath', pagesPath)
  inject('staticPath', staticPath)
}

// prettier-ignore
export default pathPlugin
