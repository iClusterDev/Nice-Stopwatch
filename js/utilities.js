//-------------------------------------------------------------------------------
//     utilities
//-------------------------------------------------------------------------------            
var toggleHide = function(elementToShow, elementToHide) {
    elementToHide.classList.add("hide");
    elementToShow.classList.remove("hide");
};

var replaceHTML = function(targetID, newHTML) {
    document.getElementById(targetID).innerHTML = newHTML;
};

var leftPad = function(root, nDigits) {
    var rootString = root.toString();
    if (nDigits > rootString.length) {
        var newString = "0".repeat(nDigits - rootString.length);
        newString = newString.concat(rootString);
        return newString;
    }
    return rootString.toString();
};

var secondsToHMS = function(seconds) {
    var hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = parseInt(seconds / 60);
    seconds = seconds % 60;                
    return (leftPad(hours, 2) + ":" + leftPad(minutes, 2) + ":" + leftPad(seconds.toFixed(2), 5));
};