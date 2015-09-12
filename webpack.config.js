var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');

module.exports = {
    debug: true,

    entry: [
        "./app/core",
        "./app/module.js",
        "./app/constants.js",
        "./app/config.js",
        "./app/route.js",
        "./app/run.js"
    ],

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'ng-annotate!babel'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=100000&mimetype=image/png'
        }, {
            test: /\.jpg$/,
            loader: 'file-loader'
        }]
    },

    postcss: function() {
        return [autoprefixer];
    },

    /*
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            warnings: false,
            mangle: {
                except: ['$q', '$ocLazyLoad']
            },
            sourceMap: false
        })
    ],
    */
    
    resolve: {
        modulesDirectories: [
            'node_modules'
        ]
    }
};
