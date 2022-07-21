var win = Ti.UI.createWindow({});
var label = Ti.UI.createLabel({text:"click"});
win.add(label);
win.open();

var ti_wallet = require('ti.wallet');
ti_wallet.init();
ti_wallet.addEventListener("success", function(){
    console.log("success");
})
ti_wallet.addEventListener("error", function(e){
    console.log("error", e.message);
})
win.addEventListener("click", function(){
    ti_wallet.save('{}');
})