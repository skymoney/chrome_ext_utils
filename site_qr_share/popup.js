/*
* Site share Ext
*/

chrome.tabs.query({'active': true}, function(tabs){
  var url = tabs[0].url;
  var target_url = "http://tool.oschina.net/action/qrcode/generate";
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: target_url,
    crossDomain: true,
    headers: {},
    data: {"data": url,
    "output": "image/gif",
    "error": "L",
    "type": 0,
    "margin": 0,
    "size": 4}}).done(function(data){
      alert("down");
    })
    .fail(function(xhr, text){
      alert("error");
    });

});
