const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[hash].bundle.js",
  },
  devServer: {
    port: 3000,
    host: "localhost",
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@config": path.resolve(__dirname, "src/config"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@library": path.resolve(__dirname, "src/library"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "build/assets"),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
