const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );

module.exports = {
  mode: 'none',
  entry: {
    server: './server/src/server.ts',
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {extensions: ['.ts', '.js']},
  optimization: {
    minimize: true
  },
  output: {
    path: path.join(__dirname, 'dist/server'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'},
      {
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: {system: true},
      },
    ]
  }, plugins: [
    new NodemonPlugin()
  ]
};
