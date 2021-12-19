"use strict";

// async & await
// api 불러올때 많이 사용했었어

// 1. async 자동으로 프로미스 설정
async function fetchUser() {
    // 백엔드에서 api 받아오는데 10초 걸리는 함수 (가정)
    return ("ellie");
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return "사과";
}

async function getBanana() {
    await delay(1000);
    return "바나나";
}

async function pickFruits() {
    const apple = await getApple();    // 사과를 받기 까지 1초 기다려
    const banana = await getBanana();  // 바나나를 받기 까지 1초 기다려
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. 병렬처리를 위한 useful promise
function pickAllFruits() {
    return Promise.all([getApple().getBanana()])  // 병렬적으로 받아와 배열로 담기
        .then((fruits) => fruits.join(' + ')); // 스트링 처리
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);