document.addEventListener('DOMContentLoaded', function () {
        var navs = document.querySelectorAll('.nav_link');
        for (var i = 0; i < navs.length; i++) {
            if (navs[i].href == window.location) {
                navs[i].classList.add('active');
            }
        }
});
