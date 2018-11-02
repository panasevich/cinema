const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',
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
                            configFile: "./.eslintrc.js"
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
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
})