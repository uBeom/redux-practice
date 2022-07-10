const { merge } = require('webpack-merge');
const { argv } = require('yargs');

const common = require('./webpack/webpack.common');

module.exports = () => {
  const env = require(`./webpack/webpack.${argv.env}.js`);

  return merge(common, env);
};
