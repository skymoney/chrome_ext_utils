//

function doDom(element){
  console.log(element);
}

function detectUrl(tabId, changeInfo, tab){
  chrome.tabs.sendMessage(tab.id, {'text': 'text'}, doDom);
}

chrome.tabs.onUpdated.addListener(detectUrl);
