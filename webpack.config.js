'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, './src/index.js'),

    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.tmpl',
          filename: 'index.html',
          inject: 'body'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        open: true
    }

};
