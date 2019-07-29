'use strict';

function bgChanger() {
    console.log('working')
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
