const cardItem = document.querySelectorAll('.card-item');

cardItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass()
        item.classList.add('active')
    })
})

function removeActiveClass() {
    cardItem.forEach(item => {
        item.classList.remove('active')
    })
}