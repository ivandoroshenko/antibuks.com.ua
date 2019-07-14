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
