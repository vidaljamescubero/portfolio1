
const toggleNavBar = document.querySelector('.navbar-toggler')
const burger = document.querySelector('.burger')

function navBurger() {
    toggleNavBar.addEventListener('click', () => {
        burger.classList.toggle("changeBurger")
    })
}




navBurger()
AOS.init();