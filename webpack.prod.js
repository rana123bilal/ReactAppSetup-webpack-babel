const path = require("path");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common,{
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: '[name].[contenthash].js', 
  },

  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new TerserPlugin(),
      new HTMLWebpackPlugin({
        title: 'Caching',
        template: "./src/index.html",
        filename:'index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  devServer: {
    inline: false,
    contentBase: "./dist",
  },
});
