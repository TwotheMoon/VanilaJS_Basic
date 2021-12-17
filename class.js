"use strict";

// class 기본적으로 템플릿 ES에서 추가 
// prototype 기반
class Person {

    //생성자
    constructor(name, age) {
        //필드
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
const ellie = new Person("ellie", 25);
console.log(ellie.name);
ellie.speak();

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // getter setter (캡슐화)
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User("Steve", "Jobs", -1);
console.log(user1);

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();

// static
class Article {
    static publisher = "Moon cording";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
}

const article1 = new Article(1);
const article22 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 클래스 상속 (다형성)
class Rectangle extends Shape { }
class Trriangle extends Shape {

    // 오버라이딩
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
const triangle = new Rectangle(20, 20, "red");
rectangle.draw();


// instanceof 클래스의 상속 여부를 확인
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Trriangle);  // true
console.log(triangle instanceof Shape);      // true
console.log(triangle instanceof Object);     // true