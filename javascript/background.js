/**
 * @author Michael Brown
**/

chrome.browserAction.onClicked.addListener(function(tab) {
  // Open options page in its own tab.
  chrome.tabs.create({'url': chrome.extension.getURL('options.html')}, function(tab) {
  });
});

/*
console.log("Setting badge to empty");
chrome.browserAction.setBadgeText({
	text: ""
});
*/
