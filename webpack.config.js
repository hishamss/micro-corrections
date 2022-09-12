const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require("./package.json").dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3004,
  },
  output: {
    publicPath: 'auto',
    
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'corrections',
      library: { type: 'var', name: 'corrections' },
      filename: 'remoteEntry.js',
      exposes: {
        './StateForm': './src/state-form',
        './CMSForm': './src/cms-form',
      },
      shared: { 
        ...deps,
        react: { singleton: true, requiredVersion: deps.react, }, 'react-dom': { singleton: true, requiredVersion: deps["react-dom"]  } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
