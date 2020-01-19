/** @type {HTMLElement} */
var videoLinks = {"calabria": "https://www.youtube.com/embed/xczJ6pEpD6s", "najakiestudia": "https://www.youtube.com/embed/UCrBYuf9RmI", "highlight": "https://www.youtube.com/embed/3lfsE8MjNFs"}
var videoElement = document.getElementById('video-element')
var videoLinkKeys = Object.keys(videoLinks);

console.log(videoElement.src)
console.log(videoLinkKeys)

setInitialVideoSource()
// changeVideoSource(videoLinks.najakiestudia)
console.log(videoElement.src)

var increment = 0
function changeVideoSource(video){
    increment++
    var currentVideo = getCurrentVideo()

    var incrementedVideo = "calabria"
    if(increment < videoLinkKeys.length){
        incrementedVideo = videoLinkKeys[increment]
    }
    else{
        increment = 0
    }
    var nextVideo = videoLinks[incrementedVideo]
    if(nextVideo != currentVideo){
        videoElement.src = nextVideo
        var fff = "dupal"
    }
    console.log(videoElement.src)

}


function setInitialVideoSource(){
    videoElement.src = videoLinks.calabria
}

function nextVideo(){
    changeVideoSource()
}

function previousVideo(){
    changeVideoSource()
}

function getCurrentVideo(){
    return videoElement.src

}