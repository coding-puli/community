const baseConfig = require("./webpack.base.config");

const githubProjectName = 'community';
const config = Object.assign({}, baseConfig);

config.output['publicPath'] = `${githubProjectName}/`;

module.exports = config;


