//    const workplaces = (document.getElementsByClassName("workplaces"));
// console.log(workplaces);

// const workplacesIdEl = document.getElementById('workplaces');

// document.addEventListener("DOMContentLoaded", function(){

// });

const workplaces = Array.from(document.getElementsByClassName('timeline-contents'));
console.log(workplaces.length)

showOnScroll();


function showOnScroll (yPos){
    var divYPos = 200;
    for (var i = 0; i < workplaces.length; i++){
        var y = window.scrollY;
        if (y >= divYPos){
            if (i == 0){
                workplaces[i].className = "timeline-contents timeline-now show"
            }
            else{
                workplaces[i].className = "timeline-contents show"
            }
        } 
        
        else if (y < divYPos){
            if (i == 0){
                workplaces[i].className = "timeline-contents timeline-now hide"
            }
            else{
                workplaces[i].className = "timeline-contents hide"
            }
        }
        divYPos += 300;
    }
};

    window.addEventListener("scroll", showOnScroll);
