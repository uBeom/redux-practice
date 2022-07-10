const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    open: true,
    port: 3000,
    static: {
      directory: path.resolve('public'),
    },
    historyApiFallback: true,
  },
});
