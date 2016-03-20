/*
Chrome url detector content js
@Author Cheng
*/

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
  if(msg.type == "fetch_link"){
    detect_links = changeLink();

    sendResponse({'links': detect_links});
  }
})

function changeLink(){
  var content = document.body.textContent;
  //document.body.style.backgroundColor = 'red';
  var detect_links = content.match(/http(s)?:\/\/[\w|.|\/]+/g)

  if(detect_links == null){
    detect_links = [];
  }

  return detect_links;
}
