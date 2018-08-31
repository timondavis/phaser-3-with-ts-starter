const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/index.ts'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '/dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};