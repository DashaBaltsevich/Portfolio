const menuBtn = document.querySelector('.m-menu'),
    menu = document.querySelector('.menu-sidebar');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    // if(menuSidebar.classList !== 'active') {
    //     menuSidebar.style.transform = "translateX(0%)";
    // }
    // if(menuSidebar.classList === 'active') {
    //     menuSidebar.style.transform = "translateX(-100%)";
    // }
    

});