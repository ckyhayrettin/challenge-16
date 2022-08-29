const button = document.querySelector('#button');
const btnHover = document.querySelector('#btnhover');
const modeText = document.querySelector('#mode-text');
const body = document.querySelector('body');
const card = document.querySelectorAll('.card')

button.addEventListener('click', function () {

    btnHover.classList.toggle('btn-active')

    if (btnHover.classList.contains('btn-active')) {
        modeText.textContent = ''
        modeText.textContent = 'Light Mode'
        body.classList.add('body-color')

        card.forEach(function (item) {
            item.classList.add('card-color')
        })

    } else {
        modeText.textContent = ''
        modeText.textContent = 'Dark Mode'
        body.classList.remove('body-color')

        card.forEach(function (item) {
            item.classList.remove('card-color')
        })
    }
})

