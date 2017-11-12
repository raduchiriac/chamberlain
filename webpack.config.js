const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SRC, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
      favicon: path.join(paths.SRC, 'favicon.png')
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: 'css-loader',
      }),
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};