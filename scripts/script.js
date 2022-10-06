let isBurger = false;
const burger = document.querySelector('.burger');
const burger__body = document.querySelector('.burger__body')
const body = document.querySelector('body');
showBurger = () => {
    body.style.overflow = "hidden";
    burger.style.display = 'block';
    burger__body.style.display = 'flex';
    console.log("Hello world");
    return true;
}
hideBurger = () => {
    body.style.overflow = "visible";
    burger.style.display = 'none';
    burger__body.style.display = 'none';
    console.log("Привет мир");
    return false;
}