// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'seongjin'

// 변수 선언
var variable // var로 변수 선언
variable = 10 // 변수에 값 할당

// ES6 이전 방식의 변수 선언
var myV1 = 1

// ES6 이후 방식의 변수 선언
let myV2 = 2 // let: 재할당 가능, 재선언 불가능
const myV3 = 3 // const: 재할당, 재선언 모두 불가능

// var는 재선언 가능
myV1 = 10
var myV1 = 100

// let은 재선언 불가능
myV2 = 20
// let myV2 = 100 // 오류 발생

// const는 재할당, 재선언 모두 불가능
// myV3 = 30 // 오류 발생
// var myV3 = 100 // 오류 발생

// 다양한 데이터 타입 선언
let a = 'qwer' // 문자열
let b = 10 // 숫자
let c = true // 불리언
let d = [1, 2, 3] // 배열
let e = { 'apple': '사과' } // 객체
// console.log(a, b, c, d, e) // 데이터 출력

// === 연산자는 두 값이 같은지 확인 (엄격한 비교)
let num = 10
// console.log(num === 20) // false
// console.log(num !== 20) // true

// 배열 사용 예제
let myArray = []
myArray.push(10) // 배열에 값 추가
myArray.push(20)
// console.log(myArray) // [10, 20]
myArray.pop() // 마지막 값 제거
// console.log(myArray[0]) // 첫 번째 값 출력

// 객체 사용 예제
let myObject = {
    'apple': '사과'
}
// console.log(myObject.apple) // '사과' 출력
myObject.grape = '포도' // 객체에 새로운 속성 추가
// console.log(myObject) // { apple: '사과', grape: '포도' }

// 조건문 예제
if (a === b) {
    // console.log(c)
} else if (b === c) {
    // console.log(d)
} else {
    // console.log(e)
}

// 반복문 예제
// while문
let i = 0
while (i < 5) {
    // console.log(i)
    i++
}

// for문
for (let i = 0; i < 5; i++) {
    // console.log(i)
}

// 배열 반복 예제
let arrayA = ['a', 'b', 'c']
// for문
for (let i = 0; i < arrayA.length; i++) {
    // console.log(arrayA[i])
}
// for-in문 (인덱스 기반)
for (let item in arrayA) {
    // console.log(arrayA[item])
}
// for-of문 (값 기반)
for (let item of arrayA) {
    // console.log(item)
}
// forEach문
arrayA.forEach(function (item, index, array) {
    // console.log(item, index, array)
})

// 함수 선언
function multiply(num1, num2) {
    return num1 * num2
}
// console.log(multiply(4, 2)) // 8

// 함수 표현식
let multiply2 = function (num1, num2) {
    return num1 * num2
}
// console.log(multiply2(4, 2)) // 8

// 화살표 함수
let multiply3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply3(4, 2)) // 8

// 화살표 함수 간소화 1
// {}와 return 생략
let multiply4 = (num1, num2) => num1 * num2
// console.log(multiply4(4, 2)) // 8

// 화살표 함수 간소화 2
// 매개변수가 하나일 때 () 생략 가능
let cube = num => num ** 3
// console.log(cube(10)) // 1000

// 이벤트(onclick) 예제
// HTML 문서의 <html> 태그를 클릭하면 alert 창 표시
// document.querySelector('html').onclick = function() {
//     alert('hello!')
// }

// 이벤트(eventListener) 예제
let myh1 = document.querySelector('h1')
// h1 태그를 클릭하면 alert 창과 클릭 좌표 출력
myh1.addEventListener('click', function (e) {
    alert('seongjin') // 'seongjin' 메시지 출력
    console.log(e.clientX, e.clientY) // 클릭 좌표 출력
})

// 이미지 클릭 이벤트
let myimg = document.querySelector('img')
// 이미지를 클릭하면 src 속성을 변경하여 이미지 토글
myimg.addEventListener('click', function (e) {
    let src = myimg.getAttribute('src') // 현재 src 속성 값 가져오기
    if (src === 'images/배경.jpg') {
        myimg.setAttribute('src', 'images/firefox-icon.png') // 이미지 변경
    } else {
        myimg.setAttribute('src', 'images/배경.jpg') // 원래 이미지로 변경
    }
})

// 키보드 입력 이벤트
let myinput = document.querySelector('input')
// 키를 누를 때마다 입력된 키와 현재 input 값을 출력
myinput.addEventListener('keydown', function (e) {
    console.log(e.key) // 누른 키 출력
    console.log(myinput.value) // 현재 input 값 출력
})

// 비동기 처리 예제
const URL = 'https://jsonplaceholder.typicode.com/todos/1' // API URL

// 비동기 처리 방법 1: Promise 사용
let response = fetch(URL)
    .then(json => response.json()) // 데이터를 JSON으로 변환
// console.log(response) // 변환된 데이터 출력

// 비동기 처리 방법 2: async/await 사용
async function fetchTodo(url) {
    let res = await fetch(url) // 데이터를 가져옴
    let result = await res.json() // JSON으로 변환
    // console.log(result) // 변환된 데이터 출력
}
// console.log(fetchTodo(URL)) // fetchTodo 함수 호출

// li 태그 클릭 이벤트
let liarray = document.querySelectorAll('li')
// 각 li 태그를 클릭하면 클릭된 요소를 출력
liarray.forEach(function (item) {
    item.addEventListener('click', function (e) {
        console.log(e.target) // 클릭된 li 요소 출력
    })
})