'use strict';

// For a smooth animation.

var animationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
        return setTimeout(callback, 50 / 3);
    };


var cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    clearTimeout;

var requestId;

// DOM Elements.

var parallaxBackground = document.getElementById('parallaxBackground');
var education = document.getElementById('education');
var navigation = document.getElementById('navigation');


// Setup all the animations.

(function scrollAnimation() {
    function scroll() {
        if (window.scrollY < document.body.clientHeight) {
            parallaxBackground.style.transform =
                'translateY(-' + window.scrollY / document.body.clientHeight * 10 + '%)';
            if (navigation.classList.contains('fixed')) {
                navigation.classList.remove('fixed');
            }
        } else if (window.scrollY >= education.scrollTop) {
            navigation.classList.add('fixed');
        }
        requestId = animationFrame(scroll);
    }
    requestId = animationFrame(scroll);
})()