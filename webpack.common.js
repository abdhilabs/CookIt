const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(css|png|jpe?g|gif)$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }), // Generates default index.html
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'recipe-page.html',
            template: 'src/recipe-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'detail-recipe-page.html',
            template: 'src/detail-recipe-page.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/img'),
                to: path.resolve(__dirname, 'dist/src/img')
            }]
        })

    ]
}