/*
* Site share Ext
*/

chrome.tabs.query({'active': true}, function(tabs){
  var url = tabs[0].url;
  //call jquery qr_code method
  //will override 
  $("#qr_code_div").qrcode({
    size: 100,
    text: url
  });
});
