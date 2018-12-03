# @ianwalter/callback-loader
> A Webpack loader that receives content and passes it to a callback function
> specified in the loader options

## Installation

```console
npm install @ianwalter/callback-loader --save
```

## Usage

```js
rules: [
  {
    test: /\.js$/,
    loader: '@ianwalter/callback-loader',
    options: {
      callback: content => {
        expect(content).toMatchSnapshot()
        done()
      }
    }
  }
]
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[licenseUrl]: https://github.com/ianwalter/callback-loader/blob/master/LICENSE
