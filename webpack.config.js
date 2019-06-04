/* eslint-disable no-undef */
const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: `babel-loader`
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ]
  },
  devtool: `source-map`,
  stats: `errors-only`,
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
    alias: {
      '@': path.join(__dirname, `src`)
    }
  }
};
