module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './src/main.js'
    ],
    output: {
        filename: 'src/main.dist.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loaders: [
                'react-hot',
                'jsx'
            ]
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};
