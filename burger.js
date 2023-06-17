const burgerButton = document.querySelector('.burger_btn');

const closeButton = document.querySelector('.x_button');

const backPannel = document.querySelector('.side_pannel_container');

burgerButton.addEventListener('click', () => {
    burgerButton.style.display = 'none'
    backPannel.style.width = '30%'
    backPannel.style.display = 'inline-block'
})

closeButton.addEventListener('click', () => {
    backPannel.style.width = '0'
    backPannel.style.transition = '0.5s'
    burgerButton.style.display = 'block'
})