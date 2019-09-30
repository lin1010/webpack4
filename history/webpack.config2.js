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
  // （1）源码映射 会单独生成一个sourcemap文件
  // devtool: 'source-map', //增加映射文件，可以帮忙调试 出错了 会标识当前错误的的行
  //eval-source-map 不会产生单独的文件，但是可以显示行和列
  // devtool: 'eval-source-map',
  // 不会产生列，但是是一个单独的文件,产生后可以保留，但是可以调试
  // devtool: 'cheap-module-source-map', 
  // 不会产生文件，集成在打包后的文件中，不会产生列
  devtool: 'cheap-module-eval-source-map', 
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