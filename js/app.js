'use strict';

window.addEventListener('scroll',function (event) {
    if (window.scrollY < document.body.clientHeight) {
        document.getElementById('parallaxBackground').style.transform =
            'translateY(-' + window.scrollY / document.body.clientHeight * 10 + '%)';
    }
    if (window.scrollY > document.body.clientHeight) {

    }
});