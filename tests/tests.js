const { join } = require('path')
const { test } = require('@ianwalter/bff')
const webpack = require('webpack')
const MemoryFileSystem = require('memory-fs')

test('loader executes callback with received content', ({ expect }) => {
  return new Promise(resolve => {
    const compiler = webpack({
      entry: join(__dirname, './fixtures/example.js'),
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: join(__dirname, '../'),
            options: {
              callback: content => {
                expect(content).toMatchSnapshot()
                resolve()
              }
            }
          }
        ]
      }
    })
    compiler.outputFileSystem = new MemoryFileSystem()
    compiler.run()
  })
})
