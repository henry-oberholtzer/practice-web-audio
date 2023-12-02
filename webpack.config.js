const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    devtool: ["eval-source-map", "inline-source-map"],
    plugins: [
        new ESLintPlugin(),
        new CleanWebpackPlugin({
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            title: "Shape Tracker",
            template: "./src/index.html",
            inject: "body",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node-modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|avif|jpe?g)$/,
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]",
                    publicPath: "assets/images/",
                    outputPath: "assets/images/",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]",
                    publicPath: "assets/fonts/",
                    outputPath: "assets/fonts/",
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx']
    }
};
