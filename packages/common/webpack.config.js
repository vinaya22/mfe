module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"]
                }
            }
        ]
    }
}