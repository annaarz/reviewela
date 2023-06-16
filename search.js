document.querySelector('.search_input').oninput = function() {
    let val = this.value.trim()
    let searchItems = document.querySelectorAll('.list li')
    if (val != '') {
        searchItems.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('none')
            } else {
                elem.classList.remove('none')
            }
        })
    } else {
        searchItems.forEach(function(elem) {
            elem.classList.add('none')
        })
    }

}