// Slider
let sliderItem = 0;
sliderBody = document.querySelector('.trainers__body');
sliderBodyLength = sliderBody.children.length;
// Burger
let isBurger = false;
let checkBurger = 0;
const burger = document.querySelector('.burger');


// Slider
function slideClick(agr) {
    agr == 1 ? sliderItem += 1 : sliderItem -= 1;
    if (sliderItem > -1) {
        sliderItem = 0;
    } else if (sliderItem < -(sliderBodyLength - 6)) {
        sliderItem = -(sliderBodyLength - 6);
    }
    sliderBody.style.left = `${sliderItem * 120}px`;
}

// Burger
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