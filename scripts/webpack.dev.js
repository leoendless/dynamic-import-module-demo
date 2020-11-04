const { resolve } = require("path");
const webpack = require("webpack");
const importsMap = require("../systemjs-imports.json");

const root = (path) => resolve(__dirname, `../${path}`);

const config = {
  mode: "development",
  entry: {
    main: "./web/index.js",
  },
  output: {
    filename: "[name].js",
    path: root("build/"),
    publicPath: "/",
    pathinfo: false,
  },
  module: {
    rules: [
      { parser: { system: false } },
      {
        resource: root("web/index.js"),
        use: [
          {
            loader: root("scripts/systemjs-imports-loader.js"),
            options: { importsMap },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: root('web'),
        use: "babel-loader?cacheDirectory",
      },
      {
        test: /\.css$/i,
        loader: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      root("server"),
      root("build"),
      root("dist"),
    ]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  devServer: {
    publicPath: "/",
    compress: true,
    noInfo: false,
    quiet: false,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host: "0.0.0.0",
    port: 3001,
  },
};

module.exports = config;
