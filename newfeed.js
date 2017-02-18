var likeElements = document.querySelectorAll('.coreSpriteHeartOpen');
var focusElement = document.querySelectorAll('article._8ab8k._j5hrx._pieko');

var currentTimeout = 0;

function getRandomTimeout() {
    var baseTimeout = 5000
    var randTimeout = Math.random() * 5000 + baseTimeout;
    currentTimeout = randTimeout + currentTimeout;
    return currentTimeout
}

function likeElementWithTimeout(i) {
    setTimeout(function(i) {
        likeElements[i].click()
	    focusElement[i].scrollIntoView();
        console.log('Liked ' + i)
    }, getRandomTimeout(), i);
}

function autoLikeNewsFeed() {
    console.log("The AutoClickSelector script is getting started")
    for (i = 0; i < likeElements.length; i++) { 
        likeElementWithTimeout(i);
    }	
}

autoLikeNewsFeed();
