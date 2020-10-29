'use strict';
/*===========================
  MENU
=============================*/

window.addEventListener('load', function (e) {
  {
    var menu = document.querySelector('.menu'),
        toggle = document.querySelector('.menu__toggle');
    toggle.addEventListener('click', function (e) {
      menu.classList.toggle('menu_active');
    });
  }
  window.addEventListener('resize', function (e) {
    console.log(document.documentElement.clientWidth);
  });
});