let reg_logBtn = document.querySelector('.reg_log')
let reg_logContainer = document.querySelector('.reg_log_container')
let closeBtn = document.querySelector('.close_btn')
let closeBtn2 = document.querySelector('.close_btn_2')
let openedEye = document.querySelector('.opened_eye')
let closedEye = document.querySelector('.closed_eye')
let passwordInput = document.querySelector('.password_input')
const UserList = document.querySelector('.list_users')
let passwordBtn = document.querySelector('.password_button')
let forgot_passwordContainer = document.querySelector('.forgot_password_container')
let registerBtn = document.querySelector('.register_button')
let loginBtn = document.querySelector('.login_button')
let registerContainer = document.querySelector('.register_container')
let closeBtn3 = document.querySelector('.close_btn_3')
let register_button2 = document.querySelector('.register_button2')
let login_button2 = document.querySelector('.login_button2')
let password_button2 = document.querySelector('.password_button2')
let password = document.querySelector('.password_input2')
let submit = document.querySelector('.confirm')
let reg_logBtnSide = document.querySelector('.reg_log_side')
let backPannelSide = document.querySelector('.side_pannel_container')
let burgerButtonSide = document.querySelector('.burger_btn')
let body = document.querySelector('body')
let light_btnSide = document.querySelector('.white_theme_btn_side')
let categories = document.querySelector('.categories_side')
let auxiliaryLinks = document.querySelector('.auxiliary_links')
let categoriesSideClose = document.querySelector('.categories_side_close')


function checkPassword() {
    if (password.value == submit.value) {
        submit.style.color = 'green'
    } else {
        submit.style.color = 'red'
    }
}
password.addEventListener('keyup', checkPassword)
submit.addEventListener('keyup', checkPassword)

reg_logBtnSide.addEventListener('click', (e) => {
    if (!registerContainer.classList.contains('opened') && !forgot_passwordContainer.classList.contains('opened')) {
        reg_logContainer.classList.add('opened')

    }
    backPannelSide.style.width = '0'
    burgerButtonSide.style.display = 'block'

})


reg_logBtn.addEventListener('click', (e) => {
    if (!registerContainer.classList.contains('opened') && !forgot_passwordContainer.classList.contains('opened')) {
        reg_logContainer.classList.add('opened')
    }

})
closeBtn.addEventListener('click', () => {
    reg_logContainer.classList.remove('opened')

})
closeBtn2.addEventListener('click', () => {
    forgot_passwordContainer.classList.remove('opened')

})
openedEye.addEventListener('click', () => {
    passwordInput.type = 'text'
    openedEye.style.display = 'none'
    closedEye.style.display = 'inline-block'
})
closedEye.addEventListener('click', () => {
    passwordInput.type = 'password'
    closedEye.style.display = 'none'
    openedEye.style.display = 'inline-block'
})

passwordBtn.addEventListener('click', () => {
    forgot_passwordContainer.classList.add('opened')
    reg_logContainer.classList.remove('opened')
})

loginBtn.addEventListener('click', () => {
    forgot_passwordContainer.classList.remove('opened')
    reg_logContainer.classList.add('opened')
})

registerBtn.addEventListener('click', () => {
    registerContainer.classList.add('opened')
    reg_logContainer.classList.remove('opened')
})

closeBtn3.addEventListener('click', () => {
    registerContainer.classList.remove('opened')
})

register_button2.addEventListener('click', () => {
    registerContainer.classList.add('opened')
    forgot_passwordContainer.classList.remove('opened')
})

login_button2.addEventListener('click', () => {
    reg_logContainer.classList.add('opened')
    registerContainer.classList.remove('opened')
})

password_button2.addEventListener('click', () => {
    forgot_passwordContainer.classList.add('opened')
    registerContainer.classList.remove('opened')

})
let light_btn = document.querySelector('.white_theme_btn')


light_btn.addEventListener('click', () => {
    body.classList.toggle('light');
    if (light_btn.innerHTML == 'Тёмная Тема') {
        light_btn.innerHTML = 'Светлая Тема'
    } else {
        light_btn.innerHTML = 'Тёмная Тема'
    }
})

light_btnSide.addEventListener('click', () => {
    body.classList.toggle('light');
    if (light_btnSide.innerHTML == 'Тёмная Тема') {
        light_btnSide.innerHTML = 'Светлая Тема'
    } else {
        light_btnSide.innerHTML = 'Тёмная Тема'
    }
    backPannelSide.style.width = '0'
    burgerButtonSide.style.display = 'block'
})


categories.addEventListener('click', () => {
    auxiliaryLinks.style.display = 'flex'
    categories.style.display = 'none'
    categoriesSideClose.style.display = 'block'
})

categoriesSideClose.addEventListener('click', () => {
    auxiliaryLinks.style.display = 'none'
    categories.style.display = 'block'
    categoriesSideClose.style.display = 'none'
})