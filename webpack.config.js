var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成一个html
const path = require('path');
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js', //入口文件
  output: {
    filename: 'bundle.js', //输入的文件的名字
    path: path.resolve(__dirname, 'dist') //输出的路径
  },
  mode: 'development', //开发模式
  devServer: { //webpack-dev-server 并且能够实时重新加载(live reloading)
    contentBase: './src',
    port: 9000,
    hot: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(), //new一个热更新对象
    new HtmlWebpackPlugin({ //创建生成Html页面
        template:path.join(__dirname,'./src/index.html'), //指定模板页面
        filename: 'index.html'//生成页面的名称
    }),
    new VueLoaderPlugin()
  ],
  resolve:{
    alias:{
      // vue$:"vue/dist/vue.js" //别名
    }
  },
  module:{ //导入第三方模块
    rules:[
      {test:/\.css$/, use:['style-loader','css-loader']},
      {
        test:/\.less$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'less-loader'}
        ]
      },
      {
        test:/\.scss$/,
        use:[{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      },
      {
        test:/\.(jpg|gif|png|jpeg|bmp)$/,
        use:'url-loader?limit=8192&name=[hash:8].[ext]',
      },
      {
        test:/\.(ttf|eot|svg|woff|woff2)$/,
        use:[
          {loader:'url-loader'}
        ]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:[
          {
            loader:'babel-loader',
          }
        ]
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  }
};