let path = require('path')
let HtmlWebpcakPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    home: './src/index.js',
    other: './src/other.js'
  },
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpcakPlugin({
      template: './index.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpcakPlugin({
      template: './index.html',
      filename: 'other.html',
      chunks: ['other']
    })
  ]
}