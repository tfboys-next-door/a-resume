'use strict';

window.addEventListener('resize', setPosition);

// var introImg = document.getElementById('introImg');
// var skillImg = document.getElementById('skillImg');
// var experienceImg = document.getElementById('experienceImg');
var rightSide = document.getElementById('rightSide');
var leftSide = document.getElementById('leftSide');
var hamburgerButton = document.getElementById('hamburgerButton');
var navigations = document.getElementById('navigations');
// var introContainer = document.getElementById('introContainer');
// var skillsContainer = document.getElementById('skillsContainer');
// var experienceContainer = document.getElementById('experienceContainer');
var arrow = document.getElementById('arrow');
var introLink = document.getElementById('introductionLink');
var skillsLink = document.getElementById('skillsLink');
var experienceLink = document.getElementById('experienceLink');

var controls = {
    intro: {
        img: document.getElementById('introImg'),
        container: document.getElementById('introContainer'),
        link: introLink,
        color: 'grey',
    },
    skill: {
        img: document.getElementById('skillImg'),
        container: document.getElementById('skillsContainer'),
        link: skillsLink,
        color: 'green',
    },
    experience: {
        img: document.getElementById('experienceImg'),
        container: document.getElementById('experienceContainer'),
        link: experienceLink,
        color: 'purple',
    }
}


var isNavigationShow = false;
var pageState = 'intro';

function setPosition() {
    introContainer.style.marginLeft = ((introImg.offsetLeft + introImg.offsetWidth - rightSide.offsetLeft + 40) / rightSide.offsetWidth) * 100 + '%';
    skillsContainer.style.marginLeft = ((skillImg.offsetLeft + skillImg.offsetWidth - rightSide.offsetLeft + 40) / rightSide.offsetWidth) * 100 + '%';
    experienceContainer.style.marginLeft = ((experienceImg.offsetLeft + experienceImg.offsetWidth - rightSide.offsetLeft + 40) / rightSide.offsetWidth) * 100 + '%';
}

window.addEventListener('load', setPosition);

function navigateTo(to) {
    controls[to].img.classList.add('fadeAppear');
    controls[to].img.classList.remove('hide');
    controls[pageState].img.classList.add('fadeDisappear');
    leftSide.classList.remove(controls[pageState].color);
    leftSide.classList.add(controls[to].color);
    controls[pageState].container.classList.add('fadeShowAway');
    controls[pageState].link.classList.remove('selected');
    controls[to].link.classList.add('selected');
    setTimeout(function () {
        controls[pageState].img.classList.add('hide');
        controls[pageState].img.classList.remove('fadeDisappear');
        controls[to].img.classList.remove('fadeAppear');
        controls[pageState].container.classList.remove('fadeShowAway');
        controls[pageState].container.classList.add('displaynone');
        controls[to].container.classList.add('fadeShow');
        controls[to].container.classList.remove('displaynone');
        setTimeout(function () {
            pageState = to;
            controls[pageState].container.classList.remove('fadeShow');
        }, 490)
    }, 490);
}

function nextPage() {
    if (pageState === 'intro') {
        navigateTo('skill');
    } else if (pageState === 'skill') {
        navigateTo('experience');
    } else {
        navigateTo('intro');
    }
}

function previousPage() {
    if (pageState === 'intro') {
        navigateTo('experience');
    } else if (pageState === 'skill') {
        navigateTo('intro');
    } else {
        navigateTo('skill');
    }
}

arrow.addEventListener('click', nextPage);

window.addEventListener('mousewheel', function(event) {
    if (event.wheelDelta > 0) {
        previousPage();
    } else {
        nextPage();
    }
})

navigations.addEventListener('click', function (event) {
    if (event.target.id === 'introductionLink') {
        if (pageState != 'intro') {
            navigateTo('intro');
        }
    } else if (event.target.id === 'skillsLink') {
        if (pageState != 'skill') {
            navigateTo('skill');
        }
    } else if (event.target.id === 'experienceLink') {
        if (pageState != 'experience') {
            navigateTo('experience');
        }
    }
})

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