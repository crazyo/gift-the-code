import fetchUser from './fetch_user.js';

// this should come from the Movember user profile page
var USER_ID = '1234abcd';

var TOTAL_BAR_STYLE = 'bg-warning';

document.addEventListener('DOMContentLoaded', function() {
	// this needs to change
	var container = document.querySelector('.mospace-heroarea--fundraising');

	var wrapperElement = document.createElement('div');

	wrapperElement.innerHTML = '\
	<div class="contribution-bar-wrapper-title"> <h1> Prostate Cancer Fundraise Pool </h1> </div> \
	<div class="contribution-bar-wrapper" id="contribution-bar-wrapper-prostate-cancer"></div> \
	<div class="contribution-bar-wrapper-title"> <h1> Testicular Cancer Fundraise Pool </h1> </div> \
	<div class="contribution-bar-wrapper" id="contribution-bar-wrapper-testicular-cancer"></div> \
	<div class="contribution-bar-wrapper-title"> <h1> Mental Health Fundraise Pool </h1> </div> \
	<div class="contribution-bar-wrapper" id="contribution-bar-wrapper-mental-health"></div>';

	container.appendChild(wrapperElement);
	fetchUser(USER_ID);
});

document.addEventListener('UserFetched', function(event) {
	_generateContributionBars(event.detail['PROSTATE_CANCER'], document.querySelector('#contribution-bar-wrapper-prostate-cancer'), "prostate-cancer-bar", "");
	_generateContributionBars(event.detail['TESTICULAR_CANCER'], document.querySelector('#contribution-bar-wrapper-testicular-cancer'), "testicular-cancer-bar", "bg-success");
	_generateContributionBars(event.detail['MENTAL_HEALTH_AND_SUICIDE_PREVENTION'], document.querySelector('#contribution-bar-wrapper-mental-health'), "mental-health-bar", "bg-info");
});

document.addEventListener('UserInfoFetched', function(event) {
	console.log(event.detail);
	var userRaised = event.detail['totalRaised'];
	var userPoints = event.detail['totalScore'];
	document.querySelector('.mospace-heroarea--donations-target-amount-number').innerHTML = "Total Fundraised: $" + userRaised;
	document.querySelector('.mospace-heroarea--donations-target-amount-number').innerHTML += '<br/>';
	document.querySelector('.mospace-heroarea--donations-target-amount-number').innerHTML += "Total Points: " + userPoints;
	document.querySelector('.mospace-heroarea--donations-target-amount-number').innerHTML += '<br/>';
	document.querySelector('.mospace-heroarea--donations-target-amount-number').innerHTML += "<span id='contr-area-label'>Current Contribution Area: " + event.detail['contributionArea'] + "</span>";
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

function _generateContributionBars(contributionItem, containerElement, barId, barStyle) {
	var totalAmountBars = _getNumberOfBars(contributionItem.totalAmount);
	var userAmountBars = _getNumberOfBars(contributionItem.userAmount);
	var totalBars = Math.ceil(totalAmountBars);
	for (var i = 1; i <= totalBars; i++) {
		containerElement.innerHTML += '<div class="progress" id="' + barId + '-' + i + '"></div>';
	}

	var bars = [];

	var barElements = [];
	for (var i = 1; i <= totalBars; i++) {
		var progressbar = document.querySelector('#' + barId + '-' + i);

		var currentBarCap = Math.pow(10, i - 1) * 100;

		var userAmountPassed = 0;
		for (var j = 1; j < i; j++) {
			userAmountPassed += Math.pow(10, j - 1) * 100;
		}
		var userCurrentBar = ((contributionItem.userAmount - userAmountPassed) > currentBarCap) ? currentBarCap : ((contributionItem.userAmount - userAmountPassed) > 0 ? (contributionItem.userAmount - userAmountPassed) : 0);

		var totalAmountPassed = 0;
		for (var j = 1; j < i; j++) {
			totalAmountPassed += Math.pow(10, j - 1) * 100;
		}
		var totalCurrentBar = ((contributionItem.totalAmount - totalAmountPassed) > currentBarCap) ? currentBarCap : ((contributionItem.totalAmount - totalAmountPassed) > 0 ? (contributionItem.totalAmount - totalAmountPassed) : 0);

		progressbar.innerHTML += '<span class="progress-side-label ' + (userCurrentBar >= currentBarCap ? 'progress-side-label-completed' : '') + '">' + '$' + userCurrentBar + ' / ' + '$' + totalCurrentBar + '</span>';

		if (Math.ceil(userAmountBars) >= i) {
			var userBarWidth = Math.min((userAmountBars - i + 1), 1) * 100;
			progressbar.innerHTML += '<div class="progress-bar progress-bar-striped ' + barStyle + '" id="' + barId + '-' + i + '-bar' + '" role="progressbar" style="width: 0"></div>'
			bars.push(
				['#' + barId + '-' + i + '-bar', userBarWidth + '%']
			);
			if (Math.ceil(userAmountBars) == i && userAmountBars < i) {
				var totalBarWidth = 0;
				if (totalAmountBars >= i) {
					totalBarWidth = 100 - userBarWidth;
				} else {
					totalBarWidth = (totalAmountBars - userAmountBars) * 100;
				}
				if (totalBarWidth) {
					progressbar.innerHTML += '<div class="progress-bar progress-bar-striped ' + TOTAL_BAR_STYLE + '" id="' + barId + '-' + i + '-bar-total' + '" role="progressbar" style="width: 0"></div>'
					bars.push(
						['#' + barId + '-' + i + '-bar-total', totalBarWidth + '%']
					);
				}
			}
		} else {
			var totalBarWidth = 100;
			if (totalAmountBars < i) {
				totalBarWidth = (totalAmountBars - Math.floor(totalAmountBars)) * 100;
			}
			progressbar.innerHTML += '<div class="progress-bar progress-bar-striped ' + TOTAL_BAR_STYLE + '" id="' + barId + '-' + i + '-bar-total' + '" role="progressbar" style="width: 0"></div>'
			bars.push(
				['#' + barId + '-' + i + '-bar-total', totalBarWidth + '%']
			);
		}
	}

	setTimeout(function() {
		_fill(bars);
	}, 500);
}

function _getNumberOfBars(amount) {
	var numberOfBars = 0;
	var nextBarMax = 100;
	while (amount > nextBarMax) {
		numberOfBars++;
		amount -= nextBarMax;
		nextBarMax *= 10;
	}

	return (numberOfBars + (amount / nextBarMax)).toFixed(4);
}

function _fill(list) {
	if (list) {
		var item = list.shift();
		document.querySelector(item[0]).style.transition = "width .6s linear";
		document.querySelector(item[0]).style.width = item[1];
	}
	setTimeout(function() {
		_fill(list);
	}, 500);
}
