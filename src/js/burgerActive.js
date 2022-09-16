const burgerElement = document.querySelector('.burger-wrapper')
const burger = document.querySelector('.header-mobile-burger')

burger.addEventListener('click', () => {
	burgerElement.classList.toggle('burger-active')
})
