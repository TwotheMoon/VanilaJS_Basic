

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // join(): 배열 요소들 string으로 반환
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // "원하는 구분 값" 으로 배열 생성
    const result = fruits.split(",");
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];          // 원본을 손상시키지 않고
    const result = [...array.slice(2, 5)]; // slice("시작인덱스", "끝인덱스 + 1" ) 만 가지고 새 배열 생성
    console.log(result);                   // splice("시작인덱스", 끝인덱스 + 1) 잘라내기
    console.log(array);
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

// Q5. find a student with the score 90
{
    const result = students.find((students) => { // 각 항목마다 callback 함수 적용 (itme, index)번호를 가져오는데 
        return students.score === 90;        // item.score === 90 인 녀석만 콜백
    });
    console.log(result);
}
console.clear();
// Q6. make an array of enrolled students            // fileter (참인 값만 가지고 새 배열 생성)
{
    const reuslt = students.filter((students) => {
        return students.enrolled === true;
    })
    console.log(reuslt);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((students) => {   // 각각의 아이템을 원하는 함수로 조작 하여 출력
        return students.score;
    })
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((students) => {  // 각각 배열속 콜백 함수 내용이 있는지 true / false
        return students.score < 50;
    })
    console.log(result);
}

console.clear();
// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => {       // 이전 값 다음 값 불러와 누적
        return prev + curr.score;           // 결국 이전 값에 다음값 점수를 계속 더해서 리턴 하면 총 스코어 출력
    }, 0) // 기본값 0
    console.log(result / students.length);   // 평균값 구하기
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((students) => students.score)  // 각각의 학생의 스코어값만 빼서 배열 을 새로 만들고
        .filter((score) => score >= 50)     // 그 스코어에서 값이 50 이상만,
        .join();                            // 스트링으로 출력
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'  낮은점수 부터 정렬
{
    const result = students.map((students) => students.score)
        .sort((a, b) => a - b)   // 이전 배열인덱스, 다음 인덱스를 가져와 서 -값이 나오면 솔팅
        .join();
    console.log(result);
}
