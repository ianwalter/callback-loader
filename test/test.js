import { join } from 'path'
import test from 'ava'
import webpack from 'webpack'
import MemoryFileSystem from 'memory-fs'

test.cb('loader executes callback with received content', t => {
  const compiler = webpack({
    entry: join(__dirname, './fixtures/example.js'),
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: join(__dirname, '../'),
          options: {
            callback: content => {
              t.snapshot(content)
              t.end()
            }
          }
        }
      ]
    }
  })
  compiler.outputFileSystem = new MemoryFileSystem()
  compiler.run()
})
