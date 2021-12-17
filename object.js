"use strict";

//Object = { key : value}; 키와 값의 집합체
const obj1 = {};
const obj2 = new Object();

const ellie = {
    name: "ellie",
    age: 4,
}

function print(person) {
    console.log(person.name, person.age);
}
print(ellie);

// JS는 런타임때 데이터 타입이 정해지기에 객체 생성 이후 수정해도 반영 됨
ellie.hasJob = true;
console.log(ellie.hasJob);

// 삭제도 가능
delete ellie.hasJob;

// 객체 내 값 접근법
console.log(ellie.name);
console.log(ellie['name']);

// 보통은 . 사용 하지만 동적으로 키 값을 가져올떄 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 반복적으로 객체를 만들어야 할때 함수를 이용해보자
function makePerson(name, age = 20) {
    return {
        // name: name 매개변수와 이름 동일하면 생략가능
        name,
        age,
    }
}
const person1 = makePerson("moon");
console.log(person1);

// in operator 해당 객체 안에 키가 있는지 확인
console.log('name' in ellie);

console.clear();

// for (key in ellie) {
//     console.log(key);
// }

//for 향상된 포문 js 버전
// const array = [1, 2, 3, 4];
// for (value of array) {
//     console.log(value);
// }

// Cloning 그 유명한 객체 복사
const user = { name: "ellie", age: '20' };
const user2 = user; // user래퍼런스 값 복사
user2.name = "coder"; // 만약 user2객체에 이름을 바꾸면
console.log(user); // user.name = coder

// 참조 복사가 아닌 진짜 복사 하는법
// assign()
console.clear();
// {} 텅빈 객체에 user 값 복사
const user4 = Object.assign({}, user);
console.log(user4);