const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //     loader: babel-loader
            //     },
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         // hmr: true,
                    //         // reloadAll: true,
                    //         publicPath: path.resolve(__dirname, './dist')
                    //     },
                    // },
                    'style-loader', // use it to put styles in <style> tag
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        },
                    },
                    // 'resolve-url-loader',
                    // {
                    //     loader: 'sass-loader',
                    //     options: {
                    //         implementation: require('node-sass')
                    //     },
                    // }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
    ]
};
