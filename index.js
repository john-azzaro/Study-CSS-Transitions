'use strict';

function bgChanger() {                                    // When bgChanger runs...
    if(this.scrollY) {                                       //  if the window is scrolling vertically... note here that you can use either "window" or "this" but since this function is connected to handleScroll, we already know we are working with window.

    }
}

function handleScroll() {                                 // In the case of the the handleScroll event listener...
    $(window).on('scroll', bgChanger)                      // if there is a scroll in the window, run bgChanger.
}

function setupEventListeners() {                           // setup your event listeners, in this case what we are listening for is the user scrolling
    handleScroll();
}

function initialize() {                                     // the only initialization we have is setting up an event listener for the scroll.
    setupEventListeners();
}

$(initialize)                                              // intialize the app
