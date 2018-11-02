const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            emitWarning: true,
                            configFile: "./.eslintrc.js"
                        }
                    }
                ]
            },
            {
                test: [/\.scss$/, /\.css$/],
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [require('autoprefixer')({
                            'browsers': ['> 1%', 'last 2 versions']
                        })],
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]"
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
};