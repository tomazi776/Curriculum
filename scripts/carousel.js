/** @type {HTMLElement} */
const next = "next"
const previous = "previous"
var videoLinks = {"calabria": "https://www.youtube.com/embed/xczJ6pEpD6s", "najakiestudia": "https://www.youtube.com/embed/UCrBYuf9RmI", "highlight": "https://www.youtube.com/embed/3lfsE8MjNFs"}
var videoElement = document.getElementById('video-element')
var videoLinkKeys = Object.keys(videoLinks);

var videoTitle = document.getElementsByClassName("align-center")[0]
var videoSubtitle = document.getElementsByClassName("align-center")[1]
var videoTitles = {"calabria": "Wyścig autostopowy Polska - Włochy", "najakiestudia": "Portal z wideo wywiadami - najakiestudia.pl", "highlight": "Tomasz Urbaniak - film promocyjny"} 

console.log(videoElement.src)
console.log(videoLinkKeys)

setInitialVideoSource()
console.log(videoElement.src)

var increment = 0
function changeVideoSource(direction){
    (direction == next)? increment++ : increment--

    var currentVideoLink = videoElement.src

    if(increment < videoLinkKeys.length && increment >= 0){
        incrementedVideo = videoLinkKeys[increment]
    }
    else if(increment >= countElements(videoLinkKeys)){
        increment = videoLinkKeys.indexOf("calabria")
        incrementedVideo = videoLinkKeys[increment]
    }
    else if(increment < 0){
        increment = videoLinkKeys.indexOf("highlight")
        incrementedVideo = videoLinkKeys[increment]
    }
    var nextVideoLink = videoLinks[incrementedVideo]
    var nextVideoTitle = videoTitles[incrementedVideo]
    if(nextVideoLink != currentVideoLink){
        videoElement.src = nextVideoLink
        setVideoTitleInfo(nextVideoTitle)
        setVideoSubTitleInfo(increment + 1)
    }
    console.log(videoElement.src)
}

function setInitialVideoSource(){
    videoElement.src = videoLinks.calabria
    setVideoTitleInfo(videoTitles["calabria"])
    setVideoSubTitleInfo(1)
}

function setVideoTitleInfo(videoKeyName){
    videoTitle.textContent = videoKeyName
}

function setVideoSubTitleInfo(index){
    videoSubtitle.textContent = index + "/3"
}

function nextVideo(){
    changeVideoSource("next")
}

function previousVideo(){
    changeVideoSource("previous")
}

function countElements(someArray){
    var count = 0
    for(var i = 0; i<someArray.length; i++){
        count++
    }
    return count
}