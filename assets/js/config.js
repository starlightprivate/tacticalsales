/*
 * Config.js AppCodeStarted
 * remove duplicate slashes from url
 */
var SanitizedLocName = window.location.pathname.replace(/\/+/g, "/");

/*
 * used for api calls
 */
var GlobalConfig = {
	ApiBaseUrl: "https://api.tacticalmastery.com/api/v1.0/",
	BasePagePath: ""
};


/* jshint ignore:start */

/* jshint ignore:end */

var phoneNumberOptions = {
	"translation": {
		0: {pattern: /[0-9*]/}
	}
};

// List of test credit card numbers that you want it to be passed although they can be invalid one
var TEST_CARD_NUMBERS = ["0000000000000000"];

// We will transform those test card numbers into a valid one as below
var VALID_CARD_NUMBER = "4444111144441111";
