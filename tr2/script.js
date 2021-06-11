'use strict';
const btn = document.querySelector('.menu-icon-wrapper'),
    menuIcon = document.querySelector('.menu-icon'),
    menuNav = document.querySelector('.mobile-nav'),
    headerInfoButton = document.querySelector('.header-info-button'),
    headerInfoContactItem = document.querySelector('.header-info-contact__item'),
    mapTitle = document.querySelector('.map-title'),
    nameInput = document.querySelector('.watch-name__input'),
    nameInput2 = document.querySelector('.questions-name__input'),
    phoneInput2 = document.querySelector('.questions-phone__input'),
    phoneInput = document.querySelector('.watch-phone__input');

const menu = () => {


    btn.addEventListener('click', () => {
        menuIcon.classList.toggle('menu-icon-active');
        menuNav.classList.toggle('mobile-nav--active');
    });


    //     btn.addEventListener('click', (event)=> {

    //         menuNav.style.opacity = 0;
    //         let count = 0;
    //         count = +0.01;
    //     let time = setInterval(()=> {
    //         menuIcon.classList.add('menu-icon-active');
    //         menuNav.classList.add('mobile-nav--active');
    //         menuNav.style.opacity = +menuNav.style.opacity + count;
    //         if (menuNav.style.opacity >= 1) {
    //             clearInterval(time);
    //         }
    //         }, 10);

}
menu();

// При нажатии на кнопку скролл в начало страницы
headerInfoButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        block: 'start'
    });
});


//Плавный скролл при нажатии на ссылку с перемещением до элемента

headerInfoContactItem.addEventListener('click', () => {
    event.preventDefault();
    mapTitle.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});



//ввод цифр и +

phoneInput.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\+\d]/gi, '');
});

phoneInput2.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\+\d]/gi, '');
});



//ввод кириллицы

nameInput.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^а-яё]/ig, '');
});

nameInput2.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^а-яё]/ig, '');
});