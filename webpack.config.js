var path = require('path');
var sourceDir = path.join(__dirname, '/client/src');
var distDir = path.join(__dirname, '/client/dist');


module.exports = {
  entry: `${sourceDir}/index.js`,
  output: {
    filename: 'bundle.js',
    path: distDir
  },
  module: {
  	loaders: [
  		{
	  		include: sourceDir,
	  		loader: 'babel-loader',
	  		query: {
	  			presets: ['env']
  			}
  		}
  	]
  }
};