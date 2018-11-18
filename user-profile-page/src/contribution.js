import fetchUser from './fetch_user.js';

// this should come from the Movember user profile page
var USER_ID = '1234abcd';

document.addEventListener('DOMContentLoaded', function() {
	// this needs to change
	var container = document.body;

	var wrapperElement = document.createElement('div');

	wrapperElement.innerHTML = '\
	<div class="progress" id="contribution-bar-prostate-cancer"> \
		<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 0"></div> \
	</div> \
	<div class="progress" id="contribution-bar-testicular-cancer"> \
		<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 0"></div> \
	</div> \
	<div class="progress" id="contribution-bar-mental-health"> \
		<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 0"></div> \
	</div>';

	container.appendChild(wrapperElement);
	fetchUser(USER_ID);
});

document.addEventListener('UserFetched', function(event) {
	document.querySelector('#contribution-bar-prostate-cancer > .progress-bar').style.width = calculateContributionRatio(event.detail['PROSTATE_CANCER']) + '%';
	document.querySelector('#contribution-bar-prostate-cancer > .progress-bar').innerHTML = generateContributionDisplayText(event.detail['PROSTATE_CANCER']);
	document.querySelector('#contribution-bar-testicular-cancer > .progress-bar').style.width = calculateContributionRatio(event.detail['TESTICULAR_CANCER']) + '%';
	document.querySelector('#contribution-bar-testicular-cancer > .progress-bar').innerHTML = generateContributionDisplayText(event.detail['TESTICULAR_CANCER']);
	document.querySelector('#contribution-bar-mental-health > .progress-bar').style.width = calculateContributionRatio(event.detail['MENTAL_HEALTH_AND_SUICIDE_PREVENTION']) + '%';
	document.querySelector('#contribution-bar-mental-health > .progress-bar').innerHTML = generateContributionDisplayText(event.detail['MENTAL_HEALTH_AND_SUICIDE_PREVENTION']);
});

function calculateContributionRatio(contributionItem) {
	if (!contributionItem.totalAmount) {
		return 100;
	}
	return (contributionItem.userAmount / contributionItem.totalAmount * 100).toFixed(2);
}

function generateContributionDisplayText(contributionItem) {
	return contributionItem.userAmount + '/' + contributionItem.totalAmount;
}
