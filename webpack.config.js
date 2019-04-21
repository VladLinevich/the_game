const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },

  watch: true, 
  
  devServer: {
    
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    
    open: true,
    port: 9000,
    watchOptions: {
      ignored: /node_modules/,
      poll: true
    }
  }


};