var GLOBAL_CONFIG = require('../global-config');

var isDevEnv = (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
  restApiRoot: GLOBAL_CONFIG.restApiRoot,
  livereload: process.env.LIVE_RELOAD,
  isDevEnv: isDevEnv,
  indexFile: require.resolve(isDevEnv ?
    '../client/ngapp/index.html' : '../client/dist/index.html'),
};
