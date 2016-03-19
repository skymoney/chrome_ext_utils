//

function doDom(element){
  console.log(element);
}

function detectUrl(tabId, changeInfo, tab){
  var msg = "msg here";

  //alert(msg);
  chrome.tabs.sendMessage(tab.id, {'text': 'text'}, function(response){

  });
}

var detectUrl = function(callback){
  var msg = {'type': 'fetch_link'}

  chrome.tabs.query({active: true}, function(tab){
    chrome.tabs.sendMessage(tab[0].id, msg, function(response){
      links = response.links;
      callback(links);
    });
  });
}

//chrome.tabs.onUpdated.addListener(detectUrl);
/*
chrome.tabs.query({active: true}, function(tab){
  chrome.tabs.sendMessage(tab[0].id, {'text': 'text'}, function(response){
    alert("receive tab send msg callback");
  });
});*/

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
})
