
"use strict";

const arry = ["apple", "mango", "melon", "orange"];

console.log(arry[0]);
console.log(arry[arry.length - 1]);

arry.forEach((arry) => {
    console.log(arry);
})

console.clear();

// push: 제일 뒤 추가
// pop: 제일 뒤 제거

// unshift: 제일 앞에 추가
// shift: 제일 앞에 제거

// splice: (몇번째부터, 까지제거, 대신 추가할요소): 제거
arry.splice(1, 1)
console.log(arry);

// concat: 배열 합치기
const arry2 = ["waterMelon", "carrot"];
const newArry = arry.concat(arry2);
console.log(newArry);

// indexOf("찾을 요소"): 인덱스값 찾기
console.log(newArry.indexOf("carrot"));

//includes("찾을 요소"): boolean 으로 리턴
console.log(newArry.includes("carrot"));

// lastIndexOf: 중복요소 있을때 제일 마지막에 있는 요소 인덱스 출력
