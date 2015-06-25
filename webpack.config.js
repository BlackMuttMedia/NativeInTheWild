module.exports = {
    entry: './scripts/slideshow.jsx',
    output: {
        filename: './build/main.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
      "showdown": "Showdown",
    }
}