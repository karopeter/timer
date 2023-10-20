Document:
document.getElementById: What it does it finds the matching elements that 
contains or that has that I.D on it and it returns that object.
document.getElementById('bear-photo');
const dir = document.getElementById('bear-photo');
console.dir(dir)
const p = document.getElementById('main')
console.dir(p);


getElementByTagName: With this we can get more than one elements
const input = document.getElementsByTagName('input');
input[0] 
input[1]
input[2]

for (let input of inputs) {console.log(input)}

const arr [...input]

document.getElementByClassName: 
const ul = document.getElementsByTagName('ul')
console.dir(ul);

querySelector: It can select everything that we used. it can replicate the functionality 
of all the selector here. querySelector and querySelectorAll which does the same thing 
except that it returns a collection query selector. querySelectorAll this slide 
only returns a single element at most. Another difference about querySelector is that it is bit less performance
document.querySelector('h1')
document.querySelector('p')

document.querySelector('.special')

document.querySelector('p.special')
document.querySelector('li.special')
document.querySelector('body section ul li.special')
document.querySelectorAll('.special')
document.querySelector('body')
document.body.innerText
h1.innerText = "I'm Hungry!"

Properties & Method 
classList:
getAttribute()
setAtrribute()
appendChild()
append()
prepend()
removeChild()
remove()
createElement


innerText: 
textContent
innerHTML
value
parentElement
children
nextSibling
previousSibling
style

Accessing text from an element: 
