const path = require('path');
const webpack = require('webpack');
console.log(process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV;
const prod = NODE_ENV === 'production';
const NODE_ENDPOINT = prod
	? process.env.NODE_ENDPOINT
	: 'http://localhost:3001';
const RAILS_ENDPOINT = prod
	? process.env.RAILS_ENDPOINT
	: 'http://localhost:3000';
const GOOGLE_API_KEY = prod ? process.env.GOOGLE_API_KEY : null;

module.exports = {
	entry: './react/index.js',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['@babel/env', '@babel/react'],
						plugins: [
							'@babel/proposal-class-properties',
							new webpack.DefinePlugin({
								NODE_ENV: JSON.stringify(process.env.NODE_ENV),
								NODE_ENDPOINT: JSON.stringify(NODE_ENDPOINT),
								RAILS_ENDPOINT: JSON.stringify(RAILS_ENDPOINT),
								GOOGLE_API_KEY: JSON.stringify(GOOGLE_API_KEY),
							}),
						],
					},
				},
			},
		],
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*'],
	},
};
