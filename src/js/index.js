import '../scss/style.scss'

import Swiper from 'swiper'

import { Pagination } from 'swiper/modules'

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

/*бургер*/
const menuBtn = document.querySelector('.header__logo-left__burger--close')
const menu = document.querySelector('.menu-mobile')
const back = document.querySelector('.menu-mobile-header__group-left--back')

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active')
})
back.addEventListener('click', function () {
  menu.classList.remove('active')
})

/*рапиры*/
const repair = document.querySelector('.header__logo-right--repair')
const refund = document.querySelector('.link-icon__icon--close')
const modal = document.querySelector('.modal')
const section = document.querySelector('.body')

repair.addEventListener('click', function () {
  repair.classList.toggle('active')
  modal.classList.toggle('active')
  section.classList.toggle('active')
})
refund.addEventListener('click', function () {
  repair.classList.remove('active')
  modal.classList.remove('active')
  section.classList.remove('active')
})

/*обратный звонок*/
const checkstatus = document.querySelector('.header__logo-right--checkstatus')
const refund2 = document.querySelector('.link-icon__icon--close')
const modal2 = document.querySelector('.modal')
const section2 = document.querySelector('.body')

checkstatus.addEventListener('click', function () {
  checkstatus.classList.toggle('active')
  modal2.classList.toggle('active')
  section2.classList.toggle('active')
  mobile2.classList.toggle('active')
})
refund2.addEventListener('click', function () {
  checkstatus.classList.remove('active')
  modal2.classList.remove('active')
  section2.classList.remove('active')
})

/*читать далее*/

const text = document.querySelector('.container__text__text-content')
const btn = document.querySelector('.container__text__read-more')

btn.addEventListener('click', btnClick)

function btnClick() {
  if (btn.textContent === 'Читать далее') {
    text.style.height = '100%'
    btn.textContent = 'Скрыть'
  } else {
    text.style.height = '150px'
    btn.textContent = 'Читать далее'
  }
}

/*Показать все image2*/
const image2 = document.querySelector('.image2-slider')
const btn2 = document.querySelector('.image2-slider__read-more')

btn2.addEventListener('click', btn2Click)

function btn2Click() {
  if (btn2.textContent === 'Показать все') {
    image2.style.height = '100%'
    btn2.textContent = 'Скрыть'
  } else {
    image2.style.height = '120px'
    btn2.textContent = 'Показать все'
  }
}

/*Показать все servic2*/
const servic2 = document.querySelector('.servic2-item')
const btn3 = document.querySelector('.servic2-item__read-more')

btn3.addEventListener('click', btn3Click)

function btn3Click() {
  if (btn3.textContent === 'Показать все') {
    servic2.style.height = '100%'
    btn3.textContent = 'Скрыть'
  } else {
    servic2.style.height = '160px'
    btn3.textContent = 'Показать все'
  }
}
