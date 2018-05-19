const webpackMerge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');
const commonConfig = require('./webpack.common.js');
const root = require('../helpers/root');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: root('dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './src',
        // uncomment if you setup a REST API on port 3000
        // proxy: {
        //     '*': {
        //         target: 'http://localhost:3000',
        //         secure: false
        //     }
        // }
    }
});