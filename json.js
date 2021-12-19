// Object to JSON

let json = JSON.stringify(true);
console.log(json);

// 배열
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// 객체 *가장 많이 보임
const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: Date.now(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
}

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 값만 json 변환 가능
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

// 좀더 세밀하게 컨트롤
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "ellie" : value;
});
console.log(json);

console.clear();


// JSON to Object
// JSON 객채로 가져올때 모든 데이터는 string
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);