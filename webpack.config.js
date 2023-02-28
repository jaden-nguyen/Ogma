const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /.(css|scss)$/,
            include: path.resolve(__dirname, 'client'),
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                }
            ]
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx']
  }, plugins: [
    new HTMLWebpackPlugin({
        template: './src/client/index.html',
    })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    proxy: {
        '/api': {
        target: 'http://localhost:3001',
        pathRewrite: {'^api' : ''},
        changeOrigin: true,
        } 
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  }
}
