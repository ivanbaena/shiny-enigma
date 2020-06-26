const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'false',
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                exportGlobals: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                hashPrefix: 'baena',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/css/',
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
