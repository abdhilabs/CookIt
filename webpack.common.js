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
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'dashboard-page.html',
            template: 'src/dashboard-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'detail-videorecepty-page.html',
            template: 'src/detail-videorecepty-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'login-page.html',
            template: 'src/login-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'make-recipe-page.html',
            template: 'src/make-recipe-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'raw-materials-page.html',
            template: 'src/raw-materials-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'register-page.html',
            template: 'src/register-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'setting-page.html',
            template: 'src/setting-page.html'
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: 'videorecepty-page.html',
            template: 'src/videorecepty-page.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/img'),
                to: path.resolve(__dirname, 'dist/src/img')
            }]
        })

    ]
}