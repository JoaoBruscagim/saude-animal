function menuOn() {
  var navbarMenu = document.querySelector('.navbar-menu');
  var navbar = document.querySelector('.navbar');

  if (navbarMenu.classList.contains('active')) {
    navbarMenu.classList.remove('active');
    navbarMenu.classList.toggle('inactive');
    if (window.scrollY <= 100) {
      navbar.classList.remove('onTopWhite');
    }
    setTimeout(() => {
      navbarMenu.classList.remove('inactive');
    }, 1000);

  } else if (navbarMenu.classList.contains('inactive')) {
    navbarMenu.classList.toggle('active');
    if (window.scrollY <= 100) {
      navbar.classList.add('onTopWhite');
    }
  } else {
    navbarMenu.classList.toggle('active');
    if (window.scrollY <= 100) {
      navbar.classList.add('onTopWhite');
    }
  }
}

var onTop = false;
var nav = document.querySelector('.navbar');

window.onscroll = function (evt) {
  var navbarMenu = document.querySelector('.navbar-menu');

  if (window.innerWidth > 768) {
    if (window.scrollY > 100 && !onTop && !navbarMenu.classList.contains('active')) {
      nav.classList.add('onTop');
      onTop = true;
    }

    if (window.scrollY < 100 && onTop && !navbarMenu.classList.contains('active')) {
      nav.classList.remove('onTop');
      onTop = false;
    }
  }
};