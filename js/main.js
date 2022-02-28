const getMenuIcon = document.querySelector('.icon__menu')
const getNav = document.querySelector('aside')

getMenuIcon.addEventListener('click', function() {
    getNav.classList.toggle('active')

})
