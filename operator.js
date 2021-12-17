"use strict";

// Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // counter = 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`); // counter = 4

// Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or) : 하나라도 true를 반환하면 true 그런데 true를 만나면 뒤에는 연산X
//   (만약 true면 value1에서 멈춤)     무거운 연상이 담긴 코드는 뒤로 배치 하자
console.log(`or: ${value1 || value2 || check()}`);

// || (or) :모두 true를 반환하면 true 그런데 false를 만나면 뒤에는 연산X
//   (만약 false면 value1에서 멈춤)     무거운 연상이 담긴 코드는 뒤로 배치 하자
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('a');
    }
    return true;
}

// react에서 궁금했던 && 조건
// nullObj && nullObj.something 널오브젝트가 null이 아니면 뒤에것 연산 반환
// nullObj ? nullObj.something : null
// if (nullObj != null) {
//     nullObj.something;
// }

// Equality
// == 와 === 차이
// === 타입까지 같은지 확인
const stringFive = '5'
const numberFive = 5;
console.log(stringFive == numberFive) // true
console.log(stringFive === numberFive) // false

// object 는 메모리에 올라갈때 주소(참조값) 만 저장
const moon1 = { name: "moon" }  // ref1{name: moon}
const moon2 = { name: "moon" }  // ref2{name: moon}
const moon3 = moon1;            // ref1{name: moon}
console.log(moon1 == moon2);
console.log(moon1 === moon2);
console.log(moon1 === moon3);

// if, else if, else
const name = "ellie";
if (name === "ellie") {
    console.log(`Welcome ${name}`);
} else if (name === "coder") {
    console.log(`You are amazing coder`);
} else {
    console.log('unkwnon');
}

// 삼항 연산자
console.log(name === "ellie" ? "Welcome" : "You are amzing coder");

// loop
let i = 3;
while (i > 0) { // 조건이 거짓일때까지 반복
    console.log(`while: ${i}`);
    i--;
}

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

// break, continue (항상 헷갈려 하던거)
// break 조건을 만나면 멈춰
// continue 조건을 만나면 스킵하고 계속 진행

// 1번 문제 짝수만 출력
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

//2번 문제 8에서 멈추기
for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 8) {
        break;
    }
}