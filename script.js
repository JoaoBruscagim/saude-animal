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
