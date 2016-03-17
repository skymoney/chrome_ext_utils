//

function doDom(element){
  
}

function detectUrl(tabId, changeInfo, tab){
  chrome.tabs.sendMessgae(tab.id, {'text': 'text'}, doDom);
}

chrome.tabs.onUpdated.addListener(detectUrl);
