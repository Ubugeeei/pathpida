import minimist from 'minimist'
import build from './buildTemplate'
import getConfig from './getConfig'
import watch from './watchInputDir'
import write from './writeRouteFile'

export const run = async (args: string[]) => {
  const argv = minimist(args, {
    string: ['version', 'watch', 'enableStatic', 'output', 'ignorePath', 'pages'],
    alias: { v: 'version', w: 'watch', s: 'enableStatic', o: 'output', p: 'ignorePath', g: 'pages' }
  })

  argv.version !== undefined
    ? console.log(`v${require('../package.json').version}`)
    : argv.watch !== undefined
    ? await (async () => {
        const config = await getConfig(
          argv.enableStatic !== undefined,
          argv.output,
          argv.ignorePath,
          argv.pages
        )
        write(build(config))
        watch(config.input, () => write(build(config, argv.pages)))
        config.staticDir && watch(config.staticDir, () => write(build(config, 'static')))
      })()
    : write(
        build(
          await getConfig(argv.enableStatic !== undefined, argv.output, argv.ignorePath, argv.pages)
        )
      )
}
