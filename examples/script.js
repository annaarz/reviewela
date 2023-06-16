let body = document.querySelector('body')
let light_btn = document.querySelector('.white_theme_btn')


light_btn.addEventListener('click', () => {
    body.classList.toggle('light');
    if (light_btn.innerHTML == 'Тёмная Тема') {
        light_btn.innerHTML = 'Светлая Тема'
    }
    else {
        light_btn.innerHTML = 'Тёмная Тема'
    }
})