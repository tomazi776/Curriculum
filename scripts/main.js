const workplaces = Array.from(document.getElementsByClassName('timeline-contents'));
const skillsnofferPage = "skillsnoffer.html"
const aboutPage = "about.html"
const newestWorkplace = document.getElementsByClassName('timeline-contents');

var intViewportHeight = window.innerHeight;
var currentWorkplaceInitialVisibility = workplaces[1].className; //Undefined when on other page than skillsandoffer
// window.onload = onPageLOad();



console.log(workplaces.length)
// console.log(workplaces[0].clientHeight)
console.log(newestWorkplace)
console.log(intViewportHeight)

var pagePath = window.location.pathname;
var pageName = pagePath.split("/").pop();
console.log(pageName)

// -----> ABOUT START <----- \\

changeBackgroundImg(0, "url(images/jatlo.jpg)");

function changeBackgroundImg(elementIndex, bgImage){
    if(pageName == aboutPage){
        var homeSections = document.getElementsByClassName("home-section")
        homeSections[elementIndex].style.backgroundImage = bgImage;
    }
}

// -----> ABOUT END <----- \\


AddEventListenersToPages()

function AddEventListenersToPages(){
    if(pageName == skillsnofferPage){
        window.addEventListener("load", onPageLoad)

        window.addEventListener("scroll", showOnScroll);
    }
}

function onPageLoad() {
    workplaces[0].className = "timeline-contents timeline-now hide"
    }

var finished = false;
onPageLoad();
showOnScroll();

function showOnScroll() {   // Change to work JIT on Moblie
    if(!finished)
    for (var i = 0; i < workplaces.length; i++) {
        if (oneThirdInViewport(newestWorkplace[i])) {
            setVisibility(i, "show")
            // if (first(i)) {
            //     workplaces[i].className = "timeline-contents timeline-now show"
            // }
            // else {
            //     workplaces[i].className = "timeline-contents show"
            //     // if(last(i)){
            //     //     finished = true;
            //     // }
            // }
        }
        else {
            setVisibility(i, "hide")
            // if (first(i)) {
            //     workplaces[i].className = "timeline-contents timeline-now hide"
            // }
            // else {
            //     workplaces[i].className = "timeline-contents hide"
            // }
        }
        // if(last(i)){
        //     finished = true;
        // }
    }
};

function first(iterator){
    if (iterator == 0){
        return true;
    }
};

function last(iterator){
    if (iterator == workplaces.length - 1){
        return true;
    }
};

function setVisibility(eIndex, showHide){
    if (first(eIndex)) {
        workplaces[eIndex].className = `timeline-contents timeline-now ${showHide}`

    }
    else {
        workplaces[eIndex].className = `timeline-contents ${showHide}`
        if(last(eIndex) && showHide == "show"){
            finished = true;
        }
    }
};


function oneThirdInViewport(element) {
    let bounds = element.getBoundingClientRect();
    let elementHalvedHeight = element.offsetHeight / 3;

    if(bounds['top'] < intViewportHeight - elementHalvedHeight)
    return true;
};

