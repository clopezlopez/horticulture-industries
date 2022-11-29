const path = require('path');

// clean out build dir in-between builds
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
  {
    entry: {
      'main': [
        './js/src/main.js',
      ]
    },
    output: {
      filename: './js/build/[name].min.js',
      path: path.resolve(__dirname)
    },
    module: {
      rules: [
        // js babelization
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    },
    plugins: [
      // clear out build directories on each build
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          './js/build/*',
        ]
      }),
    ],
    optimization: {
      // minification - only performed when mode = production
      minimizer: [
        // js minification - special syntax enabling webpack 5 default terser-webpack-plugin 
        `...`,
      ]
    },
  }
];