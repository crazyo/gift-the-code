var CONFIG = require('./config.js');
var UTILS = require('./utils.js');

export default function(userId) {
	fetch(CONFIG.USER_CONTRIBUTION_FETCH_URL + '?userId=' + userId)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			UTILS.debug('user info fetched: ' + json);
			document.dispatchEvent(new CustomEvent('UserFetched', { detail: json }));
		})
		.catch(function(error) {
			UTILS.logerror(error);
		});

	fetch(CONFIG.USER_INFO_FETCH_URL + '?id=' + userId)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			UTILS.debug('user info fetched: ' + json);
			document.dispatchEvent(new CustomEvent('UserInfoFetched', { detail: json }));
		})
		.catch(function(error) {
			UTILS.logerror(error);
		});
};
