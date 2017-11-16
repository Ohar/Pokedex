const path               = require('path')
const webpack            = require('webpack')
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

const __DEV__ = Boolean(JSON.parse(process.env.DEV || 'true'))

const plugins = {
  common: [
    new webpack.DefinePlugin({__DEV__}),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      title   : 'Pokedex',
      template: './index.html',
      minify  : __DEV__
        ? false
        : {
          collapseWhitespace: true,
          minifyCSS         : true,
        },
    }),
  ],

  dev: [
    new BrowserSyncPlugin(
      {
        host  : process.env.IP || 'localhost',
        port  : process.env.PORT || 3000,
        open  : false,
        server: {
          baseDir: ['./dist'],
        },
      },
    ),
  ],

  prod: [
    new CleanWebpackPlugin(['dist', 'build']),
    new webpack.optimize.UglifyJsPlugin(
      {
        drop_console: true,
        minimize    : true,
        output      : {
          comments: false,
        },
        compress    : {
          warnings: false,
        },
      },
    ),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title   : 'Pokedex',
      template: './index.html',
      minify  : {
        collapseWhitespace: true,
        minifyCSS         : true,
      },
    }),
  ],
}

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/index.jsx'),
    ],
  },

  output: {
    pathinfo  : true,
    path      : path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename  : 'bundle.js',
  },

  watch: __DEV__,

  plugins: plugins.common.concat(
    __DEV__
      ? plugins.dev
      : plugins.prod,
  ),

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test   : /\.jsx?$/,
        loader : 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(less|css)$/,
        use : ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            {
              loader : 'less-loader',
              options: {
                compress: !__DEV__,
              },
            },
          ],
        }),
      },
    ],
  },
}
