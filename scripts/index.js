var navigation = document.getElementById("dynamicAside");
var expanderBtn = document.getElementsByClassName("buttonContainer")[0];
var homeSectionInner = document.getElementsByClassName("home-section-inner")[0];
var cvContainer = document.getElementsByClassName("cv-container")[0];
var skillsNav = document.getElementById("skillsNav");
var aboutNav = document.getElementById("aboutNav");
var contactNav = document.getElementById("contactNav");
var cvNav = document.getElementById("cvNav");
// let navElements = <HTMLCollection>
var hamBtnChecked = false;
function onHamburgerBtnClicked() {
    expanderBtn.classList.toggle("change");
    hamBtnChecked = !hamBtnChecked;
    if (hamBtnChecked == true) {
        navigation.style.height = '60vw';
        navigation.style.transitionDuration = '0.5s';
        skillsNav.style.opacity = '1';
        skillsNav.style.transitionDuration = '0.7s';
        aboutNav.style.opacity = '1';
        aboutNav.style.transitionDuration = '0.7s';
        contactNav.style.opacity = '1';
        contactNav.style.transitionDuration = '0.7s';
        cvNav.style.opacity = '1';
        cvNav.style.transitionDuration = '0.7s';
        homeSectionInner.style.marginTop = '60vw';
        homeSectionInner.style.transitionDuration = '0.6s';
        homeSectionInner.style.animationDelay = '3s';
    }
    else {
        navigation.style.height = '25vw';
        navigation.style.transitionDuration = '0.5s';
        skillsNav.style.opacity = '0';
        skillsNav.style.transitionDuration = '0.6s';
        aboutNav.style.opacity = '0';
        aboutNav.style.transitionDuration = '0.6s';
        contactNav.style.opacity = '0';
        contactNav.style.transitionDuration = '0.6s';
        cvNav.style.opacity = '0';
        cvNav.style.transitionDuration = '0.6s';
        homeSectionInner.style.marginTop = '35vw';
        homeSectionInner.style.transitionDuration = '0.6s';
    }
}
//# sourceMappingURL=index.js.map