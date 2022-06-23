module.exports = {
    entry: './src/index.js',    
    output: {
        filename: 'index.js',
        clean: true,
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