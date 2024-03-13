function menuOn() {
    var navbarMenu = document.querySelector('.navbar-menu');

        if(navbarMenu.classList.contains('active')){
            navbarMenu.classList.remove('active')
            navbarMenu.classList.toggle('inactive')
        } else if(navbarMenu.classList.contains('inactive')){
            navbarMenu.classList.toggle('active')
            navbarMenu.classList.remove('inactive')
        } else {
            navbarMenu.classList.toggle('active')
        }

}
