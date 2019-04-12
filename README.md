# @ianwalter/callback-loader
> A Webpack loader that receives content and passes it to a callback function
> specified in the loader options

[![npm page][npmImage]][npmUrl]

## Installation

```console
yarn add @ianwalter/callback-loader --dev
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

[npmImage]: https://img.shields.io/npm/v/@ianwalter/callback-loader.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/callback-loader
[licenseUrl]: https://github.com/ianwalter/callback-loader/blob/master/LICENSE
