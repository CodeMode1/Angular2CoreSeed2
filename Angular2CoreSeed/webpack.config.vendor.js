var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('vendor.css');

module.exports = {
    resolve: {
        extensions: [ '', '.js' ]
    },
    module: {
        loaders: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' },
            { test: /\.css(\?|$)/, loader: extractCSS.extract(['css']) }
        ]
    },
    entry: {
        vendor: [
            '@angular/common',
            '@angular/forms',
            '@angular/compiler',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/router',
            '@angular/platform-server',
            'bootstrap',
            'bootstrap/dist/css/bootstrap.css',
            'es6-shim',
            'jquery',
            'rxjs',
            'zone.js',
            '@progress/kendo-angular-intl',
            '@progress/kendo-angular-dateinputs',
            '@progress/kendo-theme-default/dist/all.css',
            '@progress/kendo-angular-dialog',
            'moment',
            'font-awesome/css/font-awesome.css',
            'core-js',
            '@progress/kendo-angular-inputs',
            '@progress/kendo-angular-layout',
            '@progress/kendo-angular-charts',
            '@progress/kendo-drawing',
            'hammerjs',
            'ng2-pagination',
            '@progress/kendo-angular-grid',
            '@progress/kendo-data-query',
            '@progress/kendo-angular-buttons',
            '@progress/kendo-angular-dropdowns',
            '@progress/kendo-angular-popup',
            '@progress/kendo-angular-scrollview',
            'angular2-google-maps/core'
        ]
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        library: '[name]_[hash]',
    },
    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ].concat(isDevBuild ? [] : [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
};
