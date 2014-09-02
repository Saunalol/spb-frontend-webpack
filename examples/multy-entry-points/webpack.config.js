module.exports = {
    context: __dirname,
    entry: {
        'first': './entry-point-first.js',
        'second': './entry-point-second.js'
    },
    output: {
        path: __dirname,
        //filename: 'main.dist.js'
        filename: '[name].dist.js'
    }
};
