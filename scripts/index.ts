            let navigation = <HTMLElement> document.getElementById("dynamicAside");
            let expanderBtn = <HTMLElement>document.getElementsByClassName("buttonContainer")[0]
            let currentPageTitle = <string>document.title

            let underNavContainer
            let underNavContainerTopMargin

            configureBasedOnPage()

            function configureBasedOnPage(){
                if(hasMobileNav(currentPageTitle)){
                    configureMobileNavViewElements()
                }
            }

            function hasMobileNav(pageTitle: string) : boolean{
                return currentPageTitle != "Tomasz Urbaniak - CV"
            }

            function configureMobileNavViewElements(){
                if(currentPageTitle != "Skills & Offer"){
                    underNavContainer = <HTMLElement>document.getElementsByClassName("home-section-inner")[0]
                    underNavContainerTopMargin = underNavContainer.style.marginTop
                }
                else{
                    underNavContainer = <HTMLElement>document.getElementsByClassName("main-section")[0]
                    underNavContainerTopMargin = underNavContainer.style.marginTop
                    if(document.body.clientWidth < 1200){
                        setElementTopMargin(underNavContainer, 25)
                        changeHTMLTag()
                    }
                }
            }

            let skillsNav = <HTMLElement>document.getElementById("skillsNav");
            let aboutNav = <HTMLElement>document.getElementById("aboutNav");
            let contactNav = <HTMLElement>document.getElementById("contactNav");
            let cvNav = <HTMLElement>document.getElementById("cvNav");

            let menuElements = [skillsNav, aboutNav, contactNav, cvNav]

            // let navMaxBorder = window.scrollY + document.querySelector('#cvNav').getBoundingClientRect().bottom + 20  // Y
            let navMaxBorder = window.scrollY + cvNav.getBoundingClientRect().bottom + 20  // Y

            window.addEventListener('resize', onPageWidthChanged);

            let hamBtnChecked = false;
            function onHamburgerBtnClicked(){
                expanderBtn.classList.toggle("change")
                hamBtnChecked = !hamBtnChecked
                let visibility = hamBtnChecked
                
                if(hamBtnChecked == true){
                    var navheight = convertPXToVW(navMaxBorder)
                    setNavHeight(navheight)
                    setNavElementsVisibilityTo(visibility)
                    setElementTopMargin(underNavContainer,navheight)
                }
                else{
                    setNavHeight(25)
                    setNavElementsVisibilityTo(visibility)
                    setElementTopMargin(underNavContainer, 25)
                }
            }

            function setNavHeight(height: number){
                navigation.style.height = height + 'vw'
                navigation.style.transitionDuration = '0.5s'
            }

            function setElementTopMargin(element : HTMLElement, height : number){
                element.style.marginTop = height + 'vw'
                element.style.transitionDuration = '0.5s'

            }

            function setNavElementsVisibilityTo(visible: boolean){
                if(visible){
                    skillsNav.style.opacity = '1'
                    skillsNav.style.transitionDuration = '0.7s'

                    aboutNav.style.opacity = '1'
                    aboutNav.style.transitionDuration = '0.7s'

                    contactNav.style.opacity = '1'
                    contactNav.style.transitionDuration = '0.7s'

                    cvNav.style.opacity = '1'
                    cvNav.style.transitionDuration = '0.7s'

                }
                else{
                    skillsNav.style.opacity = '0'
                    skillsNav.style.transitionDuration = '0.6s'

                    aboutNav.style.opacity = '0'
                    aboutNav.style.transitionDuration = '0.6s'

                    contactNav.style.opacity = '0'
                    contactNav.style.transitionDuration = '0.6s'

                    cvNav.style.opacity = '0'
                    cvNav.style.transitionDuration = '0.6s'
                }
            }



            function onPageWidthChanged(){
                var width = document.body.clientWidth
                if(width > 1200){
                    setNavHeight(60)
                    setNavElementsVisibilityTo(true)
                    resetPageHomeSectionMargin()
                }
                else{
                    if(hamBtnChecked == false){
                        setNavHeight(25)
                        setNavElementsVisibilityTo(false)
                    }
                }
            }

            function resetPageHomeSectionMargin(){
                underNavContainer.style.marginTop = underNavContainerTopMargin
                underNavContainer.style.transitionDuration = '0.7s'
            }

            function hideNavOnCvPage(){
                navigation.remove()
            }

            function changeHTMLTag()
            {
                var el = document.querySelector('.workplaces-title h2');
                el.outerHTML = '<h3>' + el.innerHTML + '</h3>';
            }

            function convertPXToVW(px) {
                return px * (100 / document.documentElement.clientWidth);
            }