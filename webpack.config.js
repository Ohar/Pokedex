const path               = require('path'),
      webpack            = require('webpack'),
      BrowserSyncPlugin  = require('browser-sync-webpack-plugin'),
      ExtractTextPlugin  = require('extract-text-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin')

const __DEV__ = Boolean(JSON.parse(process.env.DEV || 'true'))

const plugins = {
	common: [
		new webpack.DefinePlugin({__DEV__}),
		new ExtractTextPlugin('[name].css'),
	],

	dev: [
		new BrowserSyncPlugin(
			{
				host  : process.env.IP || 'localhost',
				port  : process.env.PORT || 3000,
				open  : false,
				server: {
					baseDir: ['./', './build'],
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
		publicPath: './dist/',
		filename  : 'bundle.js',
	},

	watch: __DEV__,

	plugins: plugins.common.concat(
		__DEV__
			? plugins.dev
			: plugins.prod,
	),

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
