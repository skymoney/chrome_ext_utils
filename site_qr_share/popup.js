/*
* Site share Ext
*/

chrome.tabs.query({'active': true}, function(tabs){
  var url = tabs[0].url;

  var target_url = "http://tool.oschina.net/action/qrcode/generate";
  /*$.ajax({
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
    "size": 4},
    success: function(){
      alert("error");
    },
    error: function(){
      alert("error");
    }});*/
    var url_param = "data=" + encodeURIComponent(url) + "&output=" + encodeURIComponent("image/gif")
      + "&error=L&type=0&margin=0&size=4"
    var request_url = target_url + "?" + url_param
    console.log(request_url);
    $("#qr_code_img").attr("src", request_url);
});
