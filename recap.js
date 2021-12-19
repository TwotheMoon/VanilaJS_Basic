// 함수 인자로 전달

function doSomeThing(add) {
    console.log(add);
    const result = add(1, 2);
    console.log(result);
}

function add(a, b) {
    return a + b;
}

// 함수만 전달 if add(1, 2) 값을 넣어버리면 계산된 3이 날아가는 꼴
//doSomeThing(add);

const addFun = add;
addFun(1, 2);
