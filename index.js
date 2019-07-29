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


