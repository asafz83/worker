var i = 0;

function timedCount() {
    //addTime();
    setTimeout(addTime,500);
}

function addTime(){
	i = i + 1;
    postMessage(i);
	setTimeout(addTime,500);
}

timedCount();
