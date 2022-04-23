#!/bin/bash

# Project environment building script

# git
git init
touch .gitignore
echo ".idea
/node_modules/
dist" >./.gitignore

#npm
npm init -y

# webpack
npm install --save-dev webpack webpack-cli webpack-dev-server

# typescript
npm install --save-dev typescript ts-loader

# if we need transpiling or compiling from ts,
# install tsc or babel-loader

# npm install --save react react-dom
# npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
# touch .babelrc
# echo '{"presets": ["@babel/preset-env", "@babel/preset-react"]}' > ./.babelrc

# generate dynamic html with assets in it (?)
npm install --save-dev html-webpack-plugin
# clean dist folder every rebuild
npm install --save-dev clean-webpack-plugin
# styles (only style-loader work with HMR)
npm install --save-dev style-loader css-loader mini-css-extract-plugin
# sass (resolve-url-loader don't work?)
npm install --save-dev node-sass sass-loader resolve-url-loader
# images/icons
npm install --save-dev file-loader

# webpack config
# webpack applies loaders in opposite direction (end to start)
touch webpack.config.js

echo "const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
    entry: './src/index.js',
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
            //     loader: "babel-loader"
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // hmr: true,
                            // reloadAll: true,
                            publicPath: path.resolve(__dirname, './dist')
                        },
                    },
                    // 'style-loader', // use it to put styles in <style> tag
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass')
                        },
                    }
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
        // contentBase: path.resolve(__dirname, './dist'),
        // publicPath: path.resolve(__dirname, '/'),
        port: 3000,
        hot: true,
        // host: '0.0.0.0',
        historyApiFallback: true
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
};" >./webpack.config.js

# file system structure
touch index.html

echo "<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title placeholder</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>" >./index.html

touch .prettierrc
echo "{
  "singleQuote": true,
  "tabWidth": 4,
  "printWidth": 120,
  "semicolons": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "overrides": [
    {
      "files": [".*rc", "*.json"],
      "options": {
        "printWidth": 240,
        "tabWidth": 4
      }
    }
  ]
}
" >.prettierrc

touch tsconfig.json
echo "{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es6",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}" >tsconfig.json

mkdir src
cd ./src
mkdir components
mkdir styles
touch index.js
