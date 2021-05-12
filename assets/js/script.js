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

const addsClassActiveFirstSliderDots = ([firstDot]) =>
  firstDot.classList.add('active')

const addsClassActiveToSlide = ([firstSlide]) =>
  firstSlide.classList.add('active-slide')

const addsBgImageToFirstSlide = ([firstSlide], [firstImage]) =>
  firstSlide.style.setProperty('background-image', firstImage)

const removeClassActive = elements =>
  elements.forEach(el => el.classList.remove('active'))

const removeClassActiveSlide = elements =>
  elements.forEach(el => el.classList.remove('active-slide'))

const activeCurrentImage = (slide, slideImage, index) => {
  const currentSlide = slide[index]
  const currentSlideImage = slideImage[index]

  currentSlide.classList.add('active-slide')
  currentSlide.style.setProperty('background-image', currentSlideImage)
}

sliderDots.forEach((dot, index) => dot.addEventListener('click', e => {
  removeClassActive(sliderDots)
  removeClassActiveSlide(slide)

  e.target.classList.add('active')
  activeCurrentImage(slide, slideImages, index)
}))

addsClassActiveFirstSliderDots(sliderDots)
addsClassActiveToSlide(slide)
addsBgImageToFirstSlide(slide, slideImages)


// OUR PROJECTS NAV
const filters = document.querySelectorAll('.filters ul li a')

const activeFirstElement = ([firstElement]) =>
  firstElement.classList.add('active')

const removeActiveClass = elements =>
  elements.forEach(el => el.classList.remove('active'))

filters.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()

    removeActiveClass(filters)
    e.target.classList.add('active')
  })
})
activeFirstElement(filters)


// OUR TEAM SLIDER
