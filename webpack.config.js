/** @format */

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: { plugins:[['import', {libraryName: 'antd', style: true}]]}
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							outputPath: 'assets/images/',
						},
					},
				],
			},
			{
				test: /\.less$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader'
					},
					{
						loader:'less-loader',
						options:{
							modifyVars:{
								'primary-color': '#2468EB'
							},
							javascriptEnabled: true
						}
					},
				]
			}
		],
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@App': path.resolve(__dirname, './', 'src/'),
			'@Components': path.resolve(__dirname, './', 'src/Components/'),
			'@Views': path.resolve(__dirname, './', 'src/Views/'),
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
		contentBase: './src',
		port: 4000,
	},
};
