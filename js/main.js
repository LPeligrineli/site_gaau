const getMenuIcon = document.querySelector('.icon__menu')
const getNav = document.querySelector('aside')
const getMovimentoGaau = document.querySelector('#movimento-gaau')
const getMovimentoGaauImg = document.querySelector('.text_movimento > img')

getMenuIcon.addEventListener('click', function() {
    getNav.classList.toggle('active')

})

getMovimentoGaau.addEventListener('mouseenter', function(e) {
    getMovimentoGaauImg.setAttribute('src', './img/movimento_Gaau_focus.png')
})

getMovimentoGaau.addEventListener('mouseleave', function() {
    getMovimentoGaauImg.setAttribute('src', './img/movimento_Gaau_initial.png')
})

