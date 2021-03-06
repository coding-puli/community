const path = require("path");

/*todo setup storyBook for Documentation*/

const paths = {
  context: path.join(__dirname, "./src/"),
  output: path.join(__dirname, "./dist"),
  entry: {
    'app':"./index.js",
  }
};


const baseConfig = {
  context: paths.context,
  entry: paths.entry,
  output: {
    path: paths.output,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /\.lazy\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.lazy\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'lazyStyleTag'
            }
          },
          'css-loader',
        ],
      },
      {
        test: /\.csv$/,
        use: {
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]

  },
  resolve: {
    extensions: ['.jsx','.js'],
    modules: [path.resolve(__dirname,'src'), 'node_modules'],
    alias: {
      'components': path.resolve(__dirname,'src/components/'),
      'ui': path.resolve(__dirname,'src/ui/'),
      'context': path.resolve(__dirname,'src/context/'),
      'theme': path.resolve(__dirname,'src/theme/'),
      'static': path.resolve(__dirname,'src/static/'),
      'abstract': path.resolve(__dirname,'src/abstract/'),
      'pages': path.resolve(__dirname,'src/pages/'),
      'service': path.resolve(__dirname,'src/service/'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '/src'),
    compress: true,
  },
  devtool: 'inline-source-map'
};


module.exports = baseConfig;


