"use strict"

const ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    /* Variables */

    const hamburger = document.querySelector('.header__hamburger .hamburger')
    const menu = document.querySelector('.menu')
    const header = document.querySelector('.header')
    const homeSection = document.querySelector('.home')
    const functionalMainTabs = document.querySelectorAll('.functional__content .functional-header .tabs__list-item')
    const functionalMainContent = document.querySelectorAll('.functional__content .functional-body .tabs__content-tab')
    const sidebarSearchField = document.querySelectorAll('.search__field input')
    const clearSearchButton = document.querySelectorAll('.search__field .clear')
    const questionFormBtn = document.querySelector('.wiki-content__outer .toggle-form-button')
    const questionFormBody = document.querySelector('.wiki-content__outer .question-form__body') 
    const footerExpandBtn = document.querySelector('.footer__contacts .footer-logo .expand-button')
    const footerExpandWrapper = document.querySelector('.footer__contacts .expand-wrapper')
    const benefitsTabList = document.querySelectorAll('.benefits__content-tabs .tablist__link')
    const wikiBanner = document.querySelector('.wiki-banner')
    const wikiTopTabItems = document.querySelectorAll('.wiki-banner__top .wiki-tabs .tabs__list-item')
    const wikiSidebarLinks = document.querySelectorAll('.wiki-content .sidebar__navigation .navlist__link')
    const homeBannerContent = document.querySelector('.home .banner__content')
    const zoomButton = document.querySelector('.button_zoom')
    const mobileSidebarBtn = document.querySelector('.sidebar-wrapper__top .arrow')
    const stickyWrapperSidebar = document.querySelector('.wiki-content__outer .sticky-wrapper .sticky-wrapper__item:first-child')
    const wikiQuestionForm = document.querySelector('.wiki-content__outer .sticky-wrapper .sticky-wrapper__item:last-child') 
    const plansToggleButton = document.querySelectorAll('.plans .button_toggle')
    const wikiSection = document.querySelector('.wiki')
    const wikiLoaded = document.querySelector('.wiki-slider')
    const overlay = document.querySelector('.overlay')
    const overlayIntegrations = document.querySelector('.overlay-integrations')

    const smoothScroll = new SmoothScroll()
    const integrationsBtn = document.querySelectorAll('.integrations-content__column .integrations-grid__item .integration-card-arrow .btn-arrow')


    
    let clientsSlider
    let tariffsSlide
    let functionalTopTabs
    let homeSlider
    let benefitsSlider
    let pricingTariffSlider
    let homeContent 

    if(homeBannerContent && window.innerWidth <= 992) {
        // homeContent = tns({
        //     "container": homeBannerContent,
        //     "items": 1,
        //     "axis": "vertical",
        //     "swipeAngle": false,
        //     "speed": 400,
        //     autoHeight: true,
        //     loop: false,
        //     controls: false,
        //     nav: false,
        //     onInit({container}) {
        //         container.classList.add('loaded')
        //         container.closest('.tns-outer').classList.add('loaded')
        //     },
        // })
    }

    if(document.querySelector('.pricing__tariffs-slider') && window.innerWidth <= 1600) {
        pricingTariffSlider = tns({
            container: '.pricing__tariffs-slider',
            items: 3,
            gutter: 15,
            loop: false,
            controls: false,
            mouseDrag: true,
            autoHeight: true,
            edgePadding: 100,
            startIndex: 1,
            fixedWidth: 300,
            responsive: {
                768: {
                    fixedWidth: 300,
                },
                576: {
                    items: 1,
                    fixedWidth: 235,
                },
                320: {
                    fixedWidth: 222,
                    gutter: 0
                }
            }
        })
    }

    if(document.querySelector('.clients')) {
        clientsSlider = new Swiper('.clients .swiper-container', {
            slidesPerView: 3,
            speed: 400,
            spaceBetween: 80,
            mousewheel: true,
            autoHeight: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            observer: true,
            observeParents: true,
            slideVisibleClass: 'swiper-slide-visible',
            breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 60
                }
              },
            on: {
                init(swiper) {
                    const { $el } = swiper
                    $el[0].nextElementSibling.children[0].addEventListener('input', function() {
                        let index = parseInt(this.value, 10) - 1
                        clientsSlider.slideTo(index)
                    })
                },
            },
        })
    
        clientsSlider.on('slideChange', function(swiper) {
            const { $el, slides, passedParams: { slidesPerView }, activeIndex } = swiper
            console.log('slide changed', swiper)
            $el[0].nextElementSibling.children[0].setAttribute('max', (slides.length - slidesPerView) + 1)
            $el[0].nextElementSibling.children[0].value = activeIndex + 1
        })

        // clientsSlider = tns({
        //     container: '.clients__slider',
        //     items: 3,
        //     gutter: 80,
        //     loop: false,
        //     controls: false,
        //     mode: 'carousel',
        //     mouseDrag: true,
        //     responsive: {
        //         1200: {
        //             items: 3
        //         },
        //         992: {
        //           items: 2
        //         },
        //         768: {
        //             items: 2,
        //             gutter: 75,
        //             center: false,
        //             fixedWidth: false
        //         },
        //         576: {
        //             items: 1,
        //             gutter: 75,
        //             center: false,
        //             fixedWidth: false 
        //         },
        //         320: {
        //             items: 1,
        //             gutter: 60,
        //             // center: true,
        //             fixedWidth: 240
        //         }
        //     }
        // })
    }

    if(document.querySelector('.tariff-slider') && window.innerWidth < 992) {
        tariffsSlide = tns({
            container: '.tariff-slider',
            items: 3,
            gutter: 0,
            loop: false,
            controls: false,
            mouseDrag: true,
            autoHeight: true,
            edgePadding: 100,
            fixedWidth: 300,
            startIndex: 1,
            responsive: {
                992: {
                    items: 3,
                    autoHeight: false,
                    center: true,
                    loop: true   
                },
                576: {
                    fixedWidth: 250,
                    edgePadding: 50
                },
                375: {
                    edgePadding: 80
                },
                320: {
                    fixedWidth: 222,
                    edgePadding: 50
                }
            }
        })
    }

    if(document.querySelector('.functional__content .functional-header .tabs__list') && window.innerWidth < 1200) {
        functionalTopTabs = tns({
            container: '.functional__content .functional-header .tabs__list',
            controlsContainer: '.functional__content .functional-header .tabs .tabs__arrows',
            items: 6,
            gutter: 0,
            loop: false,
            controls: true,
            mouseDrag: true,
            responsive: {
                992: {
                    items: 6, 
                },
                768: {
                    items: 4
                },
                // 576: {
                //     items: 3
                // },
                375: {
                    items: 3,
                },
                320: {
                    items: 1
                }
            }
        })
    }

    if(document.querySelector('.home-slider')) {
        // homeSlider = new Swiper('.home-slider', {
        //     slidesPerView: 3,
        //     speed: 400,
        //     spaceBetween: 119,
        //     loop: true,
        //     centeredSlides: true,
        //     height: 500,
        //     // slidesOffsetBefore: 119,
        //     // slidesOffsetAfter: 119,
        //     // loopedSlides: 3,
        //     autoHeight: true,
        //     on: {
        //         init(swiper) {
        //             const { $el } = swiper
        //             console.log(swiper)
        //             $el[0].classList.add('loaded')
        //         },
        //     },

        // })
        homeSlider = tns({
            container: '.home-slider',
            items: 3,
            gutter: 119,
            center: true,
            loop: true,
            slideBy: 'page',
            mouseDrag: true,
            edgePadding: 119,
            fixedWidth: 900,
            controls: false,
            speed: 1250,
            onInit({container}) {
                if(window.innerWidth > 992) {
                    container.classList.add('loaded')
                    container.closest('.tns-outer').classList.add('loaded')
                }
            },
            responsive: {
                1600: {
                    gutter: 119,
                    fixedWidth: 900,
                },
                1440: {
                    gutter: 85,
                    fixedWidth: 700,
                },
                1366: {
                    gutter: 65,
                    fixedWidth: 650,
                },
                1201: {
                    gutter: 50,
                    fixedWidth: 600,
                    center: true,
                    // axis: 'horizontal',
                },
                992: {
                    items: 2,
                    gutter: 0,
                    fixedWidth: false,
                    center: false,
                    edgePadding: 0,
                    axis: "vertical",
                },
                320: {
                    axis: "vertical",
                    gutter: 0,
                    edgePadding: 0,
                    center: false,
                    fixedWidth: false,
                    swipeAngle: false,
                }
            }
        })
    }

    if (overlayIntegrations) {
        overlayIntegrations.addEventListener("click", e => {
            const popupItems = document.querySelectorAll('.integrations-content__column .integrations-grid__item .integration-card-popup')
            popupItems.forEach(item => {
                if(item.classList.contains('active')) {
                    item.querySelectorAll('.tab-list .tab-list-item').forEach(item => item.classList.remove('active'))
                    item.querySelectorAll('.tab-content .tab-content-item').forEach(item => item.classList.remove('active'))
                    item.classList.remove('active')
                    item.previousElementSibling.previousElementSibling.classList.remove('active')
                    return
                }
            })
            overlayIntegrations.classList.remove('overlay-integrations--active')
        })
    }

    

    

    if(integrationsBtn.length) {
        // for(let i = 0; i < integrationsBtn.length; i++) {
        //     integrationsBtn[i].addEventListener("click", integrationModals)
        // }

        document.addEventListener('click', e => {
            if (e.target.closest('.btn-arrow')) {
                let parent = e.target.closest('.btn-arrow');
                integrationModals.call(parent);
            }
        })

        function integrationModals() {
            let currentPopupItem = this.parentElement.nextElementSibling.nextElementSibling,
                currentTabList = currentPopupItem.querySelectorAll('.tab-list .tab-list-item'),
                currentTabContentItems = currentPopupItem.querySelectorAll('.tab-content .tab-content-item'),
                timerId
            for(let j = 0; j < currentTabList.length; j++) {
                currentTabList[j].addEventListener('click', e => {
                    e.stopPropagation()
                    currentTabList.forEach(item => item.classList.remove('active'))
                    currentTabContentItems.forEach(item => item.classList.remove('active'))
                    currentTabList[j].classList.add('active')
                    currentTabContentItems[j].classList.add('active')
                })
            }
            if(!this.parentElement.classList.contains('active')) {
                overlayIntegrations.classList.add('overlay-integrations--active')
                this.parentElement.classList.add('active')
                currentPopupItem.classList.add('active')
                timerId = setTimeout(() => {
                    currentTabList[0].classList.add('active')
                    currentTabContentItems[0].classList.add('active')
                }, 100)
                currentPopupItem.scrollIntoView({block: "center", behavior: "smooth"});
            } else {
                this.parentElement.classList.remove('active')
                currentPopupItem.classList.remove('active')
                overlayIntegrations.classList.remove('overlay-integrations--active')
                currentTabList[0].classList.remove('active')
                currentTabContentItems[0].classList.remove('active')
                clearTimeout(timerId)
            }
        }
    }

    if(document.querySelectorAll('select').length) {
        for(let i = 0; i < document.querySelectorAll('select').length; i++) {
            new CustomSelect({
                elem: document.querySelectorAll('select')[i]
            })
        }
    }

    const scrollToScreen = () => {
        let currentSection = document.querySelectorAll('.main section')[0]
        let nextSection = document.querySelectorAll('.main section')[1]
        let bottomScroll = false
        let topScroll = false
        console.log(nextSection)
        if(document.querySelector('.banner') && !document.querySelector('.banner-wrapper')) {
            console.log('Banner wrapper false')
            document.documentElement.classList.add('not-scroll')
            document.body.classList.add('not-scroll')
            currentSection.addEventListener('wheel', (e) => {
                if(bottomScroll) {
                    e.stopPropagation()
                    e.preventDefault()
                    return
                }
                if(e.deltaY > 1 && bottomScroll === false) {
                    bottomScroll = true
                    document.documentElement.classList.remove('not-scroll')
                    document.body.classList.remove('not-scroll')
                    smoothScroll.animateScroll(nextSection, header, {
                        speed: 300, 
                        easing: 'Linear',
                        offset: () => header.offsetHeight + 20
                    })
                } 

            })
        }
    }

    // scrollToScreen()

    const Accordion = () => {
        let faqButtons = document.querySelectorAll('.faq__accordion .accordion__toggler .button')
        let faqButtonsTitle = document.querySelectorAll('.faq__accordion .accordion__content .caption')
        let faqContent = document.querySelectorAll('.faq__accordion .accordion__content .description')
        let faqContentContainer = document.querySelectorAll('.faq__accordion .accordion')
        let addClass = (el, classname) => el.classList.add(classname)
        let removeClass = (el, classname) => el.classList.remove(classname)
        let setAttributes = (el, height, desc, wrappers) => {
            desc.forEach(item => item.style.height = 0)
            wrappers.forEach(item => item.closest('.accordion').removeAttribute('data-expanded'))
            el.style.height = `${height}px`
            el.closest('.accordion').dataset.expanded = true
        }
        let toggleAccordion = (e, i) => {
            if(faqContent.length) {
                if(e.target.closest('.accordion').classList.contains('accordion--show')) { // if expanded
                    removeClass(e.target.closest('.accordion') , 'accordion--show')
                    setAttributes(faqContentContainer[i].querySelector('.description'), 0, faqContent, faqContentContainer)
                    return
                }
                faqContent.forEach(content => {
                    if(content.closest('.accordion').previousElementSibling === e.target.closest('.accordion') && !e.target.closest('.accordion').classList.contains('accordion--show')) {
                        removeClass(content.closest('.accordion') , 'accordion--show')
                        addClass(content.closest('.accordion').previousElementSibling , 'accordion--show')
                        setAttributes(faqContentContainer[i].querySelector('.description'), content.scrollHeight, faqContent, faqContentContainer)
                    } else {
                        removeClass(content.closest('.accordion'), 'accordion--show')
                        if(faqContent.length - 1 === i) { 
                            addClass(faqContentContainer[faqContent.length - 1], 'accordion--show')
                            setAttributes(faqContentContainer[faqContent.length - 1].querySelector('.description'), content.scrollHeight, faqContent, faqContentContainer)
                        }
                    }
                })
            }
        }

        if(faqButtons.length) {

            for(let i = 0; i < faqButtons.length; i++) {
                faqButtons[i].addEventListener('click', e => toggleAccordion(e, i))
                faqButtonsTitle[i].addEventListener('click', e => toggleAccordion(e, i))
            }

        }

        return
    }

    Accordion()

    const functionalSlider = (selector) => {
        if(document.querySelector(selector)) {
            let isDestroyed;
            let slider =  tns({
                container: selector,
                controlsContainer: '.functional__content .functional-body .tabs__content-tab.active .tab-column .functional-slider__arrows',
                items: 1,
                gutter: 35,
                loop: false,
                controls: true,
                nav: false,
                mouseDrag: true,
                onInit({ container }) {
                    container.classList.add('loaded')
                    container.closest('.tns-outer').classList.add('loaded')
                }
            })
        }
    }

    const switchTab = (index, tabs, content, activeClass, target = "") => {
        let tab = target !== "" ? target.closest('.tabs__list-item') : document.querySelectorAll('.functional__content .functional-header .tabs__list-item')[0]
        let init = false
        if( document.querySelectorAll(tabs).length || document.querySelectorAll(content).length ) {
            if( index === 0 ) {
                document.querySelectorAll(tabs)[index].classList.add(activeClass)
                document.querySelectorAll(content)[index].classList.add(activeClass)
                document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__item').forEach((item, index) => {
                    if( index === 0 ) {
                        item.classList.add(activeClass)
                        item.style.transitionDelay = `${index}s`
                    } else {
                        item.style.transitionDelay = `${index / 5}s`
                    }
                })
                setTimeout(() => {
                    document.querySelectorAll(content)[index].querySelector('.functional__content .tabs__content-tab.active .tablist').classList.add(activeClass)
                }, 0)

                if (document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__item')[index]) {
                    document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__item')[index].classList.add(activeClass)
                    document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body .tabs__content-tab .functional-slider__item')[index].classList.add(activeClass)
                }
                
            }
        }

        init = true

        if(tab) {
            document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body .tabs__content-tab .functional-slider__item').forEach(item => item.classList.remove(activeClass))
            document.querySelectorAll(tabs).forEach(tab => tab.classList.remove('active'))
            document.querySelectorAll(content).forEach(content => content.classList.remove('active'))
            document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__item').forEach((item, index) => {
                if( index === 0 ) {
                    item.classList.add(activeClass)
                    item.style.transitionDelay = `${index}s`
                } else {
                    item.classList.remove(activeClass)
                    item.style.transitionDelay = `${index / 10}s`
                }
            })

            if (document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body .tabs__content-tab .functional-slider__item')[0]) {
                document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body .tabs__content-tab .functional-slider__item')[0].classList.add(activeClass)
            }
            
            tab.classList.add(activeClass)
            document.querySelectorAll(content)[index].classList.add(activeClass)
            document.querySelectorAll(content)[index].querySelector('.functional__content .tabs__content-tab.active .tablist').classList.remove(activeClass)
            setTimeout(() => {
                document.querySelectorAll(content)[index].querySelector('.functional__content .tabs__content-tab.active .tablist').classList.add(activeClass)
            }, 0)
            if (document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active .functional-slider')) {
                var clone = document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active .functional-slider').cloneNode(true)
            }

            if (document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active')) {
                document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active').innerHTML = ""
                document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active').append(clone)
                functionalSlider('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active .functional-slider')
            }
            
            
            for(let i = 0; i < document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__item').length; i++) {
                document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__link')[i].addEventListener('click', function(e) {
                    e.stopPropagation()
                    e.preventDefault()
                    document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__item').forEach(item => item.classList.remove('active'))
                    document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body .tabs__content-tab .functional-slider__item').forEach(item => item.classList.remove('active'))
                    document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body__tabs .tablist__item')[i].classList.add(activeClass)
                    document.querySelectorAll(content)[index].querySelectorAll('.functional__content .functional-body .tabs__content-tab .functional-slider__item')[i].classList.add(activeClass)
                    let clone = document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active .functional-slider').cloneNode(true)
                    
                    if (document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active')) {
                        document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active').innerHTML = ""
                        document.querySelector('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active').append(clone)
                        functionalSlider('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active .functional-slider')
                    }
                    
                })
            }
        }

        return
    }

    // const ClientSlider = (slider, sliderArea) => {
    //     let { slideCount, container, items } = slider.getInfo()
    //     let canScroll = true

    //     console.log(slideCount, items)

    //     if(container.closest('.tns-outer').nextElementSibling.children.length) {
    //         if(items === slideCount) {
    //             container.closest('.tns-outer').nextElementSibling.children[0].setAttribute('disabled', '')
    //         }
    //         container.closest('.tns-outer').nextElementSibling.children[0].setAttribute('max', (slideCount - items) + 1)
    //         container.closest('.tns-outer').nextElementSibling.children[0].addEventListener('input', function() {
    //             let index = parseInt(this.value, 10) - 1
    //             slider.goTo(index)
    //         })
    //     }
    // }

    const stickyElem = (elem, wiki) => {
        let scrollTopElem = ( elem.offsetHeight / 3 ) - 22;
        
        if(wiki) {
            let wikiSales = document.querySelector('.main--wiki .sales');
            let wikiSalesOff = wikiSales.getBoundingClientRect().top + (pageYOffset / 2);

            elem.classList.add('header--sticky')

            if (document.scrollingElement.scrollTop == 0) {
                elem.classList.remove('header--sticky')
            }

            if(document.scrollingElement.scrollTop >= elem.offsetHeight * 6) {
                wikiSection.classList.add('scrolled')
                elem.classList.add('header--hidden')
                wiki.classList.add('wiki-banner--sticky');
                if (document.scrollingElement.scrollTop > wikiSalesOff) {
                    wiki.classList.add('wiki-banner--completed')
                    elem.classList.remove('header--hidden')
                } else {
                    wiki.classList.remove('wiki-banner--completed')
                    elem.classList.add('header--hidden')
                }
            } else {
                wikiSection.classList.remove('scrolled')
                wiki.classList.remove('wiki-banner--sticky')
                elem.classList.remove('header--hidden')
            }
        } else {
            if(document.scrollingElement.scrollTop >= scrollTopElem) {
                console.log(scrollTopElem)
                elem.classList.add('header--sticky')
            } else {
                elem.classList.remove('header--sticky')
            }
        }
    }

    // if(document.querySelector('.clients__slider')) {
    //     ClientSlider(clientsSlider, '.clients .tns-outer')
    // }

    switchTab(
        0, 
        '.functional__content .functional-header .tabs__list-item',
        '.functional__content .functional-body .tabs__content-tab',
        'active'
    )

    functionalSlider('.functional__content .functional-body .tabs__content-tab.active .functional-slider__wrapper .functional-slider__item.active .functional-slider')

    if(questionFormBtn) {
        questionFormBtn.addEventListener('click', () => {
            if(!questionFormBtn.classList.contains('active')) {
                questionFormBtn.classList.add('active')
                questionFormBody.classList.add('active')
                questionFormBody.scrollIntoView({block: "center", behavior: "smooth"});
            } else {
                questionFormBtn.classList.remove('active')
                questionFormBody.classList.remove('active')
            }
        })
    }

    if(functionalMainTabs.length || functionalMainContent.length) {
        for(let i = 0; i < functionalMainTabs.length; i++) {
            functionalMainTabs[i].addEventListener('click', ({ target }) => {
                switchTab(
                    i, 
                    '.functional__content .functional-header .tabs__list-item',
                    '.functional__content .functional-body .tabs__content-tab',
                    'active',
                    target
                )
            })
        }
    } 

    const benefitsSliderFunc = (selector, once) => {
        if(document.querySelector(selector) && window.innerWidth <= 1200) {
            let result = benefitsSlider !== undefined ? true : false

            if( result ) {
                once = false
                let cloneNodes = document.querySelector('.benefits__content-tabs .tablist__item.active .benefits-information__body').cloneNode(true)
                document.querySelector('.benefits__content-tabs .tablist__item.active .benefits-information__slider').innerHTML = ""
                document.querySelector('.benefits__content-tabs .tablist__item.active .benefits-information__slider').append(cloneNodes)
                benefitsSlider = tns({
                    container: '.benefits__content-tabs .tablist__item.active .benefits-information__body',
                    items: 2,
                    gutter: 20,
                    slideBy: 'page',
                    mouseDrag: true,
                    controls: false,
                    loop: false,
                    speed: 250,
                    responsive: {
                        992: {
                            items: 2,
                        },
                        576: {
                            items: 2,
                        },
                        320: {
                            items: 1,
                        }
                    }
                })
                document.querySelector('.benefits__content-tabs .tablist__item.active .benefits-information__range .range').addEventListener('input', function() {
                    let index = parseInt(this.value, 10) - 1
                    console.log(index)
                    benefitsSlider.goTo(index)
                })
                benefitsSlider.events.on('indexChanged', function (info, eventName) {
                    console.log('Next', info)
                    document.querySelector('.benefits__content-tabs .tablist__item.active .benefits-information__range .range').value = info.index + 1
                })
            }

            if ( once ) {
                console.log('Init')
                benefitsSlider = tns({
                    container: '.benefits__content-tabs .tablist__item .benefits-information__body',
                    items: 2,
                    gutter: 20,
                    slideBy: 'page',
                    mouseDrag: true,
                    controls: false,
                    loop: false,
                    speed: 250,
                    responsive: {
                        992: {
                            items: 2,
                        },
                        576: {
                            items: 2,
                        },
                        320: {
                            items: 1,
                        }
                    }
                })
                document.querySelector('.benefits__content-tabs .tablist__item.active .benefits-information__range .range').addEventListener('input', function() {
                    let index = parseInt(this.value, 10) - 1
                    console.log(index)
                    benefitsSlider.goTo(index)
                })
                benefitsSlider.events.on('indexChanged', function (info, eventName) {
                    console.log('Next', info)
                    document.querySelector('.benefits__content-tabs .tablist__item.active .benefits-information__range .range').value = info.index + 1
                })
            }

            console.log(result)

        }
    }

    if(benefitsTabList.length) {
        benefitsSliderFunc('.benefits__content-tabs .tablist__item.active .benefits-information__body', true)
        for(let i = 0; i < benefitsTabList.length; i++) {
            benefitsTabList[i].parentElement.querySelectorAll('.benefits__content-tabs .tablist__item .benefits-information__body .benefit').forEach((item, idx) => { 
                if( idx === 0 ) {
                    item.style.transitionDelay = "0s"
                } else {
                    item.style.transitionDelay = `${idx / 10}s`
                }
                if ( i === 0 ) {
                    item.classList.add('active')
                }
            })
            benefitsTabList[i].addEventListener('click', function(e) {
                e.preventDefault()
                document.querySelectorAll('.benefits__content-tabs .tablist__item').forEach(item => item.classList.remove('active'))
                document.querySelectorAll('.benefits__content-tabs .tablist__item .benefits-information .benefit').forEach(item => item.classList.remove('active'))
                this.parentElement.classList.add('active')
                benefitsSliderFunc('.benefits__content-tabs .tablist__item.active .benefits-information__body', false)
                benefitsTabList[i].parentElement.querySelectorAll('.benefits__content-tabs .tablist__item .benefits-information__body .benefit').forEach((item, idx) => { 
                    if( idx === 0 ) {
                        item.style.transitionDelay = "0s"
                    } else {
                        item.style.transitionDelay = `${idx / 10}s`
                    }
                    setTimeout(() => {
                        item.classList.add('active')
                    }, 100)
                })
            })
        }
    }

    /* Wiki */

    const wikiTabs = () => {
        let innerTabAnchors = (anchors) => {
            new SmoothScroll(anchors, {
                speed: 350,
                easing: 'Linear',
                offset: () => header.offsetHeight * 2.8
            })
        }
        let innerTabsItem = (links, items, innerContent) => {
            for(let i = 0; i < document.querySelectorAll(links).length; i++) {
                document.querySelectorAll(links)[i].addEventListener('click', e => {
                    e.preventDefault()
                    document.querySelectorAll(items).forEach(item => item.classList.remove('active'))
                    document.querySelectorAll(innerContent).forEach(item => item.classList.remove('active'))
                    document.querySelectorAll(links)[i].parentElement.classList.add('active')
                    document.querySelectorAll(innerContent)[i].classList.add('active')
                    innerTabAnchors('.wiki-content__inner-tab.active .anchors__link')
                })
            }
        }
        if(wikiTopTabItems.length) {
            for(let i = 0; i < wikiTopTabItems.length; i++) {
                wikiTopTabItems[i].addEventListener('click', () => {
                    wikiTopTabItems.forEach(item => item.classList.remove('active'))
                    document.querySelectorAll('.wiki-content__outer-tab').forEach(item => item.classList.remove('active'))
                    wikiTopTabItems[i].classList.add('active')
                    document.querySelectorAll('.wiki-content__outer-tab')[i].classList.add('active')
                    innerTabsItem('.wiki-content__outer-tab.active .sidebar__navigation .navlist__link', '.wiki-content__outer-tab.active .sidebar__navigation .navlist__item', '.wiki-content__outer-tab.active .wiki-content__inner-tab')
                    innerTabAnchors('.wiki-content__inner-tab.active .anchors__link')
                    window.innerWidth > 992 ? 
                        document.querySelectorAll('.wiki-content__outer-tab')[i].scrollIntoView({behavior: "smooth"})
                        : null;
                })
            }
            innerTabsItem('.wiki-content__outer-tab.active .sidebar__navigation .navlist__link', '.wiki-content__outer-tab.active .sidebar__navigation .navlist__item', '.wiki-content__outer-tab.active .wiki-content__inner-tab')
            innerTabAnchors('.wiki-content__inner-tab.active .anchors__link')
        }

        if(document.querySelector('.wiki-banner__top .wiki-tabs .tabs') && window.innerWidth <= 992) {
            tns({
                container: document.querySelector('.wiki-banner__top .wiki-tabs .tabs .tabs__list'),
                items: 5,
                gutter: 25,
                loop: false,
                controls: false,
                mouseDrag: true,
                autoHeight: true,
                responsive: {
                    768: {
                        items: 5,
                        gutter: 25,
                    },
                    576: {
                        items: 4,
                        gutter: 25,
                    },
                    375: {
                        items: 3,
                    },
                    320: {
                        items: 2,
                        gutter: 5,
                    }
                }
            })
        }
    }

    wikiTabs()

    class Banner {
        bannerActiveSlideClass = 'banner__content-item--active'
        disabledScollClass = 'not-scroll'
        banner = document.querySelector('.banner')
        bannerWrapper = document.querySelector('.banner-wrapper')
        bannerContentSlider = this.banner.querySelectorAll('.banner__content-item')
        bannerWidth = this.banner.offsetWidth

        constructor() {
            this.getCurrentStep = this.getCurrentStep.bind(this)
        }

        getCurrentStep() { return parseInt(this.banner.dataset.step, 10) }

        showCurrentSlide(index, activeIndex) { 
            this.bannerContentSlider[activeIndex].classList.remove(this.bannerActiveSlideClass)
            this.bannerContentSlider[index].classList.add(this.bannerActiveSlideClass)
        }

        checkCurrentStep() {
            if(this.getCurrentStep() < 2 && window.scrollY < 100) {
                document.documentElement.classList.add(this.disabledScollClass)
                document.body.classList.add(this.disabledScollClass)
            } else {
                document.documentElement.classList.remove(this.disabledScollClass)
                document.body.classList.remove(this.disabledScollClass)
            }
        }

        moveBanner() {
            switch(this.getCurrentStep()) {
                case 0:
                    this.banner.style.cssText = `left: 0; transform: translateX(0%);`
                    break;
                case 1:
                    this.banner.style.cssText = `left: 50%; transform: translateX(-50%);`
                    break;
                case 2:
                    this.banner.style.cssText = `left: 100%; transform: translateX(-${this.bannerWidth}px);`
                    break;
                default:
                    this.banner.style.cssText = `left: 0; transform: translateX(0%);`
                    return;
            }
        }

    }

    class Tabs extends Banner {
        activeClass = 'banner-pagination__item--active'
        activeIndex = 0
        initialCalled = false

        constructor(options) {
            super()
            this.tabs = options ? document.querySelectorAll(options.tabs) : {}
            this.init = this.init.bind(this)
            this.goToTab = this.goToTab.bind(this)
        }

        goToTab(index) {
            if(index !== this.activeIndex && index >= 0 && index <= this.tabs.length) {
                this.tabs[this.activeIndex].classList.remove(this.activeClass)
                this.tabs[index].classList.add(this.activeClass)
                this.showCurrentSlide(index, this.activeIndex)
                this.activeIndex = index
                this.banner.dataset.step = index
                this.moveBanner()
                this.checkCurrentStep()
            }
        }

        handleClick(tab, index) { 
            tab.addEventListener('click', () => {
                if(window.innerWidth > 992) {
                    let anchorSection = this.bannerWrapper.parentElement.nextElementSibling
                    this.goToTab(index) 
                    homeSlider.goTo(index)
                    // homeSlider.slideTo(index)
                    if(index === 2) {
                        setTimeout(() => { 
                            // smoothScroll.animateScroll(anchorSection, tab, {
                            //     speed: 200,
                            //     easing: 'Linear',
                            //     offset: () => header.offsetHeight + 20
                            // })
                            // stickyElem(header, wikiBanner)
                            this.checkCurrentStep()
                        }, 500)
                    }
                }
            }) 
        }

        handleSwipe() {
            if(window.innerWidth <= 1200) {
                homeContent.events.on('touchEnd', info => {
                    let { displayIndex } = info
                    let anchorSection = this.bannerWrapper.parentElement.nextElementSibling
                    if(displayIndex === 3) {
                        document.documentElement.classList.remove(this.disabledScollClass)
                        document.body.classList.remove(this.disabledScollClass)
                        smoothScroll.animateScroll(anchorSection, anchorSection, {
                            speed: 200,
                            easing: 'Linear',
                            offset: () => header.offsetHeight + 20
                        })
                        stickyElem(header, wikiBanner)
                    }
                }) 
            }
        }

        handleScroll(tab) {
            let timer
            this.bannerWrapper.addEventListener('wheel', e => {
                if(window.innerWidth > 992) {
                    let { deltaY } = e
                    let anchorSection = this.bannerWrapper.parentElement.nextElementSibling
                    if(document.body.classList.contains(this.disabledScollClass)) {
                        if(timer) {
                            e.preventDefault()
                            clearTimeout(timer)
                        }
                        timer = setTimeout(() => {
                            e.preventDefault()
                            if(this.activeIndex !== 2 && deltaY > 1) {
                                this.goToTab(this.activeIndex + 1)
                                homeSlider.goTo(this.activeIndex + 1)
                                // homeSlider.slideTo(this.activeIndex + 1)
                                console.log('activeIndex', this.activeIndex)
                            } 
    
                            if(this.activeIndex !== 2 && deltaY < 1) {
                                this.goToTab(this.activeIndex - 1)
                                homeSlider.goTo(this.activeIndex - 1)
                                // homeSlider.slideTo(this.activeIndex - 1)
                                console.log('activeIndex', this.activeIndex)
                            }
    
                            if(this.activeIndex === 3) {
                                setTimeout(() => { 
                                    smoothScroll.animateScroll(anchorSection, tab, {
                                        speed: 200,
                                        easing: 'Linear',
                                        offset: () => header.offsetHeight + 20
                                    })
                                    stickyElem(header, wikiBanner)
                                    this.checkCurrentStep()
                                }, 100)
                                console.log('activeIndex', this.activeIndex)
                            }

                        }, 150)
                    }
                }
            }) 
        }

        init() {
            let lenTabs = this.tabs.length;
            if(!this.initialCalled) {
                this.initialCalled = true;
                this.checkCurrentStep()
                for(let i = 0; i < lenTabs; i++) {
                    (i === this.activeIndex) && this.tabs[i].classList.add(this.activeClass)
                } 
                for(let i = 0; i < lenTabs; i++) {
                    this.handleClick(this.tabs[i], i)
                }
                this.handleScroll(this.tabs[2])
                this.showCurrentSlide(0, this.activeIndex)
                this.handleSwipe()
            }
        }
    }

    if(homeSection && window.innerWidth >= 1200) {

        /* *** init home main screen scroll animations *** */
        //new Tabs({tabs: ".banner-pagination__item"}).init();
    }

    if (hamburger) {
       hamburger.addEventListener('click', () => {
            if(!hamburger.classList.contains('hamburger--open')) {
                hamburger.classList.remove('hamburger--close')
                hamburger.classList.add('hamburger--open')
                menu.classList.add('menu--open')
                // document.documentElement.classList.add('not-scroll')
                // document.body.classList.add('not-scroll')
                overlay.classList.add('overlay--active')
                header.querySelector('.header__logo .logo').classList.add('brightness')
            } else {
                hamburger.classList.remove('hamburger--open')
                hamburger.classList.add('hamburger--close')
                menu.classList.remove('menu--open')
                document.documentElement.classList.remove('not-scroll')
                document.body.classList.remove('not-scroll')
                overlay.classList.remove('overlay--active')
                header.querySelector('.header__logo .logo').classList.remove('brightness')
            }
        }) 
    }

    

    document.addEventListener('click', ({ target }) => {
        if (document.querySelector('.header')) {        
            if(!target.closest('.header__hamburger') && !target.closest('.menu') && !target.closest('.banner-wrapper') && !target.closest('.banner-controls') && !target.closest('.search')) {
                menu.classList.remove('menu--open')
                hamburger.classList.remove('hamburger--open')
                overlay.classList.remove('overlay--active')
                header.querySelector('.header__logo .logo').classList.remove('brightness')
                if(sidebarSearchField.length) {
                    for(let i = 0; i < sidebarSearchField.length; i++) {
                        sidebarSearchField[i].closest('.search').classList.remove('shown')
                        sidebarSearchField[i].value = ""
                        sidebarSearchField[i].classList.remove('filled')
                        sidebarSearchField[i].setAttribute('readonly', '')
                    }
                }
                document.documentElement.classList.remove('not-scroll')
                document.body.classList.remove('not-scroll')
            }
        }
    })

    document.addEventListener('scroll', e => {
        stickyElem(header, wikiBanner)
    })

    if(sidebarSearchField.length) {
        for(let i = 0; i < sidebarSearchField.length; i++) {
            sidebarSearchField[i].addEventListener('click', function(e) {
                if(!this.closest('.search').classList.contains('shown')) {
                    this.removeAttribute('readonly')
                    this.closest('.search').classList.add('shown')
                    this.focus()
                } 
                
                // else {
                //     this.setAttribute('readonly', '')
                //     this.closest('.search').classList.remove('shown')
                // }
            })
    
            sidebarSearchField[i].addEventListener('input', function(e) {
                if(this.value.length >= 1) 
                    this.classList.add('filled')
                else
                    this.classList.remove('filled')
            })
        }

        for(let i = 0; i < clearSearchButton.length; i++) {
            clearSearchButton[i].addEventListener('click', function(e) {
                this.previousElementSibling.value = ""
                this.previousElementSibling.classList.remove('filled')
            })
        }
    }

    if (footerExpandBtn) {
        footerExpandBtn.addEventListener('click', () => {
            if(!footerExpandWrapper.classList.contains('active'))
                footerExpandWrapper.classList.add('active')
            else
                footerExpandWrapper.classList.remove('active')
        })
    }

    

    let numberField = document.querySelectorAll('.feedback__form .form input[name=tel], .subscribePage input[name=tel]')
    let maskOptions = {
        //mask: '+{38}(000)000-00-00'
        mask: '+000000000000'
    }
    if(numberField) {
        for(let i = 0; i < numberField.length; i++) {
            let masked = IMask(numberField[i], maskOptions);
            let defaultVal = '+';
            numberField[i].addEventListener('focus', () => {
                if (numberField[i].value == '') {
                    numberField[i].value = defaultVal;
                    masked.updateValue();
                }                
            });
            numberField[i].addEventListener('blur', () => {
                numberField[i].value == defaultVal ? numberField[i].value = '' : null;
            });
            
        }
    }

    if(zoomButton) {
        zoomButton.addEventListener('click', function() {
            basicLightbox.create(`
                <img width="100%" height="900" src="${this.previousElementSibling.src}">
            `).show()
        })
    }

    if(mobileSidebarBtn) {
        mobileSidebarBtn.addEventListener('click', () => {
            if(!mobileSidebarBtn.classList.contains('active')) {
                mobileSidebarBtn.classList.add('active')
                document.querySelector('.sidebar-wrapper__top').classList.add('active')
            } else {
                mobileSidebarBtn.classList.remove('active')
                document.querySelector('.sidebar-wrapper__top').classList.remove('active')
            }
        })
    }

    if(plansToggleButton.length) {
        for(let i = 0; i < plansToggleButton.length; i++) {
            plansToggleButton[i].addEventListener('click', () => {
                if(!plansToggleButton[i].classList.contains('active')) {
                    plansToggleButton[i].classList.add('active')
                    document.querySelector('.compare').classList.add('hidden')
                } else {
                    plansToggleButton[i].classList.remove('active')
                    document.querySelector('.compare').classList.remove('hidden')
                }
            })
        }
    }

    if(document.querySelector('.compare-table__col .compare-heading__tariffs') ) {
        document.querySelector('.compare-table__col .compare-heading__tariffs').addEventListener('touchmove', function() {
            console.log(this.scrollLeft)
            document.querySelector('.compare-table__wrapper').scrollLeft = this.scrollLeft
        })
    
        document.querySelector('.compare-table__wrapper').addEventListener('touchmove', function() {
            document.querySelector('.compare-table__col .compare-heading__tariffs').scrollLeft = this.scrollLeft 
        })
    }

    if(wikiLoaded) {
        setTimeout(() => wikiLoaded.classList.add('wiki-slider--loaded'), 0)
    }

    // const floatSidebar = new FloatSidebar({
    //     sidebar,
    //     relative,
    //     topSpacing: 40,
    //     bottomSpacing: 40
    // })

    // floatSidebar.forceUpdate()

    // if(stickyWrapperSidebar) {
    //     new StickySidebar(stickyWrapperSidebar, {
    //         containerSelector: '.sticky-wrapper',
    //         topSpacing: header.offsetHeight * 2.8,
    //     })

    //     new StickySidebar(wikiQuestionForm, {
    //         containerSelector: '.sticky-wrapper',
    //         topSpacing: ( header.offsetHeight * 5 ) + ( wikiQuestionForm.offsetHeight ) + 50
    //     })
    // }

})










