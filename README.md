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

&nbsp;

ISC &copy; [Ian Walter](http://iankwalter.com)
