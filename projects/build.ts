import { exec } from 'child_process'
import { projects } from './projects'

projects.forEach(({ dir, output, enableStatic, ignorePath, pages }) =>
  exec(
    `cd projects/${dir} && node ../../bin/index.js${output ? ` --output ${output}` : ''}${
      enableStatic ? ' --enableStatic' : ''
    }${ignorePath ? ` --ignorePath ${ignorePath}` : ''}${pages ? ` --pages ${pages}` : ''}`,
    (_err, stdout, stderr) => console.log(stdout, stderr)
  )
)
