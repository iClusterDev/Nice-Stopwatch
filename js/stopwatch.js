//-------------------------------------------------------------------------------
//     STOPWATCH
//-------------------------------------------------------------------------------            
var StopWatch = function() {

    var _timeRunning = false;                
    var _timeStart = null;                
    var _timeRun = null;
    var _timeElapsed = null;
    var _timeRecords = {
        elapsed: 0,
        lap: 0
    };                
    var _update = function() {
        var timeEnd = Date.now();
        _timeElapsed += ((timeEnd - _timeStart)/1000);
        _timeStart = timeEnd;
    };

    this.Start = function() {
        _timeRunning = true;
        _timeStart = Date.now();
        _timeRun = setInterval(_update, 1);                    
        _timeElapsed = 0;
        _timeRecords.elapsed = 0;
        _timeRecords.lap = 0;
    };

    this.Stop = function() {
        _timeRunning = false;
        clearInterval(_timeRun);
    };

    this.Restart = function() {
        _timeRunning = true;
        _timeStart = Date.now();
        _timeRun = setInterval(_update, 1);
    };

    this.Reset = function() {
        _timeRunning = false;
        _timeStart = null;
        _timeRun = null;
        _timeElapsed = null;
        _timeRecords.elapsed = 0;
        _timeRecords.lap = 0;
    };

    this.Lap = function() {
        if(_timeRunning === true){
            _timeRecords.lap = _timeElapsed - _timeRecords.elapsed;
            _timeRecords.elapsed = _timeElapsed;
        }
        return _timeRecords;
    };

    this.GetElapsedTime = function() {
        return _timeElapsed;
    };

    this.IsRunning = function() {
        return _timeRunning;
    };

};