var navigation = document.getElementById("dynamicAside");
var expanderBtn = document.getElementsByClassName("buttonContainer")[0];
var homeSectionInner = document.getElementsByClassName("home-section-inner")[0];
var pageHomeSectionContentTopMargin = homeSectionInner.style.marginTop;
var skillsNav = document.getElementById("skillsNav");
var aboutNav = document.getElementById("aboutNav");
var contactNav = document.getElementById("contactNav");
var cvNav = document.getElementById("cvNav");
var navMaxBorder = window.scrollY + document.querySelector('#cvNav').getBoundingClientRect().bottom + 20; // Y
var pageTitle = document.head.title;
window.addEventListener('resize', onPageWidthChanged);
var hamBtnChecked = false;
function onHamburgerBtnClicked() {
    expanderBtn.classList.toggle("change");
    hamBtnChecked = !hamBtnChecked;
    var visibility = hamBtnChecked;
    if (hamBtnChecked == true) {
        var navheight = convertPXToVW(navMaxBorder);
        setNavHeight(navheight);
        setNavElementsVisibilityTo(visibility);
        setElementTopMargin(homeSectionInner, navheight);
    }
    else {
        setNavHeight(25);
        setNavElementsVisibilityTo(visibility);
        homeSectionInner.style.marginTop = '35vw';
        homeSectionInner.style.transitionDuration = '0.7s';
    }
}
function setNavHeight(height) {
    navigation.style.height = height + 'vw';
    navigation.style.transitionDuration = '0.5s';
}
function setElementTopMargin(element, height) {
    element.style.marginTop = height + 'vw';
    element.style.transitionDuration = '0.7s';
}
function setNavElementsVisibilityTo(visible) {
    if (visible) {
        skillsNav.style.opacity = '1';
        skillsNav.style.transitionDuration = '0.7s';
        aboutNav.style.opacity = '1';
        aboutNav.style.transitionDuration = '0.7s';
        contactNav.style.opacity = '1';
        contactNav.style.transitionDuration = '0.7s';
        cvNav.style.opacity = '1';
        cvNav.style.transitionDuration = '0.7s';
    }
    else {
        skillsNav.style.opacity = '0';
        skillsNav.style.transitionDuration = '0.6s';
        aboutNav.style.opacity = '0';
        aboutNav.style.transitionDuration = '0.6s';
        contactNav.style.opacity = '0';
        contactNav.style.transitionDuration = '0.6s';
        cvNav.style.opacity = '0';
        cvNav.style.transitionDuration = '0.6s';
    }
}
function onPageWidthChanged() {
    var width = document.body.clientWidth;
    if (width > 1200) {
        setNavHeight(60);
        setNavElementsVisibilityTo(true);
        resetPageHomeSectionMargin();
    }
    else {
        if (hamBtnChecked == false) {
            setNavHeight(25);
            setNavElementsVisibilityTo(false);
        }
    }
}
function resetPageHomeSectionMargin() {
    homeSectionInner.style.marginTop = pageHomeSectionContentTopMargin;
    homeSectionInner.style.transitionDuration = '0.7s';
}
function hideNavOnCvPage() {
    if (screen.width > 1440) {
        navigation.remove();
    }
}
function convertPXToVW(px) {
    return px * (100 / document.documentElement.clientWidth);
}
//# sourceMappingURL=index.js.map