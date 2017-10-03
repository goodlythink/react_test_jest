const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-2']
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        inline: true,
    }
}