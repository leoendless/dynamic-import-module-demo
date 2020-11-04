module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: "2",
        useBuiltIns: "entry",
        targets: ["> 5%", "ie 9"],
        modules: "commonjs"
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ]
};
