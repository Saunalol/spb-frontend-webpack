module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'src/main.dist.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};
