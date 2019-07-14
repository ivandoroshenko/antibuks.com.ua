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