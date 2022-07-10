const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('src', './index.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|mp3|svg|webg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', './index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
};
