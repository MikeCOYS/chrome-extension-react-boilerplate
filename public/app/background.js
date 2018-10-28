/*global chrome*/
// https://developer.chrome.com/extensions/devguide

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "BROWSER_ACTION_ONCLICK"
    });
  });
});
