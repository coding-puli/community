const path = require("path");
const baseConfig = require("./webpack.base.config");

const devConfig = {
  devServer: {
    contentBase: path.join(__dirname, '/src'),
    contentBasePublicPath: '/',
    compress: true,
  },
  devtool: 'inline-source-map'
};

const config = Object.assign({}, baseConfig, devConfig);


module.exports = config;


