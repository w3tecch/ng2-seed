/**
 * Webpack config for builds
 */
module.exports = require('./webpack.make')({
  CORDOVA: false,
  BUILD: true,
  TEST: false,
  PUBLICPATH: '/',
  TARGET: 'dist'
});
