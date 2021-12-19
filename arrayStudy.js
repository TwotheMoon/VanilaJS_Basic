

// Q1. 배열을 스트링으로 변환 하세요
{
    const fruits = ['apple', 'banana', 'orange'];

    const result = fruits.join();
    console.log(result);
}

// Q2. 스트링을 배열로 변환 하세요
{
    const fruits = '🍎, 🥝, 🍌, 🍒';

    const result = fruits.split(',');
    console.log(result);
}

// Q3. 배열을 역순으로 변환 하세요: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];

    const result = array.reverse();
    console.log(result);
}

// Q4. [3, 4, 5] 새 배열 만들기
{
    const array = [1, 2, 3, 4, 5];

    const result = array.slice(2);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. score이 90인 학생 찾기
{
    const result = students.find((students) => {
        return students.score === 90;
    })
    console.log(result);
}

// enrolled 한 학생만 배열 생성  
{
    const result = students.filter((students) => {
        return students.enrolled === true;
    })
    console.log(result);
}

// Q7. 학생 score 정보만 담긴 배열 만들기
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((students) => {
        return students.score
    });
    console.log(result);
}

// Q8. score가 50점 미만 인 학생 출력
{
    const result = students.find((students) => students.score < 50);
    console.log(result);
}

// Q9. score 평균 값 구하기
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. score 점수를 스트링으로 변환
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((students) => students.score).join();
    console.log(result);
}
