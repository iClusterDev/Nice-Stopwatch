//-------------------------------------------------------------------------------
//     main
//-------------------------------------------------------------------------------
var sWatch = new StopWatch();
var start = document.getElementById("start");
var stopLap = document.getElementById("stop-lap");
var restartReset = document.getElementById("restart-reset");
var sTimesCounter = 0;

var sUpdateDisplay = function() {
    if (sWatch.IsRunning() === true) {
        replaceHTML("sDisplay", secondsToHMS(sWatch.GetElapsedTime()));
    }
};

var sResetDisplay = function() {
    replaceHTML("sDisplay", secondsToHMS(0));
};

var sUpdateTimeRecords = function(timesCounter, timeRecord) {
    if(timesCounter !== undefined && timeRecord !== undefined){
        var timeRecordsList = document.getElementById("sTimeRecords");
        var timeRecordsItem = document.createElement("li");                    

        var timeItemCounter = document.createElement("span");
        timeItemCounter.classList.add("sCounter");
        timeItemCounter.appendChild(document.createTextNode(leftPad(timesCounter, 2)));                    

        var timeItemElapsed = document.createElement("span");
        timeItemElapsed.classList.add("sElapsed");
        timeItemElapsed.appendChild(document.createTextNode(secondsToHMS(timeRecord.elapsed)));

        var timeItemLap = document.createElement("span");
        timeItemLap.classList.add("sLap");
        timeItemLap.appendChild(document.createTextNode(secondsToHMS(timeRecord.lap)));

        timeRecordsItem.appendChild(timeItemCounter);
        timeRecordsItem.appendChild(timeItemElapsed);
        timeRecordsItem.appendChild(timeItemLap);
        timeRecordsList.insertBefore(timeRecordsItem, timeRecordsList.firstChild);                    
    }
};

var sClearTimeRecords = function() {
    var timeRecordsList = document.getElementById("sTimeRecords");
    timeRecordsList.innerHTML = "";
};

window.onload = sResetDisplay();

document.getElementById("sStartButton").onclick = function() {
    toggleHide(stopLap, start);
    sWatch.Start();
    sTimesCounter = 0;
    setInterval(sUpdateDisplay, 1);
};

document.getElementById("sStopButton").onclick = function() {
    toggleHide(restartReset, stopLap);
    sWatch.Stop();
};

document.getElementById("sRestartButton").onclick = function() {
    toggleHide(stopLap, restartReset);                
    sWatch.Restart();
};

document.getElementById("sResetButton").onclick = function() {
    toggleHide(start, restartReset);
    sWatch.Reset();
    sTimesCounter = 0;
    sResetDisplay();
    sClearTimeRecords();
};

document.getElementById("sLapButton").onclick = function() {
    sTimesCounter++;
    var timeRecord = sWatch.Lap();
    sUpdateTimeRecords(sTimesCounter, timeRecord);
};  