var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  mode: debug ? "development" : "production",
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: debug
    ? [HtmlWebpackPluginConfig]
    : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: false,
          sourcemap: false
        })
      ]
};
