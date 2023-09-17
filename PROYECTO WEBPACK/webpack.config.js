const path = require('path');

module.exports = {
    mode: 'development',
  entry: './aggregator.js', // Ruta al archivo principal
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist') // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Archivos JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
