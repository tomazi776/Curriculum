            let navigation = <HTMLElement> document.getElementById("dynamicAside");
            let expanderBtn = <HTMLElement>document.getElementsByClassName("buttonContainer")[0]
            let homeSectionInner = <HTMLElement>document.getElementsByClassName("home-section-inner")[0]
            let pageHomeSectionContentTopMargin = homeSectionInner.style.marginTop

            let skillsNav = <HTMLElement>document.getElementById("skillsNav");
            let aboutNav = <HTMLElement>document.getElementById("aboutNav");
            let contactNav = <HTMLElement>document.getElementById("contactNav");
            let cvNav = <HTMLElement>document.getElementById("cvNav");

            let navMaxBorder = window.scrollY + document.querySelector('#cvNav').getBoundingClientRect().bottom + 20  // Y


            let pageTitle = <string>document.head.title

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
                    setElementTopMargin(homeSectionInner,navheight)
                }
                else{
                    setNavHeight(25)
                    setNavElementsVisibilityTo(visibility)

                    homeSectionInner.style.marginTop = '35vw'
                    homeSectionInner.style.transitionDuration = '0.7s'
                }
            }

            function setNavHeight(height: number){
                navigation.style.height = height + 'vw'
                navigation.style.transitionDuration = '0.5s'
            }

            function setElementTopMargin(element : HTMLElement, height : number){
                element.style.marginTop = height + 'vw'
                element.style.transitionDuration = '0.7s'
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
                homeSectionInner.style.marginTop = pageHomeSectionContentTopMargin
                homeSectionInner.style.transitionDuration = '0.7s'
            }

            function hideNavOnCvPage(){
                if(screen.width > 1440)
                {
                    navigation.remove()
                }
            }

            function convertPXToVW(px) {
                return px * (100 / document.documentElement.clientWidth);
            }