const requirejs = require('requirejs')

requirejs.config({
  // pass main.js require
  baseUrl: 'assets/js',
  // funtion to requirejs so that node modules are loaded relative to top-level js file
  nodeRequire: require
  paths : {
    tests: 'test'
  }
});

requirejs(['foo','bar'],
function  (foo, bar){
  // foo and bar are loaded according to requirejs config, but if not found, then node's require is used to load modules
})
