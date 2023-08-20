chrome.runtime.onMessage.addListener(function (msg, sender) {
  // first, validate the message's structure
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    // enable the page-action for the requesting tab
    chrome.pageAction.show(sender.tab.id);
  }
});