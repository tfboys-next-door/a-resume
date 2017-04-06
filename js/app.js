'use strict';

window.addEventListener('resize', setPosition);

var centerImg = document.getElementById('centerImg');
var rightSide = document.getElementById('rightSide');
var leftSide = document.getElementById('leftSide');
var hamburgerButton = document.getElementById('hamburgerButton');
var introContainer = document.getElementById('introContainer');
var navigations = document.getElementById('navigations');

var isNavigationShow = false;

function setPosition() {
    introContainer.style.marginLeft = ((centerImg.offsetLeft + centerImg.offsetWidth - rightSide.offsetLeft + 40) / rightSide.offsetWidth) * 100 + '%';
}

window.addEventListener('load', setPosition);

hamburgerButton.addEventListener('click', function () {
    if (isNavigationShow == false) {
        navigations.classList.add('fadeShow');
        hamburgerButton.classList.add('show');
        navigations.classList.remove('hide');
        setTimeout(function () {
            navigations.classList.remove('fadeShow');
        }, 800);
        isNavigationShow = true;
    } else {
        navigations.classList.add('fadeOut');
        hamburgerButton.classList.remove('show');
        navigations.classList.add('hide');
        setTimeout(function () {
            navigations.classList.remove('fadeOut');
        }, 800);
        isNavigationShow = false;
    }
})