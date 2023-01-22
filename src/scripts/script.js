const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    animOnScroll();
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset)) {
                animItem.classList.add('active')
            } else {
                if (!animItem.classList.contains('no-delete')) {
                    animItem.classList.remove('active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}





new Swiper('.swiper', {
    slidesPerView: 2,

    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        460: {
            slidesPerView: 4,
        },
        660: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    },

    navigation: {
        nextEl: '.trainers__right',
        prevEl: '.trainers__left',
    }
})














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