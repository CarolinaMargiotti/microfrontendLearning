const HtmlWepbackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8081,
	},
	plugins: [new HtmlWepbackPlugin({ template: "./public/index.html" })],
};
