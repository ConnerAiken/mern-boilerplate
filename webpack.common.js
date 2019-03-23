// NodeJS
const path = require('path');
const webpack = require('webpack');

// Webpack plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Helper Variables
const paths = {
  entryClient: path.resolve(__dirname,  "src", "client", 'index.js'),
  src: path.resolve(__dirname,  "src", "client", "index.html"),
  dest: path.resolve(__dirname, 'public'),
  destHtml: path.resolve(__dirname, 'public', 'index.html'),
  contentBase: path.join(__dirname, 'public')
}; 

module.exports = {
    devtool: "source-map", 
    entry: [
      '@babel/polyfill',
      'react-hot-loader/patch',
      paths.entryClient
    ],
    output: {
      path: paths.dest,
      filename: "bundle.js",
      publicPath: "/", 
      libraryTarget: "umd" 
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        }, 
        {
          test: /\.(scss|css)$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader", options: {
                  sourceMap: true
              }
          }, {
              loader: "sass-loader", options: {
                  sourceMap: true
              }
          }]
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
          template: paths.src,
          filename: paths.destHtml
        })
    ],
    performance: {
      hints: "warning",
      maxAssetSize: 2000000, // Bytes..
      maxEntrypointSize: 4000000, // Bytes..
      assetFilter: function(filename) {
          // If you would like to, you can exclude file types, names, etc here by providing an expression.
          return true;
      }
    },  
    devServer: {
      proxy: { 
        // proxy URLs to backend development server
        '/api': 'http://localhost:3000'
      },
      contentBase: paths.contentBase,  
      compress: true, // enable gzip compression
      disableHostCheck: true, // this can be dangerous, do not use unless on a private LAN in a safe network
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin 
      host: '0.0.0.0', // listen on all interfaces
      https: false, // true for self-signed, object for cert authority
      noInfo: false, // only errors & warns on hot reload  
      port: 8080, 
    }, 
    // advance misc config 
    cache: false,
    bail: true,
    profile: true,
    watch: false,
    watchOptions: {
      aggregateTimeout: 1000, 
      poll: true,
      poll: 500 
    }
};