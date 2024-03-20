function menuOn() {
    var navbarMenu = document.querySelector('.navbar-menu');

        if(navbarMenu.classList.contains('active')){
            navbarMenu.classList.remove('active')
            navbarMenu.classList.toggle('inactive')
            setTimeout(() => {
                navbarMenu.classList.remove('inactive')
             },1000);

        } else if(navbarMenu.classList.contains('inactive')){
            navbarMenu.classList.toggle('active')
        } else {
            navbarMenu.classList.toggle('active')
        }

}


var onTop = false;
var nav = document.querySelector('.navbar');
window.onscroll = function (evt) {

 if(window.scrollY > 100 && !onTop) {
   nav.classList.add('onTop');
   onTop = true;
 }
  
 if(window.scrollY < 100 && onTop) {
   nav.classList.remove('onTop');
   onTop = false;
 }
};