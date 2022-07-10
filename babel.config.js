module.exports = {
  presets: [
    [    
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      }
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        proposals: true,
      }
    ],
    'babel-plugin-styled-components',
  ],
};
