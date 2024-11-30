let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');

    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
};

prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');

    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
};

const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active', 'animate');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    // Add active/animation classes
    items[active].classList.add('active', 'animate');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    // Ensure images are visible and animated
    items.forEach((e) => {
        const img = e.querySelector('.image img');
        const caption = e.querySelector('.image figcaption');
        if (img) img.style.display = 'block'; // Ensure the image is visible
        if (caption) caption.style.display = 'block'; // Ensure caption is visible
    });

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
};


let autoPlay = setInterval(() => {
    next.click();
}, 5000);
