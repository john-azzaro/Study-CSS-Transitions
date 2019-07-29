





// function bgChanger() {
//     if(this.scrollY > this.innerHeight / 2) {
//         console.log('this triggers me');
//        $('body').addClass("bg-active");
//     }
// }

// window.addEventListener("scroll", bgChanger);


'use strict';

function bgChanger() {                
    if(window.scrollY > window.innerHeight / 2) {
        $('body').addClass('bg-active');
    } else {
        $('body').removeClass('bg-active');
    }         
}

function handleScroll() {
    $(window).on('scroll', bgChanger)
}

function setupEventListeners() {
    handleScroll();
}

function initialize() {
    setupEventListeners();
}

$(initialize)


