chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){

});

var link_ul = document.getElementById("result_link_ul")

var bgPage = chrome.extension.getBackgroundPage();
bgPage.detectUrl(function(links){
  var link_ul = document.getElementById("result_link_ul");
  for(var i=0;i<links.length;i++){
    li_node = document.createElement('li');
    li_node.textContent = links[i];
    link_ul.appendChild(li_node);
  }
});
