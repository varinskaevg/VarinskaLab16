// Завдання 1
let elem1 = document.getElementById('img1')
let elem2 = document.getElementById('img2')
let elem3 = document.getElementById('img3')

elem1.onclick = function () {
    alert(this.src)
}
elem2.onclick = function () {
    alert(this.src)
}
elem3.onclick = function () {
    alert(this.src)
}

// Завдання 2
let link1 = document.getElementById('link1')
let link2 = document.getElementById('link2')
let link3 = document.getElementById('link3')

function mouseOver1(event1) {
    event1.target.setAttribute('title', event1.target.innerText)
}
function mouseOut1(event1) {
    event1.target.removeAttribute('title')
}

link1.addEventListener('mouseover', mouseOver1)
link1.addEventListener('mouseout', mouseOut1)
//link1.removeEventListener('mouseover', mouseOver1)
//link1.removeEventListener('mouseout', mouseOut1)

link2.addEventListener('mouseover', mouseOver1)
link2.addEventListener('mouseout', mouseOut1)
//link2.removeEventListener('mouseover', mouseOver1)
//link2.removeEventListener('mouseout', mouseOut1)

link3.addEventListener('mouseover', mouseOver1)
link3.addEventListener('mouseout', mouseOut1)
//link3.removeEventListener('mouseover', mouseOver1)
//link3.removeEventListener('mouseout', mouseOut1)

// Завдання 3
let link4 = document.getElementById('link4')
let link5 = document.getElementById('link5')
let link6 = document.getElementById('link6')

function mouseOver2(event2) {
    event2.target.innerText = event2.target.innerText + ' (' + event2.target.getAttribute('href') + ')'

// завдання 4
//event2.target.removeEventListener("mouseover", mouseOver2);
//event2.target.removeEventListener("mouseout", mouseOut2);
}
function mouseOut2(event2) {
    event2.target.innerText = event2.target.innerText.split(' (')[0]
}

link4.addEventListener('mouseover', mouseOver2)
link4.addEventListener('mouseout', mouseOut2)
//link4.removeEventListener("mouseover", mouseOver2);
//link4.removeEventListener("mouseout", mouseOut2);

link5.addEventListener('mouseover', mouseOver2)
link5.addEventListener('mouseout', mouseOut2)
//link5.removeEventListener("mouseover", mouseOver2);
//link5.removeEventListener("mouseout", mouseOut2);

link6.addEventListener('mouseover', mouseOver2)
link6.addEventListener('mouseout', mouseOut2)
//link6.removeEventListener("mouseover", mouseOver2);
//link6.removeEventListener("mouseout", mouseOut2);

// Завдання 5
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let demo = document.getElementById('demo')

function blur(event3) {
    demo.innerText += event3.target.value + ' '

}

input1.addEventListener("blur", blur)
input2.addEventListener("blur", blur)
input3.addEventListener("blur", blur)

// завдання 6
function click(event3) {
    alert(event3.target.value)
    event3.target.removeEventListener("click", click);
}

input1.addEventListener("click", click)
input2.addEventListener("click", click)
input3.addEventListener("click", click)

// Завдання 7
let paragraphs = document.getElementsByClassName('par')

function paragraphSquare(event4){
    let num = parseInt(event4.target.textContent)
    let square = num * num
    let squareText = document.createTextNode(square)
    event4.target.innerHTML = ' '
    event4.target.appendChild(squareText)
}
for (let i=0; i < paragraphs.length; i++){
    paragraphs[i].addEventListener('click', paragraphSquare)
}

// Завдання 8
let inputs = document.getElementsByClassName('inp')

function inputBlur(event5){
    let values = event5.target.value
    let lenghts = event5.target.getAttribute('data-length')
    if (values.length == lenghts){
        event5.target.classList.remove('no');
        event5.target.classList.add('yes')
    } else {
        event5.target.classList.remove('yes');
        event5.target.classList.add('no')
    }
}
for (let i=0; i < inputs.length; i++){
    inputs[i].addEventListener('blur', inputBlur)
}

// Завдання 9
let divs = document.getElementsByClassName('divs')

function paintRed(event){
    event.target.classList.add('red');
    event.target.classList.remove('green');
    event.target.removeEventListener('click', paintRed);
    event.target.addEventListener('click', paintGreen);
}
function paintGreen(event) {
    event.target.classList.add('green');
    event.target.classList.remove('red');
    event.target.removeEventListener('click', paintGreen);
    event.target.addEventListener('click', paintRed);
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', paintRed);
}

