
function timedCount() {
    var date = new Date();
   // var str = "";
    var str = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    postMessage(str);
    setTimeout(timedCount,1000);
}



timedCount();
