module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: './public/dist'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    }
}