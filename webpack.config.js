const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        path.resolve('./src'),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: {
                                        browsers: ['last 2 versions', 'safari >= 7'],
                                    },
                                }],
                            ],
                        },
                    },
                ],
                include: path.resolve('./src'),
            },
        ],
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name].js',
    },
};
