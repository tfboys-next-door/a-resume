'use strict';

window.addEventListener('resize', setPosition);

var introImg = document.getElementById('introImg');
var skillImg = document.getElementById('skillImg');
var experienceImg = document.getElementById('experienceImg');
var rightSide = document.getElementById('rightSide');
var leftSide = document.getElementById('leftSide');
var hamburgerButton = document.getElementById('hamburgerButton');
var navigations = document.getElementById('navigations');
var introContainer = document.getElementById('introContainer');
var skillsContainer = document.getElementById('skillsContainer');
var experienceContainer = document.getElementById('experienceContainer');
var arrow = document.getElementById('arrow');
var introductionLink = document.getElementById('introductionLink');
var skillsLink = document.getElementById('skillsLink');
var experienceLink = document.getElementById('experienceLink');


var isNavigationShow = false;
var pageState = 'intro';

function setPosition() {
    introContainer.style.marginLeft = ((introImg.offsetLeft + introImg.offsetWidth - rightSide.offsetLeft + 40) / rightSide.offsetWidth) * 100 + '%';
    skillsContainer.style.marginLeft = ((skillImg.offsetLeft + skillImg.offsetWidth - rightSide.offsetLeft + 40) / rightSide.offsetWidth) * 100 + '%';
    experienceContainer.style.marginLeft = ((experienceImg.offsetLeft + experienceImg.offsetWidth - rightSide.offsetLeft + 40) / rightSide.offsetWidth) * 100 + '%';
}

window.addEventListener('load', setPosition);

arrow.addEventListener('click', nextPage);
window.addEventListener('mousewheel', nextPage);

function nextPage() {
    if (pageState === 'intro') {
        pageState = 'skill';
        skillImg.classList.add('fadeAppear');
        skillImg.classList.remove('hide');
        introImg.classList.add('fadeDisappear');
        leftSide.classList.add('green');
        introContainer.classList.add('fadeShowAway');
        introductionLink.classList.remove('selected');
        setTimeout(function () {
            introImg.classList.add('hide');
            introImg.classList.remove('fadeDisappear');
            skillImg.classList.remove('fadeAppear');
            introContainer.classList.remove('fadeShowAway');
            introContainer.classList.add('displaynone');
            skillsContainer.classList.add('fadeShow');
            skillsContainer.classList.remove('displaynone');
            setTimeout(function () {
                skillsContainer.classList.remove('fadeShow');
            }, 490)
        }, 490);
    } else if (pageState === 'skill') {
        pageState = 'experience';
        experienceImg.classList.add('fadeAppear');
        experienceImg.classList.remove('hide');
        skillImg.classList.add('fadeDisappear');
        leftSide.classList.remove('green');
        leftSide.classList.add('purple');
        skillsContainer.classList.add('fadeShowAway');
        setTimeout(function () {
            skillImg.classList.add('hide');
            skillImg.classList.remove('fadeDisappear');
            experienceImg.classList.remove('fadeAppear');
            skillsContainer.classList.remove('fadeShowAway');
            skillsContainer.classList.add('displaynone');
            experienceContainer.classList.add('fadeShow');
            experienceContainer.classList.remove('displaynone');
            setTimeout(function () {
                experienceContainer.classList.remove('fadeShow');
            }, 490)
        }, 490);
    } else if (pageState === 'experience') {
        pageState = 'intro';
        introImg.classList.add('fadeAppear');
        introImg.classList.remove('hide');
        experienceImg.classList.add('fadeDisappear');
        leftSide.classList.remove('purple');
        experienceContainer.classList.add('fadeShowAway');
        setTimeout(function () {
            experienceImg.classList.add('hide');
            experienceImg.classList.remove('fadeDisappear');
            introImg.classList.remove('fadeAppear');
            experienceContainer.classList.remove('fadeShowAway');
            experienceContainer.classList.add('displaynone');
            introContainer.classList.add('fadeShow');
            introContainer.classList.remove('displaynone');
            setTimeout(function () {
                introContainer.classList.remove('fadeShow');
            }, 490)
        }, 490);
    }
}





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