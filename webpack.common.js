const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const buildData = require('./.build.json')

const development = process.env.NODE_ENV !== 'production'

const title = `Videowall (${development ? 'development build' : `build ${buildData.id}`})`

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: [
          'src'
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[hash].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: './index.html',
      title
    }),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: development ? '[name].css' : '[name].[hash].css',
      chunkFilename: development ? '[id].css' : '[id].[hash].css',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
