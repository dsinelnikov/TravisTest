const path = require('path');

module.exports = [{
  entry: {
    library: './src/index.js'
  },
  output: {
    library: 'Test',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    globalObject: 'this'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: [
        path.resolve('node_modules')
      ],
      loader: 'babel-loader'
    }]
  },
  optimization: {
    minimize: false
  },
  target: 'node',
  devtool: 'source-map'
}];