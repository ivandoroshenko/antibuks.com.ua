document.addEventListener('DOMContentLoaded', function () {
        var navs = document.querySelectorAll('.nav_link');
        for (var i = 0; i < navs.length; i++) {
            if (navs[i].href == window.location) {
                navs[i].classList.add('active');
            }
        }
});
'use strict';
var menu = document.querySelector('#menu');
    
    menu.onclick = function () { 
        console.log(this);
        var nav = document.querySelector('#dropdown_nav');
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            nav.style.display="flex";
            nav.classList.add('nav_active');
        } else {
            this.classList.remove('active');
            nav.classList.remove('nav_active');
        }
     }

// window.onscroll = function () { 
//     var topBar = document.querySelector('.top-bar'),
//     scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//     if ( scrollTop > menu.offsetHeight + 50 ) {
//         Object.assign(topBar.style, {position: 'fixed', marginTop: '"-" + menu.offsetHeight', transform: 'translateY(menu.offsetHeight)'});
//     } else {
//         if (scrollTop <= topBar.offsetHeight / 2)
//         topBar.classList.remove('top-bar_fixed');
//     }
//  }
function findVideos() {
    var videos = document.querySelectorAll('.video');

    for (var i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    var link = video.querySelector('.video_link');
    var media = video.querySelector('.video_media');
    var button = video.querySelector('.video_button');
    var id = parseMediaURL(media);

    video.addEventListener('click', function () { 
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
     });

     link.removeAttribute('href');
     video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    var regexp = /https:\/\/i.ytimg.com\/vi\/([a-zA-Z0-9_-]+)\/.+/
    var url = media.src;
    var match = url.match(regexp);

    return match[1]; 
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video_media');

    return iframe;
}

function generateURL(id) {
    var query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
// //button up
// function offset(el) {
//     var rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }

// // example use
// var div = document.querySelector('div');
// var divOffset = offset('.button_up');
// console.log(divOffset.left, divOffset.top);

// $(document).click(function (event) {
//     btnUp = event.target;
//     if ($(btnUp.parentNode).hasClass('button_up')) {
//         $('body, html').animate({ 'scrollTop': 0 }, 1000);
//     }
// });

// $(document).scroll(function (e) {
//     e.preventDefault;
//     if ($(document).scrollTop() > 200) {
//         $('.button_up').addClass('button_up--active');
//     } else {
//         $('.button_up').removeClass('button_up--active')
//     }
// });