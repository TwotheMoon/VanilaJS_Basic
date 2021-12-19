"use strict";

// Promise 비동기적 처리를 할때 콜백 함수 대신 사용
// State: pending -> fulfilled or rejected
// Producer vs Consumer;

// 1. 프로미스 선언        // 성공시 리턴, 실패시 리턴
const promise = new Promise((resolve, reject) => {
    // 무거운 작업들 코드 실행 (네트워크, 파일 읽기) 비동기적 처리
    console.log("doing something..."); // 프로미스가 만들어진 순간 바로 실행
    setTimeout(() => {
        resolve("ellie"); // 일을 잘 마무리하면 ellie 값 전달
        reject(new Error("no network"));
    }, 2000);
});

// 2. 프로미스 사용
// "ellie"
promise
    .then((value) => {          // 성공시 호출
        console.log(value);
    })
    .catch((error) => {         // 실패시 try - catch
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });                 // 성공실패 유무 상관없이 실행

// 3. 프로미스 체이닝
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then((num) => console.log(num));

// 오류 처리
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => { // 에러 발생
        setTimeout(() => reject(new Error(`${hen} => 달걀`)), 1000);
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });

getHen()
    .then((hen) => getEgg(hen))
    .then((egg) => cook(egg))
    .then((meal) => console.log(meal));


getHen() // 값을 바로 인자로 사용할 경우 축약 가능
    .then(getEgg)
    .catch((error) => {
        return '빵'; // 달걀에서 오류가 났을때 대신 투입
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);