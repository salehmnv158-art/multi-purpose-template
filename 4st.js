let navbarlink = document.querySelector('.navbar-link');
navbarlink.addEventListener('mouseenter',()=>{
    navbarlink.classList.add('navbar-link-active')
    navbarlink.classList.remove('navbar-link-passive')
})
navbarlink.addEventListener('mouseleave',()=>{
    navbarlink.classList.remove('navbar-link-active')
    navbarlink.classList.add('navbar-link-passive')
})

let navscrservice = document.querySelector('.navscr-link-services');
navscrservice.addEventListener('mouseenter',()=>{
    navscrservice.classList.add('navscr-link-services-active')
    navscrservice.classList.remove('navscr-link-services-passive')
})
navscrservice.addEventListener('mouseleave',()=>{
    navscrservice.classList.remove('navscr-link-services-active')
    navscrservice.classList.add('navscr-link-services-passive')
})

let navscrabout = document.querySelector('.navscr-link-about');
navscrabout.addEventListener('mouseenter',()=>{
    navscrabout.classList.add('navscr-link-about-active')
    navscrabout.classList.remove('navscr-link-about-passive')
})
navscrabout.addEventListener('mouseleave',()=>{
    navscrabout.classList.remove('navscr-link-about-active')
    navscrabout.classList.add('navscr-link-about-passive')
})

let serviceslink = document.querySelector('.services-link');
serviceslink.addEventListener('mouseenter',()=>{
    serviceslink.classList.add('services-link-active')
    serviceslink.classList.remove('services-link-passive')
})
serviceslink.addEventListener('mouseleave',()=>{
    serviceslink.classList.remove('services-link-active')
    serviceslink.classList.add('services-link-passive')
})

let calllink = document.querySelector('.call-link');
calllink.addEventListener('mouseenter',()=>{
    calllink.classList.add('call-link-active')
    calllink.classList.remove('call-link-passive')
})
calllink.addEventListener('mouseleave',()=>{
    calllink.classList.remove('call-link-active')
    calllink.classList.add('call-link-passive')
})


let altbarsame = document.querySelectorAll('.alt-bar-same');

for (let i = 0; i < altbarsame.length; i++) {
    altbarsame[i].addEventListener('mouseenter',()=>{
        altbarsame[i].classList.add('alt-bar-active')
        altbarsame[i].classList.remove('alt-bar-passive')
    })
    altbarsame[i].addEventListener('mouseleave',()=>{
        altbarsame[i].classList.remove('alt-bar-active')
        altbarsame[i].classList.add('alt-bar-passive')
    })
}

let altbar = document.querySelector('.alt-bar')
let altactbtn = document.querySelector('.altbar-activate-button')
let altdeactbtn = document.querySelector('.altbar-deactivate-button')

altactbtn.addEventListener('click', ()=>{
    altactbtn.classList.add('display-none');
    altdeactbtn.classList.remove('display-none');
    altbar.classList.remove('display-none');
})

altdeactbtn.addEventListener('click', ()=>{
    altdeactbtn.classList.add('display-none');
    altactbtn.classList.remove('display-none');
    altbar.classList.add('display-none');
})