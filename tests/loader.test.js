const { join } = require('path')
const webpack = require('webpack')
const MemoryFileSystem = require('memory-fs')

test('loader executes callback with received content', done => {
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
              done()
            }
          }
        }
      ]
    }
  })
  compiler.outputFileSystem = new MemoryFileSystem()
  compiler.run()
})
