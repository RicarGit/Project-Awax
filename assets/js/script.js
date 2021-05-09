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