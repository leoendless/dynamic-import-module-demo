module.exports = {
  entry: {
    index: "./index.js",
  },
  mode: "development",
  output: {
    filename: "[name].js",
    libraryTarget: "system",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader?cacheDirectory",
      },
      {
        test: /\.css$/i,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  externals: ["react", "@kube-design/components", "mobx-react"],
};
