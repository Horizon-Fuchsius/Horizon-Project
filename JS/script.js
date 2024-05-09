var menuIcon = document.getElementById("menu-icon");

var menuIconClick = false;

menuIcon.addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("active");

    if (menuIconClick == false) {
        menuIcon.className = 'ri-close-line'; 
        document.body.style.overflow = 'hidden';
        menuIconClick = true;
    } else {
        menuIcon.className = 'ri-menu-fill';
        document.body.style.overflow = 'visible';
        menuIconClick = false;
    }
});
