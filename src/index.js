import {loadHome} from './home.js'
import {loadMenu} from './menu.js'
import {loadAbout} from './about.js'
import {loadContact} from './contact.js'

const home = document.getElementById('home')
const menu = document.getElementById('menu')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const content = document.getElementById('content')
const body = document.querySelector('body');
const logoButton = document.getElementById('logoButton')

loadHome()

home.addEventListener('click', () => {
  content.textContent = '';
  body.style.cssText = '';
  loadHome()})

logoButton.addEventListener('click', () => {
  content.textContent = '';
  body.style.cssText = '';
  loadHome()})

menu.addEventListener('click', () => {
  content.textContent = '';
  body.style.cssText = '';
  loadMenu()})

about.addEventListener('click', () => {
  content.textContent = '';
  body.style.cssText = '';
  loadAbout()})

contact.addEventListener('click', () => {
  content.textContent = '';
  body.style.cssText = '';
  loadContact()})

export {content, body}
