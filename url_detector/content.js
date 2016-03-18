/*
Chrome url detector content js
@Author Cheng
*/

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
  sendResponse(document.title);
})
