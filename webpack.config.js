
var path = require('path'); //
var webpack = require('webpack');//引入 webpack
var ExtractTextPlugin = require("extract-text-webpack-plugin");//提取文本的插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成模板的插件
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin'); // 打开浏览器的插件

module.exports = {
  entry: { // 入口
    vendor: ['react', 'react-dom'],//入口文件由那些插件解析
    index: path.resolve(__dirname, 'src/index.js')// 入口文件是哪一个
  },
  output: { //输出
    path: path.resolve(__dirname, 'build'), // 输出到哪个文件下，路径 __dirname 是文件 的意思
    filename: '[name].js' // 输出文本都有那些
  },
  resolve: { //引用、解析的时候，
    extension: ['', '.js', '.jsx', '.json'] // 那些 文本 后缀，会自动补全
  },
  //解析的文件格式有
  module: {
    loaders: [
      {
        //匹配哪一类文件
        test: /\.js$/,
        // 用那类型 插件 加载
        loaders: ['react-hot', 'babel']
      },
      {
        //匹配哪一类文件
        test: /\.css/,
        // 用那类型 插件 加载
        loader: 'style!css'
      },
    ]
  },
  devServer: {
    //默认上来直接到哪个文件
    contentBase: "build",
    // 热替换 开启
    inline: true,
    //配置颜色
    stats: { colors: true },
    // 历史管理 开启
    historyApiFallback: true,
    //可修改的服务端口号
    port:3100,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    // 模板 解析到 哪个里面 插件
    new HtmlWebpackPlugin({
      // 生成模板 的 title
      title: 'React Fundamental Demos',
      // 模板是 哪一个
      template: './src/index.html'
    }),
    // 开打浏览器的 插件
    new openBrowserWebpackPlugin({
      // 浏览器打开的 地址
      url: 'http://localhost:3100'
    })
  ],
  // 添加开发者工具，能够显现、资源目录
  devtool: 'source-map'
  // 廉价的 开发工具，能够显现、资源目录。我感觉没有什么区别
  //devtool: 'cheap-module-source-map',
};
