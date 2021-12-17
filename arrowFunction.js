"use strict";

// Function

// Parameters
function changeName(obj) {
    obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// Default parameters (ES6 추가)
function showMessage(message, from = "unknown") {
    console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// Rest parameters (ES6 추가)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // or
    for (const arg of args) {
        console.log(arg);
    }

    // or
    args.forEach((arg) => console.log(arg));

    // or
    args.map((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// Local scope 하나만 기억! "밖에서는 안이보이지 않고 안에서만 밖이 보인다."
let globalMessage = "global"; // 전역변수
function printMessage() {
    let message = "hello";
    console.log(message); // 지역변수
    console.log(globalMessage);
}
printMessage();

// return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);

// Function expression
const print = function () {  // 익명함수
    console.log("print");
};
print();
const printAgain = print;
printAgain();

// Callback 콜백 함수 : 필요 상황에 한번더 불러와 사용
function randomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}

// Arrow function 익명 함수
const printYes = () => console.log("yes");
const printNo = () => console.log("no");

randomQuiz("love you", printYes, printNo);

//const add = (a, b) => a + b;
//console.log(add(1, 2));

// ***** 함수 선언과 동시에 호출  ******

(function hello() {
    console.log("부름과 동시에 호출");
})();

// 퀴즈
// function calculate(command, a, b)
// command: add, sub, div, mult, remain

// 함수 리턴 조건 추가
function calculate(command, a, b) {
    switch (command) {
        case "add": return add(a, b);
        case "sub": return sub(a, b);
        case "div": return div(a, b);
        case "mult": return mult(a, b);
        case "remain": return remain(a, b);
        default: return "???";
    }
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mult = (a, b) => a * b;
const remain = (a, b) => a % b;

console.log(calculate("div", 2, 4));


