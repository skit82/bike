'use strict';

(function () {
  var headerButton = document.querySelector('.page-header__button');
  var headerButtonToggle = document.querySelector('.page-header__block');
  var headerMenu = document.querySelector('.main-nav');
  var header = document.querySelector('.page-header');

  var resetHeader = function () {
    if (header) {
      header.style.marginTop = '0';
    }
    if (headerMenu) {
      headerMenu.style.top = '0';
      headerMenu.classList.remove('main-nav--active');
    }
    if (headerButton) {
      headerButton.removeAttribute('disabled');
      headerButton.classList.remove('page-header__button--active');
    }
    if (headerButtonToggle) {
      headerButtonToggle.classList.remove('page-header__block--active');
    }
  };

  resetHeader();

  var toggleMenu = function (element, selector) {
    if (element.classList.contains(selector)) {
      element.classList.remove(selector);
    } else {
      element.classList.add(selector);
    }
  };
  if (headerButton) {
    headerButton.addEventListener('click', function () {
      toggleMenu(headerButton, 'page-header__button--active');
      toggleMenu(headerButtonToggle, 'page-header__block--active');
      toggleMenu(headerMenu, 'main-nav--active');
      if (header.hasAttribute('style')) {
        header.removeAttribute('style');
      } else {
        header.style.marginTop = '0';
      }
    });
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      headerButton.classList.remove('page-header__button--active');
      headerButtonToggle.classList.remove('page-header__block--active');
      headerMenu.classList.remove('main-nav--active');
      header.style.marginTop = '0';
    }
  });
})();
