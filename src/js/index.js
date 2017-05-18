import $ from 'jquery';
import jQuery from 'jquery';
import 'materialize-css';

window.$ = $;
window.jQuery = jQuery;

$(function () {
  let
    page,
    $hamburgerMenu = $('.hamburger-menu'),
    $bar = $('.bar'),
    $nav = $('.nav'),
    menuIsOpen;

  function defineThePage () {
    let hashes = location.hash.split('/');
    let hash = hashes[0];
    if (hash === '/' || hash === '' || hash === '#home') {
      let newPage = 'home'
      setState(newPage)
    } else if (hash === '#menu') {
      let newPage = 'home'
      setState(newPage)
    } else if (hash === '#about') {
      let newPage = 'about'
      setState(newPage)
    } else if (hash === '#experience') {
      let newPage = 'experience'
      setState(newPage)
    } else if (hash === '#skills') {
      let newPage = 'skills'
      setState(newPage)
    } else if (hash === '#portfolio') {
      let newPage = 'portfolio'
      setState(newPage)
    } else if (hash === '#contacts') {
      let newPage = 'contacts';
      setState(newPage)
    } else {
      console.log('error');
    }
  }

  function showPage (newPage) {
    $('.' + page).removeClass('current');
    $('.' + newPage).addClass('current');
    page = newPage;
  }

  function showOrHideMenu (show) {
    if (show) {
      $nav.show()
    } else {
      $nav.hide()
    }
  }

  defineThePage();

  $('.nav__link').on('click', function (e) {
    showOrHideMenu(false)
    setState($(this).parent().data('url'))
    $bar.toggleClass('animate')
  });

  $hamburgerMenu.on('click', function () {
    menuIsOpen = $bar.hasClass('animate');
    $bar.toggleClass('animate')

    // setState(page)
    showOrHideMenu(!menuIsOpen)
  });

  function setState (newPage) {
    let obj = {
      page: newPage,
      data: {}
    };

    history.pushState(obj, obj.page, `/#${obj.page}`);

    if (obj.page === 'menu') {
      showOrHideMenu(true)
    } else {
      showPage(obj.page)
    }
  }

  window.addEventListener('popstate', function (e) {
    let state = history.state;
    console.log(state)
    if (state.page === 'menu') {
      showOrHideMenu(true)
    } else {
      showPage(state.page)
    }
  });

});
