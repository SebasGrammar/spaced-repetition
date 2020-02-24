const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
	{
		mode: 'development',
		entry: './src/electron.js',
		target: 'electron-main',
		module: {
			rules: [ {} ]
		},
		output: {
			path: __dirname + '/dist',
			filename: 'electron.js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html'
			})
		]
	}
];
