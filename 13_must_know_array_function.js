/**
 * Array Functions
 * */

let t1 = [
    '제우스',
    '오너',
    '페이커',
    '구마유시',
    '케리아',
    '로치'
]

// console.log(t1);

// push()
t1.push("톰");
console.log("push", t1);
console.log("=======================")


// pop() 마지막 제외
console.log("pop()", t1.pop()); 
console.log(t1);
console.log("=======================")

// shift() 맨 앞에 데이터 제외
console.log("shift", t1.shift());
console.log(t1);
console.log("=======================")

// unshift() 맨 앞에 데이터 추가
console.log("shift", t1.unshift('제우스'));
console.log(t1);
console.log("=======================")

// splice() 원하는 데이터를 잘라서 제공. 영구적으로 자름.
console.log("splice", t1.splice(0, 3)); 
console.log(t1);
console.log("=======================")

t1 = [
    '제우스',
    '오너',
    '페이커',
    '구마유시',
    '케리아',
]

// concat() concat이 추가된 체 일회성으로 출력됨. 데이터에 추가되지 않음.
console.log("concat", t1.concat('로치'));
console.log(t1)
console.log("=======================")

// slice() 원하는 데이터를 단발적으로 잘라서 제공
console.log("slice", t1.slice(0, 3)); 
console.log(t1);
console.log("=======================")

// spread operator
let t2 = [
    ...t1,
]

console.log("t2", t2);

let t3 = [
    t1,
]

console.log("t3", t3);

console.log("=======================")

let t4 = t1;

console.log("t4", t4);
console.log(t4 === t1);

// console.log([...t1] === t1);
console.log("=======================")

// join()
console.log(t1.join());
console.log(t1.join('/'));
console.log(t1.join(', '));
console.log("=======================")

// sort() 오름차순 / reverse() 내림차순
console.log(t1.sort());
console.log(t1.reverse());
console.log("=======================")

let numbers = [1,4,6,2,3,9];
console.log(numbers);

// a, b를 비교했을 때
// 1. a를 b보다 나중에 정렬하려면(뒤) 0보다 큰 숫자를 반환
// 2. a를 b보다 먼저 정렬하려면(얖) 0보다 작은 숫자를 반환
// 3. 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
})
console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);
console.log("=======================")

// map() 반복문 foreach 같은 것
console.log(t1.map((x)=> x));
console.log(t1.map((x)=>`t1 : ${x}`));

console.log(t1.map((x)=>{
    if(x === '페이커'){
        return `t1 : ${x}`
    } else {
        return x;
    }
}))

console.log(t1);

// filter() 값이 true일 경우에만 filtering 됨
numbers = [1,4,6,2,3,9];

console.log(numbers.filter((x)=> x % 2 === 0));

// find() 원하는 값의 첫번째만 찾아서 반환
console.log(numbers.find((x) => x % 2 ===0));

// findIndex() 원하는 값의 첫번째의 index 값을 반환
console.log(numbers.findIndex((x) => x % 2 ===0));

// reduce()
// redece() 함수를 사용해서 t1 변수에 있는 모둔 스트링 값들의 길이를 더해서 반환하라
console.log(numbers.reduce((p, n) => p+n, 0));
// 1. 초기값 0이 p에 입력
// 2. numbers 어레이의 첫번째 값은 1이 n에 입력된다
// 3. p+n 즉, 0+1의 결과값인 1이 반환된다
// 4. 3에서 반환한 값(1)이 p에 입력된다
// 5. 어레이의 두번째 값인 4가 n에 입력된다.
// 6. p+n 즉, 1+4의 결과값인 5반 반환된다. 
// 7. 반복 

// reduce()
// redece() 함수를 사용해서 t1 변수에 있는 모둔 스트링 값들의 길이를 더해서 반환하라
let len = 0
let length = t1.map(x =>
    len = x.length
)

console.log(length.reduce((p, n) => p+n, 0));