let path = require('path')
let HtmlWebpcakPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  watch:true,
  watchOptions: {
    poll: 1000, //每秒问我的次数
    aggregateTimeout:500, //防抖
    ignored: /node_modules/ //不需要监控哪个文件
  },
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpcakPlugin({
      template: './index.html',
      filename: 'index.html',
    })
  ]
}