import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import { terser as uglify } from 'rollup-plugin-terser'
import path from 'path'

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
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
  },
  {
    input: path.resolve('./src/main.ts'),
    output: {
      file: path.resolve('./dist/index.min.js'),
      format: 'umd',
      name: 'log'
    },
    plugins: [
      typescript({
        tsconfig: path.resolve('./tsconfig.json')
      }),
      babel({
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage',
              targets: {
                node: 8,
                browsers: ['ie > 8']
              }
            }
          ]
        ],
        extensions: ['.ts']
      }),
      uglify()
    ]
  }
]

export default config
