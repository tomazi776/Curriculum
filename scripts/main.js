const workplaces = Array.from(document.getElementsByClassName('timeline-contents'));
const skillsnofferPage = "skillsnoffer.html"
const aboutPage = "about.html"
const newestWorkplace = document.getElementsByClassName('timeline-contents');
const firstLoad = true;
var intViewportHeight = window.innerHeight;
// var currentWorkplaceInitialVisibility = workplaces[1].className; //Undefined when on other page than skillsandoffer


var pagePath = window.location.pathname;
const pageName = pagePath.split("/").pop();

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

var finished = false;

if(pageName == skillsnofferPage){
    onPageLoad();
}

showOnScroll();

function showOnScroll() {   // Change to work JIT on Moblie
    if(!finished)
    for (var i = 0; i < workplaces.length; i++) {
        if (oneThirdInViewport(newestWorkplace[i])) {
            setVisibility(i, "show")
        }
        else {
            setVisibility(i, "hide")
        }
    }
};

function onPageLoad() {
    if(oneThirdInViewport(newestWorkplace[0])){
        setVisibility(0, "show")
    }
    else{
        setVisibility(0, "hide")

    }
    }

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

