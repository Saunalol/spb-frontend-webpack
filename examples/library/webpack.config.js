module.exports = {
    context: __dirname,
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'main.dist.js',

        /**
         * By default export how global variable
         */
        library: 'Main',
        libraryTarget: 'umd'
    }
};
