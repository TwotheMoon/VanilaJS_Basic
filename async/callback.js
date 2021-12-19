"use strict";

// JavaScript 동기적이다
// hoisting: var, function 선언시 자동으로 제일 위로 올라감
console.log('1');
setTimeout(() => {  // setTImeout함수 안에 인자로 또 다른 함수 전달 그리고 나중에 내 함수를 나중에 callback해줘 콜백 함수
    console.log('2');
}, 1000);
console.log('3');

// 동기적 콜백
function printImmediately(print) { // 선언시 호이스팅 맨위로 올라감
    print();
}
printImmediately(() => console.log('hello')); // 함수 콜 바로 실행

// 비동기적 콜백
function printWithDelay(print, timeout) {// 선언시 호이스팅 맨위로 올라감
    setTimeout(print, timeout);      // setTimeout(() => console.log("async callback"), 2000);
}
printWithDelay(() => console.log("async callback"), 2000); // 함수 안에 또 함수는 비동기적

console.clear();
// 콜백 지옥
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        // 가상에 백엔드에게서 로그인 했을때
        setTimeout(() => {
            if (
                (id === "ellie" && password === "dream") ||
                (id === "coder" && password === "academy")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "ellie") {
                onSuccess({ name: "ellie", role: "admin" });
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => { alert(`Hello ${userWithRole.name}, you ${userWithRole.role}`) },
            (error) => { console.log(error) },
        )
    },
    (error) => { console.log("error") },
)

