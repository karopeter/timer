const h1 = document.querySelector('h1');
h1.innerText
h1

h1.innerText = "I'm hungry"

h1.innerHTML += ' is cool'

h1.innerHTML += '<b>!!!!!!</b>'
h1.innerText += '<b>!!!!!!</b>'

const ul = document.querySelector('ul')
ul.innerText

ul.innerText = "The big me"

const p = document.querySelector('p.special');

p.innerText = "The big boy"


h1.innerText
h1.textContent
h1.textContent = "I'm not hungry"

const  newp = document.querySelector('#main');

newp.innerText

const form = document.querySelector('form')

form.innerHTML

form.innerHTML = 'I am a bold tag'


const inputs = document.querySelectorAll('input');
inputs

inputs[0].value
inputs[1].value

inputs[0]
inputs[2].checked

inputs[0].value += 'the bear' // using javascrit to tead out the value from textInput or read out the checked state of a checked box 

inputs[3].value

inputs[0].placeholder 
inputs[0].placeholder = 'Please enter your bear name'

const a = document.querySelector('a')
a.href

a.href = 'http://www.google.com'

const img = document.querySelector('img');

img.src 

img.src = './images/LAUNCH.png'

const range = document.querySelector('input[type="range"]');

range.getAttribute('max');

range.getAttribute('min');

range.getAttribute('type'); // you pass in the attro

range.value

range.setAttribute('type', 'radio');

const firstLi = document.querySelector('li');

firstLi

firstLi.parentElement

firstLi.parentElement.parentElement

firstLi.parentElement.parentElement.parentElement

firstLi.parentElement.parentElement.parentElement

firstLi.nextElementSibling

const secondLi = firstLi.nextElementSibling.nextElementSibling