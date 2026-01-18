const path = require("path");

/**
 * @type {import('@rspack/core').Configuration}
 */
module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.esm.js",
		library: {
			type: "module",
		},
		module: true,
		clean: false, // Não limpa para manter o build UMD
	},
	experiments: {
		outputModule: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: "builtin:swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "typescript",
								tsx: true,
							},
							transform: {
								react: {
									runtime: "automatic",
								},
							},
						},
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				type: "javascript/auto",
			},
		],
	},
	externals: {
		react: "react",
		"react-dom": "react-dom",
		"react-router-dom": "react-router-dom",
		"@emotion/react": "@emotion/react",
		"@emotion/styled": "@emotion/styled",
	},
	optimization: {
		minimize: true,
		usedExports: true,
	},
	performance: {
		hints: "warning",
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};
