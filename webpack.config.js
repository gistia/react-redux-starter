module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {loader: 'babel?cacheDirectory', exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},
      {test: /\.png$/, loader: 'url', exclude: /node_modules/},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};
