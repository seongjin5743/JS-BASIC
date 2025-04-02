// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'seongjin'

// 변수 선언
var variable
variable = 10

// ES6 이전
var myV1 = 1

// ES6 이후
let myV2 = 2
const myV3 = 3

myV1 = 10
var myV1 = 100

myV2 = 20
// let myV2 = 100 let은 재선언이 불가능

// myV3 = 30 const는 재할당, 재선언이 불가능
// var myV3 = 100

let a = 'qwer'
let b = 10
let c = true
let d = [1,2,3]
let e = {
    'apple':'사과'
}
// console.log(a,b,c,d,e)

// ===은 두 값이 서로 같은지 확인해 true or false 반환, 파이썬에서 is
let num = 10
// console.log(num === 20)
// console.log(num !== 20)

let myArray = []
myArray.push(10)
myArray.push(20)
// console.log(myArray)
myArray.pop()
// console.log(myArray[0])

let myObject = {
    'apple': '사과'
}
// console.log(myObject.apple)
myObject.grape = '포도'
// console.log(myObject)

// 조건문
if (a === b){
    // console.log(c)
}
else if (b === c){
    // console.log(d)
}
else {
    // console.log(e)
}

// 반복문
// while문
let i = 0
while (i < 5){
    // console.log(i)
    i++
}
// for1문
for (let i = 0; i < 5; i++){
    // console.log(i)
}
// for2문
let arrayA = ['a', 'b', 'c']
for (let i = 0; i < arrayA.length; i++){
    // console.log(arrayA[i])
}
// for in문
for (let item in arrayA){
    // console.log(arrayA[item])
}
// for of문
for (let item of arrayA){
    // console.log(item)
}
// for Each문
arrayA.forEach(function(item, index, array){
    // console.log(item, index, array)
})

// 함수
function multiply(num1, num2){
    return num1 * num2
}
// console.log(multiply(4, 2))

// 함수 표현식
let multiply2 = function(num1, num2){
    return num1 * num2
}
// console.log(multiply2(4, 2))

// 화살표 함수
let multiply3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply3(4, 2))

// 화살표 함수 생략1
// {} 안에 코드가 return 하나면 {}, return 생략 가능
let multiply4 = (num1, num2) => num1 * num2
// console.log(multiply4(4, 2))

// 화살표 함수 생략2
// () 안에 매개변수가 하나면 () 생략 가능
let cube = num => num ** 3
// console.log(cube(10))

// 이벤트(onclick)
// document.querySelector('html').onclick = function() {
//     alert('hello!')
// }

// 이벤트(eventListener)
let myh1 = document.querySelector('h1')
// <element>.addEventListener(행동(무슨 일이 일어났을 때), 함수(무슨 행동을 할지))
myh1.addEventListener('click', function(e){
    alert('seongjin')
    console.log(e.clientX, e.clientY)
})

let myimg = document.querySelector('img')
myimg.addEventListener('click', function(e){
    // myimg.setAttribute('src', 'images/배경.jpg')
    let src = myimg.getAttribute('src')
    if (src ==='images/배경.jpg'){
        myimg.setAttribute('src', 'images/firefox-icon.png')
    }
    else {
        myimg.setAttribute('src', 'images/배경.jpg')
    }
})

let myinput = document.querySelector('input')
myinput.addEventListener('keydown', function(e){
    console.log(e.key)
    console.log(myinput.value)
})