// ajax

window.addEventListener('load', function() {

    const language = document.documentElement.getAttribute('lang'),
          timerWrap = document.querySelectorAll('.timer');

    // поиск по блогу
    function blogLiveSearch() {
        // var blog_search = document.querySelector('.articles input[name="search"]'); // поле поиска
        var blog_search = document.querySelectorAll('.articles input[name="search"], .blog input[name="search"]'); // поле поиска
        var blog_search_clear = document.querySelector('.articles button.clear'); // кнопка очистки поля поиска
        var art_wrap = document.querySelector('.articles-wrapper'); // обертка статей
        var arts_default = document.querySelector('.articles-wrapper').innerHTML; // сохранить исходный вывод статей
        var art_item = art_wrap.querySelector('.article'); // одна статья
        var art_clone = art_item.cloneNode(true); // клонирование статьи
        var blog_search_val; // в будущем сюда будет записан поисковый запрос
        var blog_empty = '<div class="article__notFound">По вашему запросу ничего не найдено!</div>'; // сообщение об ошибке
        var art_date = art_item.querySelector('.date').cloneNode(true); // клонирование блока с датой
        var pagination = document.querySelector('.pagination'); // обертка пагинации
        var pagination_default = document.querySelector('.pagination').innerHTML; // содержимое пагинации


        blog_search_clear.addEventListener('click', function(){
            // при очистке поиска вернуть исходный вывод статей и пагинацию
            art_wrap.innerHTML = arts_default;
            pagination.innerHTML = pagination_default;
        });

        blog_search.forEach(el => {
            el.addEventListener('keydown', function(){
            setTimeout(function(){
                blog_search_val = el.value;
                if (!blog_search_val == "") {

                    fetch('/search-blog?search='+blog_search_val)  
                    .then(  
                        function(response) {  
                            if (response.status !== 200) {  
                                console.log('Looks like there was a problem. Status Code: ' +  
                                    response.status);  
                                return;  
                            }

                            response.json().then(function(data) {
                                if (data.total > 0) { // если найдены статьи

                                    // собираем инфу в массивы
                                    var titles = [],
                                        slugs = [],
                                        previews = [],
                                        imgs = [],
                                        dates = [],
                                        cats = [];
                                    for(var i=0;i<data.to;i++) {
                                        if (data.data[i].status > 0) {
                                            titles[i] = data.data[i].title;
                                            slugs[i] = data.data[i].slug;
                                            previews[i] = data.data[i].preview;
                                            imgs[i] = data.data[i].image;
                                            dates[i] = data.data[i].updated_at;
                                            cats[i] = [];
                                            for(var a=0;a<data.data[i].categories.length;a++) {                                             
                                                cats[i][a] = data.data[i].categories[a].title;
                                            }
                                        }                                                   
                                    }   

                                    for (let b=0;b<data.to;b++) { // генерация статьи

                                        if (b == 0) { 
                                            art_wrap.innerHTML = ''; // убираем статьи перед генерацией новых
                                        }
                                        art_clone.querySelector('.marks').innerHTML = ''; // убираем вывод категорий одной статьи

                                        art_clone.querySelector('.caption h2 a').innerHTML = titles[b]; // подставляем заголовок
                                        art_clone.querySelector('.text p').innerHTML = previews[b]; // подставляем краткое описание
                                        art_clone.querySelector('.caption h2 a').setAttribute('href', '/blog/articles/'+slugs[b]); // подставляем ссылку
                                        art_clone.querySelector('.article__link').setAttribute('href', '/blog/articles/'+slugs[b]); // подставляем ссылку
                                        art_clone.querySelector('.picture').setAttribute('src', '/uploads/'+imgs[b]); // подставляем превью                                                                     
                                        

                                        for(var c=0;c<data.data[b].categories.length;c++) { // генерация категорий
                                            var cat_item = document.createElement("mark");
                                            cat_item.classList.add('mark');
                                            cat_item.innerHTML = data.data[b].categories[c].title;

                                            art_clone.querySelector('.marks').appendChild(cat_item);
                                        }

                                        // вывод даты публикации статьи
                                        art_date.querySelector('time').innerHTML = dates[b];
                                        art_clone.querySelector('.marks').appendChild( art_date.cloneNode(true) );

                                        art_wrap.appendChild( art_clone.cloneNode(true) ); // вывод сгенерированной статьи 
                                    }               
                                } else { // если по запросу статьи не найдены
                                    pagination.innerHTML = '';  // убрать пагинацию                 
                                    if (art_wrap.innerHTML != blog_empty) {
                                        art_wrap.innerHTML = blog_empty;    // вывод сообщения об ошибке                                    
                                    }                           
                                }
                            });  
                        }  
                        )  
                    .catch(function(err) {  
                        console.log('Fetch Error :-S', err);  
                    });
                } else { // если пустой запрос
                    // вернуть исходный контент и пагинацию
                    art_wrap.innerHTML = arts_default;
                    pagination.innerHTML = pagination_default;
                }
            }, 500);
        }); 
    });

            
    }


    // email subscribe
    function subscribe() {
        var subs = document.querySelector('.subscribe .button');
        var email = document.querySelector('.subscribe input[name="email"]');
        var email_block = document.querySelector('.subscribe .form');
        var email_msg = document.createElement("div");

        email_msg.classList.add('form__msg');
        email_block.appendChild(email_msg);

        subs.addEventListener('click', function(e){
            e.preventDefault();
            email_msg.innerHTML = '';

            fetch('/subscription?email='+email.value, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
            })  
            .then(  
                function(response) {
                    response.json().then(function(data) {
                        if (data.success === true) {
                            email_block.innerHTML = '<div class="form__msg">'+data.message+'</div>';
                        } else {
                            if (data.errors.email.length > 1) {                                                 
                                for(var i=0;i<data.errors.email.length;i++) {
                                    email_msg.appendChild(document.createElement("p")).innerHTML = data.errors.email[i];
                                }
                            } else {
                                email_msg.appendChild(document.createElement("p")).innerHTML = data.errors.email[0];
                            }

                        }
                    });  
                }  
                )  
            .catch(function(err) {  
                console.log('Fetch Error :-S', err);  
            });
        });
    }


    //callback
    function callback() {
        var call = document.querySelector('.feedback .button');
        var call_form = document.querySelector('.feedback .form');

        var call_msg = document.createElement("div");

        call_msg.classList.add('form__msg', 'form__msg--callback');
        call_form.appendChild(call_msg);

        call.addEventListener('click', function(e){
            e.preventDefault();
            var call_body = 'name='+call_form.querySelector('input[name="name"]').value+'&email='+call_form.querySelector('input[name="email"]').value+'&tel='+call_form.querySelector('input[name="tel"]').value;
            call_msg.innerHTML = '';

            fetch('/feedback?'+call_body, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            })  
            .then(  
                function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                        if (data.success === true) {
                            call_form.innerHTML = '<div class="form__msg">'+data.message+'</div>';
                        } else {
                            if (data.errors.email) {
                                call_msg.appendChild(document.createElement("p")).innerHTML = data.errors.email[0];
                            }
                            if (data.errors.name) {
                                call_msg.appendChild(document.createElement("p")).innerHTML = data.errors.name[0];
                            }
                            if (data.errors.tel) {
                                call_msg.appendChild(document.createElement("p")).innerHTML = data.errors.tel[0];
                            }

                        }
                    });  
                }  
                )  
            .catch(function(err) {  
                console.log('Fetch Error :-S', err);  
            });
        });
    }


    //contacts page form
    function contactsForm() {
        var cont = document.querySelector('.contacts__form .button');
        var cont_form = document.querySelector('.contacts__form .form');
        

        var cont_msg = document.createElement("div");

        cont_msg.classList.add('form__msg', 'form__msg--cont');
        cont_form.appendChild(cont_msg);

        cont.addEventListener('click', function(e){
            e.preventDefault();
            var cont_body = 'name='+cont_form.querySelector('input[name="name"]').value+'&email='+cont_form.querySelector('input[name="email"]').value+'&question='+cont_form.querySelector('textarea[name="message"]').value+'&message='+cont_form.querySelector('select[name="question"]').value;
            cont_msg.innerHTML = '';

            fetch('/addSupportRequest?'+cont_body, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
            })  
            .then(  
                function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                        if (data.success === true) {
                            cont_form.innerHTML = '<div class="form__msg form__msg--cont form__msg--center">'+data.message+'</div>';
                        } else {
                            if (data.errors.email) {
                                cont_msg.appendChild(document.createElement("p")).innerHTML = data.errors.email[0];
                            }
                            if (data.errors.name) {
                                cont_msg.appendChild(document.createElement("p")).innerHTML = data.errors.name[0];
                            }

                        }
                    });  
                }  
                )  
            .catch(function(err) {  
                console.log('Fetch Error :-S', err);  
            });
        });
    }


    //question form
    function questionForm() {
        var quest = document.querySelector('.question-form .button');
        var quest_form = document.querySelector('.question-form .form');
        

        var quest_msg = document.createElement("div");

        quest_msg.classList.add('form__msg', 'form__msg--quest');
        quest_form.appendChild(quest_msg);

        quest.addEventListener('click', function(e){
            e.preventDefault();
            var quest_body = 'name='+quest_form.querySelector('input[name="name"]').value+'&email='+quest_form.querySelector('input[name="email"]').value+'&message='+quest_form.querySelector('textarea[name="message"]').value;
            quest_msg.innerHTML = '';

            fetch('/addSupportRequest?'+quest_body, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
            })  
            .then(  
                function(response) {
                    response.json().then(function(data) {
                        console.log(data);
                        if (data.success === true) {
                            quest_form.innerHTML = '<div class="form__msg form__msg--quest">'+data.message+'</div>';
                        } else {
                            if (data.errors.email) {
                                quest_msg.appendChild(document.createElement("p")).innerHTML = data.errors.email[0];
                            }
                            if (data.errors.name) {
                                quest_msg.appendChild(document.createElement("p")).innerHTML = data.errors.name[0];
                            }
                            if (data.errors.message) {
                                quest_msg.appendChild(document.createElement("p")).innerHTML = data.errors.message[0];
                            }

                        }
                    });  
                }  
                )  
            .catch(function(err) {  
                console.log('Fetch Error :-S', err);  
            });
        });
    }



    // wiki search
    function wikiSearch() {
        var wiki_search = document.querySelector('.wiki input[name="search"]'); // поле поиска
        var wiki_search_clear = document.querySelector('.wiki button.clear'); // кнопка очистки поля поиска
        var wiki_wrap = document.querySelector('.wiki-content__outer'); // обертка статей
        var wiki_default = wiki_wrap.innerHTML; // сохранить исходный вывод статей
        var wiki_item = wiki_wrap.querySelector('.wiki-content__outer-tab'); // одна статья
        var wiki_clone = wiki_item.cloneNode(true); // клонирование статьи
        var wiki_search_val; // в будущем сюда будет записан поисковый запрос
        var wiki_empty = '<div class="article__notFound">По вашему запросу ничего не найдено!</div>'; // сообщение об ошибке
        var wiki_navItem = document.querySelector('.wiki-content .navlist .navlist__item'); // пункт навигации
        var wiki_navItem_clone = wiki_navItem.cloneNode(true); // клонирование пункта навигации
        var wiki_anchorItem = document.querySelector('.wiki-content .anchors .anchors__item'); // якорь
        var wiki_anchorItem_clone = wiki_anchorItem.cloneNode(true); // клонирование якоря
        var wiki_featureItem = document.querySelector('.wiki-content .benefits-grid .benefit'); // преимущество
        var wiki_featureItem_clone = wiki_featureItem.cloneNode(true); // клонирование преимущества

        wiki_search_clear.addEventListener('click', function(){
            // при очистке поиска вернуть исходный вывод статей и пагинацию
            wiki_wrap.innerHTML = wiki_default;
        });

        wiki_search.addEventListener('keydown', function(){
            setTimeout(function(){
                wiki_search_val = wiki_search.value;
                if (!wiki_search_val == "") {

                    fetch('/search-wiki?search='+wiki_search_val)  
                    .then(  
                        function(response) {  
                            if (response.status !== 200) {  
                                console.log('Looks like there was a problem. Status Code: ' +  
                                    response.status);  
                                return;  
                            }

                            response.json().then(function(data) {
                                if (data.length > 0) { // если по запросу найдены статьи

                                    for (var b=0;b<data.length;b++) { // ГЕНЕРАЦИЯ СТАТЕЙ

                                        // очищаем контент перед генерацией нового
                                        if (b == 0) {                                           
                                            wiki_wrap.innerHTML = ''; // убираем статьи перед генерацией новых                                      
                                        }
                                        wiki_clone.querySelector('.navlist').innerHTML = ''; // убираем ссылки в сайдбаре
                                        wiki_clone.querySelector('.anchors .anchors__list').innerHTML = ''; // убираем ссылки якоря над заголовком
                                        wiki_clone.querySelector('.benefits-grid').innerHTML = ''; // удаляем список преимуществ

                                        wiki_clone.querySelector('.information__title h2').innerHTML = data[b].title; // выводим заголовок статьи
                                        wiki_clone.querySelector('.information__content').innerHTML = data[b].content; // выводим контент статьи

                                        for (let c=0;c<data.length;c++) { // генерируем ссылки в сайдбар
                                            wiki_navItem_clone.querySelector('.navlist__link-text').innerHTML = data[c].title;

                                            wiki_clone.querySelector('.navlist').appendChild( wiki_navItem_clone.cloneNode(true) );
                                        }

                                        
                                        if (data[b].anchors != null) { // если у статьи есть якоря
                                            for (let c=0;c<Object.keys(data[b].anchors).length;c++) { // генерация якорей
                                                wiki_anchorItem_clone.querySelector('.anchors__link').innerHTML = Object.values(data[b].anchors)[c].title;
                                                wiki_anchorItem_clone.querySelector('.anchors__link').setAttribute('href', '#'+Object.values(data[b].anchors)[c].id);

                                                wiki_clone.querySelector('.anchors .anchors__list').appendChild( wiki_anchorItem_clone.cloneNode(true) );
                                            }
                                        }

                                        if (data[b].features.length > 0) { // если у статьи есть преимущества 
                                            for (let c=0;c<data[b].features.length;c++) { // генерация преимуществ
                                                wiki_featureItem_clone.querySelector('.benefit__title').innerHTML = data[b].features[c].title;
                                                wiki_featureItem_clone.querySelector('.benefit__description').innerHTML = data[b].features[c].preview;
                                                wiki_featureItem_clone.querySelector('.benefit__buttons .button_link').setAttribute('href', data[b].features[c].slug);
                                                wiki_featureItem_clone.querySelector('.benefit__picture .picture').setAttribute('src', '/uploads/'+data[b].features[c].preview_image);

                                                wiki_clone.querySelector('.benefits-grid').appendChild( wiki_featureItem_clone.cloneNode(true) );
                                            }
                                        }

                                        // отмечаем активным таб первой статьи, остальные скрыты
                                        wiki_clone.classList.remove('active');
                                        if (b == 0) {
                                            wiki_clone.classList.add('active');
                                        }               
                                        
                                        
                                        // вывод сгенерированной статьи
                                        wiki_wrap.appendChild( wiki_clone.cloneNode(true) );
                                    }

                                } else { // если ничего не найдено выводим сообщение об ошибке
                                    if (wiki_wrap.innerHTML != wiki_empty) {
                                        wiki_wrap.innerHTML = wiki_empty;                                       
                                    }
                                }
                            });  
                        }  
                        )  
                    .catch(function(err) {  
                        console.log('Fetch Error :-S', err);  
                    });
                } else {
                    wiki_wrap.innerHTML = wiki_default; // при пустом запросе возвращаем исходный контент
                }
            }, 500);
        });     
    }


    // integration search
    function intSearch() {
        let inp = document.querySelector('.integrations-content input[name="search"]');
        let itemsWrap = document.querySelector('.integrations-content .integrations-grid');
        let navWrap = document.querySelector('.integrations-content .pagination__list');
        let search_timer;
        let search_timer_delay = 400; // delay for send requests
        let rootDir = './uploads/';

        inp.addEventListener('input', e => {
            clearTimeout(search_timer);
		    search_timer = setTimeout(request, search_timer_delay);
        })

        function request() {
            let val = inp.value;
            fetch('./search-integrations?search='+val)
                .then(response => response.json())
                .then(data => {
                    if (data.data.length > 0) {
                        itemsWrap.innerHTML = '';
                        navWrap.classList.remove('pagination__list--hidden');

                        /* generate items */
                        data.data.forEach(item => {                            
                            let elem = document.createElement('div');
                            let content = `
                                <div class="integration-card">                            
                                    <div class="integration-card-picture">
                                        <img src="${rootDir}${item.image}" alt="Picture" />
                                    </div>                            
                                    <div class="integration-card-arrow">
                                        <button class="btn-arrow" type="button">
                                        <svg class="arrow">
                                            <use xlink:href="./images/svg/sprite/sprite.svg#arrow"></use>
                                        </svg>
                                        </button>
                                    </div>                            
                                    <div class="integration-card-content">
                                        <div class="caption">
                                        <h2>${item.title}</h2>
                                        </div>
                                        <div class="description">
                                        ${item.preview}
                                        </div>
                                    </div>                            
                                    <div class="integration-card-popup">
                                        <div class="picture">                            
                                            <img src="${rootDir}${item.image}" alt="Picture" />                            
                                            <div class="integration-card-arrow">
                                                <button class="btn-arrow" type="button">
                                                <svg class="arrow">
                                                    <use xlink:href="./images/svg/sprite/sprite.svg#arrow"></use>
                                                </svg>
                                                </button>
                                            </div>                            
                                        </div>                            
                                        <div class="caption">
                                            <h2>${item.title}</h2>
                                        </div>                            
                                        <div class="tab-list">
                                            <div class="tab-list-item">${data.headers.description}</div>
                                            <div class="tab-list-item">${data.headers.install}</div>
                                            <div class="tab-list-item">${data.headers.versions}</div>
                                        </div>                            
                                        <div class="tab-content">
                                            <div class="tab-content-item">
                                                <div class="description">${item.description}</div>
                                            </div>
                                            <div class="tab-content-item">
                                                <div class="description">${item.version}</div>
                                            </div>
                                            <div class="tab-content-item">
                                                <div class="description">${item.install}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;                                                
                            
                            elem.classList.add('integrations-grid__item');
                            elem.innerHTML = content;
                            itemsWrap.append(elem);                            
                        })
                        /* *** */   


                    } else {
                        navWrap.classList.add('pagination__list--hidden');
                        itemsWrap.innerHTML = data.message;
                    }
                })
                .catch(e => console.log(e))
        }
    }

    // проверка на существование селектора и запуск функции
    function checkErrors(sel, func) {
        let bl = document.querySelector(sel);
        if (bl != null) {
            func();
        }
    }
    checkErrors('.articles-wrapper', blogLiveSearch);
    checkErrors('.subscribe .form', subscribe);
    checkErrors('.question-form .form', questionForm);
    checkErrors('.contacts__form .form', contactsForm);
    checkErrors('.feedback .form', callback);
    checkErrors('.wiki-content__outer', wikiSearch);
    checkErrors('.integrations-content', intSearch);
    checkErrors('.subscribePage', subscribeFetchNew);




    // share facebook and telegram
    if (document.querySelector('.social-list__link--facebook') != null) {
        document.querySelector('.social-list__link--facebook').addEventListener('click', function(e){
            e.preventDefault();
            window.open('https://www.facebook.com/sharer/sharer.php?u='+document.location.href, '_blank');
        })
    }
    if (document.querySelector('.social-list__link--telegram') != null) {
        document.querySelector('.social-list__link--telegram').addEventListener('click', function(e){
            e.preventDefault();
            window.open('https://telegram.me/share/url?url='+document.location.href, '_blank');
        })
    }



    /* *** subscribe ajax form *** */

    function subscribeFetch() {
        let sbm = document.querySelector('.subscribePage__form button');
        let form = document.querySelector('.subscribePage__form');
        let errors_area = document.querySelector('.subscribePage__errors');
        let csrd = document.querySelector('meta[name="csrf-token"]');
        var token;
        if (csrd) {
            token = csrd.getAttribute('content') || 'qwerty';
        } else {
            token = 'qwerty';
        }

        sbm.addEventListener('click', e => {
            e.preventDefault();
            form.classList.add('subscribePage__form--loading');
            errors_area.innerHTML = "";

            fetch('/service-subscription', {
                method: 'POST',
                body: new FormData(form),
                headers: 
                    {
                        'X-CSRF-TOKEN': token
                    },
                })
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    for (let err in data.errors) {
                        data.errors[err].forEach(error => {
                            let error_msg = document.createElement('p');
                            error_msg.innerHTML = error;
                            errors_area.append(error_msg);
                        })
                    }
                } else {
                    form.reset();
                    errors_area.innerHTML = `<p>${data.message}</p>`;
                }
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                form.classList.remove('subscribePage__form--loading');
            })
        });
    }

    function subscribeFetchNew() {
		let sbm = document.querySelector('.subscribePage__form button');
		let form = document.querySelector('.subscribePage__form');
		let errors_area = document.querySelector('.subscribePage__errors');
		let csrd = document.querySelector('meta[name="csrf-token"]');
		var token;
		if (csrd) {
			token = csrd.getAttribute('content') || 'qwerty';
		} else {
			token = 'qwerty';
		}

		sbm.addEventListener('click', e => {
			e.preventDefault();
			form.classList.add('subscribePage__form--loading');
			errors_area.innerHTML = "";

			fetch('/service-subscription', {
				method: 'POST',
				body: new FormData(form),
				headers: 
				{
					'X-CSRF-TOKEN': token
				},
			})
			.then(response => response.json())
			.then(data => {

				let rows = document.querySelectorAll('.subscribePage__row');
				rows.forEach(el => {
					el.classList.remove('subscribePage__row--error', 'subscribePage__row--success');
				})

				if (!data.success) {

					if (data.errors.email) {
						document.querySelector(`.subscribePage__row[data-row=email]`).classList.add('subscribePage__row--error');
					} else {
						document.querySelector(`.subscribePage__row[data-row=email]`).classList.add('subscribePage__row--success');
					}

					if (data.errors.name) {
						document.querySelector(`.subscribePage__row[data-row=name]`).classList.add('subscribePage__row--error');
					} else {
						document.querySelector(`.subscribePage__row[data-row=name]`).classList.add('subscribePage__row--success');
					}

					if (data.errors.tel) {
						document.querySelector(`.subscribePage__row[data-row=tel]`).classList.add('subscribePage__row--error');
					} else {
						document.querySelector(`.subscribePage__row[data-row=tel]`).classList.add('subscribePage__row--success');
					}

				} else {
					form.reset();
					errors_area.innerHTML = `<p>${data.message}</p>`;
				}
			})
			.catch(e => {
				console.log(e);
			})
			.finally(() => {
				form.classList.remove('subscribePage__form--loading');
			})
		});
	}






    try {
        const wikiSwiper = new Swiper(".wiki-tabs .tabs", {
            slidesPerView: 8,
            spaceBetween: 10,
            watchOverflow: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            observer: true,
            observeParents: true,
            slideVisibleClass: 'swiper-slide-visible',
            breakpoints: {
                0: {
                  slidesPerView: 4
                },
                768: {
                  slidesPerView: 5
                },
                992: {
                  slidesPerView: 6
                },
                1900: {
                    slidesPerView: 8
                }
            },
        });

        const functionsSwiper = new Swiper(".functional-header .tabs", {
            slidesPerView: 8,
            spaceBetween: 10,
            watchOverflow: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            observer: true,
            observeParents: true,
            slideVisibleClass: 'swiper-slide-visible',
            breakpoints: {
                0: {
                  slidesPerView: 4
                },
                768: {
                  slidesPerView: 5
                },
                992: {
                  slidesPerView: 6
                },
                1900: {
                    slidesPerView: 6
                }
            },
        });
    }
    catch (e) {
        console.log(e);
    }

    




    /* *** Timer *** */

    class Timer {
        constructor(obj) {
            obj.root ? this.root = obj.root : this.root = document.documentElement;
            obj.days ? this.days = this.root.querySelector(obj.days) : this.days = this.root.querySelector('.timer__days');
            obj.hours ? this.hours = this.root.querySelector(obj.hours) : this.hours = this.root.querySelector('.timer__hours');
            obj.minuts ? this.minuts = this.root.querySelector(obj.minuts) : this.minuts = this.root.querySelector('.timer__minutes');
            obj.seconds ? this.seconds = this.root.querySelector(obj.seconds) : this.seconds = this.root.querySelector('.timer__seconds');           
            obj.lang ? this.lang = obj.lang : this.lang = 'ru';
            obj.time ? this.time = obj.time : this.time = 1234567;
            this.interval;
            this.days && this.hours && this.minuts && this.seconds ? this.start() : console.log('timer is not initialized');
        }

        render(){
            let d = Math.floor(this.time / (3600*24));
            let h = Math.floor(this.time % (3600*24) / 3600);
            let m = Math.floor(this.time % 3600 / 60);
            let s = Math.floor(this.time % 60);

            let d_words = {
                uk: ['днів', 'дня', 'день'],
                en: ['days', 'days', 'day'],
                ru: ['дней', 'дня', 'день']
            };
            let h_words = {
                uk: ['годин', 'години', 'година'],
                en: ['hours', 'hours', 'hour'],
                ru: ['часов', 'часа', 'час']
            };
            let m_words = {
                uk: ['хвилин', 'хвилини', 'хвилина'],
                en: ['minutes', 'minutes', 'minute'],
                ru: ['минут', 'минуты', 'минута']
            };
            let s_words = {
                uk: ['секунд', 'секунди', 'секунда'],
                en: ['seconds', 'seconds', 'second'],
                ru: ['секунд', 'секунды', 'секунда']
            };

            insert(this.days, d, getLabels(d, d_words, this.lang))
            insert(this.hours, h, getLabels(h, h_words, this.lang))
            insert(this.minuts, m, getLabels(m, m_words, this.lang))
            insert(this.seconds, s, getLabels(s, s_words, this.lang))
    
            function getLabels(time, words, lang = 'ru') {
                let value = Math.abs(time) % 100; 
                let num = value % 10;
                if(value > 10 && value < 20) {
                    if (lang == 'uk') {
                        return words.uk[0];
                    } else if (lang == 'en') {
                        return words.en[0];
                    } else {
                        return words.ru[0];
                    }
                } else if (num > 1 && num < 5) {
                    if (lang == 'uk') {
                        return words.uk[1];
                    } else if (lang == 'en') {
                        return words.en[1];
                    } else {
                        return words.ru[1];
                    }
                } else if (num == 1) {
                    if (lang == 'uk') {
                        return words.uk[2];
                    } else if (lang == 'en') {
                        return words.en[2];
                    } else {
                        return words.ru[2];
                    }
                } else {
                    if (lang == 'uk') {
                        return words.uk[0];
                    } else if (lang == 'en') {
                        return words.en[0];
                    } else {
                        return words.ru[0];
                    }
                }
            }
            function insert(el, val, label) {
                let state = el.querySelector('.timer__value');
                let lab = el.querySelector('.timer__label');
                state.innerHTML = val;
                lab.innerHTML = label;
            }
        }
        start(){
            this.render();
            this.interval = setInterval(() => {
                this.tick();
            }, 1000);
        }
        tick(){
            this.time--;
            this.render();
            if (this.time < 1) {
                clearInterval(this.interval);
            }
        }
    }


    if (timerWrap.length) {
        timerWrap.forEach(el => {
            let timer_time = parseInt(el.dataset.time);
            new Timer({
                root: el,
                time: timer_time,
                lang: language
            });
        })
    }


});