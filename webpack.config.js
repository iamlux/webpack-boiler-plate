const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: "./src",
    },
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: "file-loader?name=images/[hash:6].[ext]"
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg|woff|woff2|ttf|eot)$/,
                loader: "url-loader?name=images/[hash:6].[ext]"
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: false
        }),
        new HtmlWebpackPlugin({
            title: 'Real Webpack',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: './src/images/',
            to: './images/'
        }, ])
    ]
};