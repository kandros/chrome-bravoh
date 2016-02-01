var alreadyClicked = false;
var timer;

chrome.browserAction.onClicked.addListener(function (tab) {
  if (alreadyClicked) {
    clearTimeout(timer);
    console.log("Double click");
    var sound = chrome.extension.getURL("/pureio.wav");
    playSound(sound);
    alreadyClicked = false;
    return;
  }

  alreadyClicked = true;

  timer = setTimeout(function () {
    console.log("Single click");
    var sound = chrome.extension.getURL("/bravoh.wav");
    playSound(sound);
    clearTimeout(timer);
    alreadyClicked = false;
  }, 250);

});
//soraLella
chrome.commands.onCommand.addListener(function (command) {
  if (command === "soraLella") {
    var sound = chrome.extension.getURL("/soralella.wav");
    playSound(sound);
  }
});

function playSound(sound) {
  var audio = new Audio(sound);
  audio.currentTime = 0;
  audio.play();
}
