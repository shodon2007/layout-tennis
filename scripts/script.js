let isBurger = false;
let checkBurger = 0;
const burger = document.querySelector('.burger');


const showBurger = () => {
    burger.style.display = 'block';
    burger.style.opacity = '1';
    burger.style.zIndex = '2';
    return true;
}

const hideBurger = () => {
    setTimeout(() => {
        burger.style.display = 0;
    }, 200);
    burger.style.opacity = '0';
    burger.style.zIndex = '-1';
    return false;
}