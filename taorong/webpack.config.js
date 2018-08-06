const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const json = require('./package.json');   

module.exports = {
    // 众安驾乘意外险
    entry: {
        app: "./src/index",
        vendor: ["react", "react-dom", "redux", "react-redux", "redux-thunk", "react-router", "moment"]
    },
    output: {
        path: path.join(__dirname, 'dist/static'),
        publicPath: './static/',
        chunkFilename: 'chunk.[name].[chunkhash:5].js',
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.jsx', '.js', '.json'],
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=4000'
        }, {
            test: /\.(svg)$/i,
            loader: 'svg-sprite',
            include: [require.resolve('antd-mobile').replace(/warn\.js$/, ''), path.resolve(__dirname, 'src/components/asset/svg')]
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.less$/,
            loader: "style!css?modules&localIdentName=[hash:base64:10]!postcss!less"
        }]
    },
    postcss: function () {
        return [
            autoprefixer({
                browsers: [
                    "last 5 versions",
                    "ie >= 8",
                    "ie_mob >= 10",
                    "ff >= 30",
                    "chrome >= 34",
                    "safari >= 6",
                    "ios >= 6",
                    "android >= 4.4",
                    '> 1%'
                ]
            }),
            pxtorem({
                rootValue: 100,
                propWhiteList: [],
            }),
            cssnano
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
       
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false,
                drop_console: false
            }

        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js'
        }),
        new CompressionPlugin({ //开启gizp压缩， 
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),

        new webpack.BannerPlugin("民盛保代 版权所有"),

        new BundleAnalyzerPlugin()
    ],
};