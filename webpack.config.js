const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { env } = process;

const options = {
    mode: env.NODE_ENV,
    entry: './src/index.js',
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV) }),
        new HtmlWebpackPlugin()
    ],
    devtool: env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : undefined
};

module.exports = options;
