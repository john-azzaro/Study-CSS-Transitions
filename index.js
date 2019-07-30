'use strict';

function backgroundChange() {                             // when backgroundChange runs...
    if(window.scrollY > window.innerHeight / 4) {           // if the user scroll is greater than the inner height of the window (divided by 4 so it changes at a lter point in the scoll)
        $('body').addClass('background-active');             // add class "background-active" which will add a white color instead of the gradient.
    } else {                                              // if the user scrolls back up...
        $('body').removeClass('background-active');         // remove the white background color.
    }         
}

function handleScroll() {                                 // for the scroll listener...
    $(window).on('scroll', backgroundChange)                         // if anywhere in the window the user scrolls, run backgroundChange
}

function setupEventListeners() {                           // In this case, we have only one event listener (i.e. when the user scrolls up or down)
    handleScroll();
}

function initialize() {                                    // on initialization, setup event listeners...
    setupEventListeners();
}

$(initialize)                                              // Initialize the app...


