const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractTextPlugin({ filename: 'styles.css' });
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            { loader: MiniCssExtractTextPlugin.loader },
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
// ['style-loader', 'css-loader', 'sass-loader']
// ExtractTextPlugin.extract({
//   fallback: 'style-loader',
//   use: ['css-loader', 'sass-loader']
// })
