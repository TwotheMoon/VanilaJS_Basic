// ES5에서 제공한 기능
// 타입스크립트처럼 디버깅 제공
"use strict";

// Variable 변수
// let (ES6 추가)
let name = "moon";
console.log(name);
name = "hello";
console.log(name);

// block level scope
// block 안에서 작성한 코드는 블록 밖에서 사용X
let globalName = "global name";    // 전역 변수
{
    let name = "moon";
    console.log(name);
    console.log(globalName);
}
console.log(name);          // 사용 불가
console.log(globalName);

// var 쓰면 안되는 이유
// var hoisting
// 어디에 선언했냐 상관없이 항상 제일 위로 선언을 끌어올려주는 현상
// 블록 스코프가 아님
age = 4;
console.log(age);
var age;

// constants 상수 // 값이 변경이 안되기에 보안, 쓰레드 안정석, 휴면에러 방지
const maxNumber = 5;
console.log(maxNumber);

// Variable types
// 자바 스크립트에서는 funtion 도 데이터 타입,
//그래서 함수에 인자로 담을 수 도 있고 리턴 타입으로도 함수를 리턴 할 수 있다.

// boolean
// false: 0, null, undefined, NaN, ''
// true: any ather value

// null
let nothing = null;

// undefinded
let x;
console.log(`value: ${x}, type: ${typeof (x)}`);

// symbol 고유한 식별자가 필요할때 사용하는 오브젝트
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const symbol3 = Symbol.for("id");
const symbol4 = Symbol.for("id");
console.log(symbol1 === symbol2); // true

// object 객체
const moon = { name: "moon", age: "20" };
moon.age = "21";
console.log(moon.age);

// Dynamic typing 언어 : 타입을 타지 않는다 / 런타임에서 타입 자동 할당
// 그래서 타입스크립트가 생겨남
let text = "hello";
console.log(`value: ${text}, type: ${typeof (text)}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof (text)}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof (text)}`); // string + string = "75"
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof (text)}`); // 자동으로 number타입 변환 해서 연산 진행

