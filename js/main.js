const getMenuIcon = document.querySelector('.icon__menu')
const getNav = document.querySelector('aside')
const getMovimentoGaau = document.querySelector('#movimento-gaau')
const getMovimentoGaauImg = document.querySelector('.text_movimento > img')

getMenuIcon.addEventListener('click', function () {
    getNav.classList.toggle('active')

})

getMovimentoGaau.addEventListener('mouseenter', function (e) {
    getMovimentoGaauImg.setAttribute('src', './img/movimento_Gaau_focus.png')
})

getMovimentoGaau.addEventListener('mouseleave', function () {
    getMovimentoGaauImg.setAttribute('src', './img/movimento_Gaau_initial.png')
})

particlesJS.load('particles-js', 'js/vendor/particlesjs-config.json', () => console.log('callback - particles.js config loaded'));


gsap.registerPlugin(ScrollTrigger)
gsap.from("#home-title", { x: -1000, duration: 2 });
gsap.from("#movimento-gaau", { x: 1000, duration: 2, rotate: 360 });

const tlAbout = gsap.timeline()
gsap.from("#about-text", {
    scrollTrigger: {
        trigger: '.container',
        start: "top 70%",
        scrub: 1,
        toggleActions: "play reset play reset"
    },
        x: 1000,
        duration: 10,
    }
)

gsap.from("#about-image", {
    scrollTrigger: {
        trigger: '.container',
        start: "top 70%",
        scrub: 1,
        toggleActions: "play reset play reset"
    },
        x: -1000,
        duration: 10,
    }
)

