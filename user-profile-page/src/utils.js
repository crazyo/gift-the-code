var CONFIG = require('./config.js');

module.exports.debug = function() {
	if (CONFIG.DEBUG) {
		console.log(Array.prototype.slice.call(arguments, ', '));
	}
};

module.exports.logerror = function() {
	console.log('ERROR: ' + Array.prototype.slice.call(arguments, ', '));
};
