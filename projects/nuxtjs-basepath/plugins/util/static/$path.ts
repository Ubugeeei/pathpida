/* eslint-disable */
// prettier-ignore
import { Plugin } from '@nuxt/types'

// prettier-ignore
type Query0 = { hoge: string }

// prettier-ignore
type OptionalQuery1 = { hoge: string }

// prettier-ignore
type Query2 = {
  hoge: string
  fuga: {
    a: number
    b: { c: string }[]
  }
}

// prettier-ignore
export const pagesPath = {
  _ignore: {
    $url: (url?: { hash?: string }) => ({ path: '/.ignore/', hash: url?.hash }),
    $name: (): RouteName => `.ignore`
  },
  _a: (a: string | number) => ({
    b: {
      _c: (c?: string | number) => ({
        $url: (url?: { hash?: string }) => ({ path: `/${a}/b${c !== undefined ? `/${c}` : ''}/`, hash: url?.hash }),
        $name: (): RouteName => `a-b-c`
      })
    }
  }),
  _pid: (pid?: string | number) => ({
    $url: (url?: { query?: OptionalQuery1, hash?: string }) => ({ path: `${pid !== undefined ? `/${pid}` : ''}/`, query: url?.query as any, hash: url?.hash }),
    $name: (): RouteName => `pid`
  }),
  aaa: {
    _bbb: (bbb: string | number) => ({
      ccc: {
        $url: (url?: { hash?: string }) => ({ path: `/aaa/${bbb}/ccc/`, hash: url?.hash }),
        $name: (): RouteName => `aaa-bbb-ccc`
      },
      $url: (url?: { hash?: string }) => ({ path: `/aaa/${bbb}/`, hash: url?.hash }),
      $name: (): RouteName => `aaa-bbb`
    })
  },
  blog: {
    _slug: (slug?: string | number) => ({
      $url: (url: { query: Query2, hash?: string }) => ({ path: `/blog${slug !== undefined ? `/${slug}` : ''}/`, query: url.query as any, hash: url.hash }),
      $name: (): RouteName => `blog-slug`
    })
  },
  $url: (url: { query: Query0, hash?: string }) => ({ path: '/', query: url.query as any, hash: url.hash }),
  $name: (): RouteName => ``
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export type RouteName = '.ignore' | 'a-b-c' | 'pid' | 'aaa-bbb' | 'aaa-bbb-ccc' | 'blog-slug'

// prettier-ignore
export const staticPath = {
  aa_json: '/foo/bar/aa.json',
  bb: {
    _ignore: '/foo/bar/bb/.ignore',
    cc_png: '/foo/bar/bb/cc.png'
  },
  duplicate_json_0: {
    sample_json: '/foo/bar/duplicate-json/sample.json'
  },
  duplicate_json_1: '/foo/bar/duplicate.json',
  duplicate_json_2: '/foo/bar/duplicate_json'
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
