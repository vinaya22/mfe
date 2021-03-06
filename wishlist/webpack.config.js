const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const ExternalTemplatesRemotePlugin = require("external-remotes-plugin");
const deps = require('./package.json').dependencies;

module.exports = {
    entry: './src/index.js',    
    output: {
        publicPath: "auto",
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3002,
        historyApiFallback: true
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
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "wishlist",
            filename: "remoteEntry.js",
            remotes: {
                products: 'products@[productsUrl]/remoteEntry.js'
            },
            exposes: {
                './WishList': './src/wishList'
            },
            shared: {
                ...deps,
                react: {singleton: true}, 
                "react-dom": {singleton: true, requiredVersion: deps['react-dom']},                
                common: {singleton: true}
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ExternalTemplatesRemotePlugin()
    ]
}