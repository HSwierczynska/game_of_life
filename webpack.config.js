const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const BUILD_DIR= path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');


const config={
    entry: APP_DIR +  '/main.js',
    output: {
        path: BUILD_DIR,
        publicPath: BUILD_DIR,
        filename: 'bundle.js',
    },

    module:{
        loaders:[
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: APP_DIR
            },
            {
                test:/\.css/,
                loader:'style-loader!css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]'

            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader?importLoaders=1&modules=true&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader'
            }
        ]
    },

    plugins:[
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new ExtractTextPlugin("style.css")
    ]


};





module.exports = config;
