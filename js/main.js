const getMenuIcon = document.querySelector('.icon__menu')
const getNav = document.querySelector('aside')

getMenuIcon.addEventListener('click', function() {
    console.log(getNav)
    getNav.classList.toggle('active')

})
