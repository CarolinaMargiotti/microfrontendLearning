const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8082,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "cart",
			filename: "remoteEntry.js",
			exposes: {
				"./CartShow": "./src/index.js",
			},
			shared: ["faker"],
			// in this state it'll still download multiple fakers if other projects imported use a different incompatible version
			// to get around this to force one version or to give out a warning use:
			// shared:{
			// 	faker:{
			// 		singleton:true
			// 	}
			// }
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
