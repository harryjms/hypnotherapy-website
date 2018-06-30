var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});
const path = require("path");

module.exports = {
  mode: debug ? "development" : "production",
  context: __dirname,
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /^\$/, to: path.join(__dirname, "index.html") }]
    },
    hot: true,
    contentBase: path.join(__dirname, "assets"),
    clientLogLevel: "error",
    stats: "errors-only",
    open: true
  },
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: debug
    ? [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
    : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: false,
          sourcemap: false
        })
      ]
};
