const modoDev = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optmize-css-assets-webpack-plugin');
const { optimize } = require('webpack');

module.exports = {
  mode: modoDev ? 'developer' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },

  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },

  Plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader', // adiciona CSS ao DOM injetando a tag <style>
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
};
