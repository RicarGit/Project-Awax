// NAV MENU
const menuItens = document.querySelectorAll('.menu nav ul li a')

const activeFirstParentElement = ([firstElement]) =>
  firstElement.parentNode.classList.add('active')

const removeParentsActiveClass = elements =>
  elements.forEach(el => el.parentNode.classList.remove('active'))

menuItens.forEach(a => {
  a.addEventListener('click', e => {
    removeParentsActiveClass(menuItens)
    e.target.parentNode.classList.add('active')
  })
})
activeFirstParentElement(menuItens)


// BANNER SLIDER
const slide = document.querySelectorAll('.banner .slide')
const sliderDots = document.querySelectorAll('.banner .pointer')

const slideImages = [
  'url(../../media/bg.jpg)',
  'url(../../media/foto3.jpg)',
  'url(../../media/foto6.jpg)'
]

const addsClassActiveFirstBannerDots = ([firstDot]) =>
  firstDot.classList.add('active')

const addsClassActiveToSlide = ([firstSlide]) =>
  firstSlide.classList.add('active-slide')

const removeClassActive = elements =>
  elements.forEach(el => el.classList.remove('active'))

const removeClassActiveSlide = elements =>
  elements.forEach(el => el.classList.remove('active-slide'))

sliderDots.forEach((dot, index) => dot.addEventListener('click', e => {
  removeClassActive(sliderDots)
  removeClassActiveSlide(slide)
  e.target.classList.add('active')
  slide[index].classList.add('active-slide')

  slide[index].style.setProperty('background-image', slideImages[index])
}))

addsClassActiveFirstBannerDots(sliderDots)
addsClassActiveToSlide(slide)


// OUR PROJECTS NAV
const filters = document.querySelectorAll('.filters ul li a')

const activeFirstElement = ([firstElement]) =>
  firstElement.classList.add('active')

filters.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()

    removeActiveClass(filters)
    e.target.classList.add('active')
  })
})
activeFirstElement(filters)