const HtmlWebpackPlugin = require('html-webpack-plugin')
const AsyncCssPlugin = require("async-css-plugin");
var path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new AsyncCssPlugin({ logLevel: "info" })
  ]
};
