const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'simple-weather-card-bundle.js',
    path: path.resolve(__dirname),
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.png$/i,
        type: 'asset/inline',
        generator: {
          dataUrl: {
            encoding: 'base64',
            mimetype: 'image/png'
          }
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
        generator: {
          dataUrl: {
            encoding: 'base64',
            mimetype: 'image/svg+xml'
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
  optimization: {
    minimize: true,
  },
};
