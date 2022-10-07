let isBurger = false;
const burger = document.querySelector('.burger');


const showBurger = () => {
    burger.style.opacity = '1';
    burger.style.zIndex = '2';
    return true;
}

const hideBurger = () => {
    burger.style.opacity = '0';
    burger.style.zIndex = '-1';
    return false;
}