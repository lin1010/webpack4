let path = require('path')
let HtmlWebpcakPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
// cleanWebpackPlugin 自动清空dist
// copyWebpackPlugin 拷贝
// bannerPlugin 内置 版权声明
module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
  resolve:{ //解析 第三方包 common
    modules: [path.resolve('node_modules')],
    extensions: ['.js','.css'] //扩展名添加顺序
    // alias: {//别名
    //   bootstrap: 'bootstrap/dist/css/bootstrap.css'
    // }
    // mainFields: ['style', 'main']
    // mainFiles:[]  //入口文件的名字 index.js
  },
  devServer:{
    //跨域
    // proxy:{
    //   '/api': {
    //     target: 'http://localhost:3000', //配置代理
    //     pathRewrite: {'/api':''}
    //   }
    // }
  },
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpcakPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {from: 'doc', to: './'}
    // ]),
    // new webpack.BannerPlugin('make 2019 by XX')
  ]
}