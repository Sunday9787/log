import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'

import path from 'path'

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: path.resolve('./src/main.ts'),
  cache: true,
  output: [
    {
      file: path.resolve('./lib/main.js'),
      format: 'es'
    }
  ],
  plugins: [
    typescript({
      tsconfig: path.resolve('./tsconfig.json')
    }),
    babel({
      extensions: ['.ts']
    })
  ]
}

export default config
