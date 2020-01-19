const workplaces = Array.from(document.getElementsByClassName('timeline-contents'));
const skillsnofferPage = "skillsnoffer.html"
const aboutPage = "about.html"
console.log(workplaces.length)

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
        window.addEventListener("scroll", showOnScroll);
    }
}

var finished = false;
showOnScroll();

function showOnScroll (yPos){
    if(!finished){
        var divYPos = 200;
        for (var i = 0; i < workplaces.length; i++)
        {
            var y = window.scrollY;
            if (y >= divYPos)
            {
                if (i == 0)
                {
                    workplaces[i].className = "timeline-contents timeline-now show"
                }
                else
                {
                    workplaces[i].className = "timeline-contents show"
                }
            } 
            
            else if (y < divYPos && workplaces[i].className == "timeline-contents timeline-now show" 
            || workplaces[i].className == "timeline-contents show" )
            {
                if (i == 0)
                {
                    workplaces[i].className = "timeline-contents timeline-now shown"
                }
                else
                {
                    workplaces[i].className = "timeline-contents shown"
                }
                    finished = true;
            }
    
            else{
                if (i == 0){
                    workplaces[i].className = "timeline-contents timeline-now hide"
                }
                else{
                    workplaces[i].className = "timeline-contents hide"
                }
                finished = false;
            }
            divYPos += 300;
        }
    }
    
};
