/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value이다
 * 2) 객체는 copy by reference다.
 */

let original = '안녕하세요.'
let clone = original;

console.log(original);
console.log(clone);

clone += ' 원딜러입니다.'
console.log("-------------------")
console.log(original);
console.log(clone)

let originalObj = {
    name: '이민형', 
    team: 'T1',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log("-------------------")

originalObj['tema'] = '가족';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

console.log("-------------------")

originalObj = {
    name: '김아름',
    group: '집'
}
cloneObj = {
    name: '김아름',
    group: '집'
}
console.log(originalObj === cloneObj);

const gumayusi1 = {
    name : '이민형', 
    team : 'T1'
}
const gumayusi2 = gumayusi1;
const gumayusi3 = {
    name : '이민형', 
    team : 'T1'
}

console.log("-------------------")

// true
console.log(gumayusi1===gumayusi2);

// false
console.log(gumayusi1===gumayusi3);
// false
console.log(gumayusi2===gumayusi3);

console.log("-------------------")

/**
 * Spread Operator
 */

const gumayusi4 = {
    ...gumayusi3
}

console.log(gumayusi4);

console.log(gumayusi4 === gumayusi3);

const gumayusi5 = {
    year: 2003,
    ...gumayusi3,
}

console.log(gumayusi5);

const gumayusi6 = {
    name : 'dammiya',
    ...gumayusi3,
}

console.log(gumayusi6);

const gumayusi7 = {
    ...gumayusi3,
    name: 'melong'
}
console.log(gumayusi7);

console.log("-------------------")

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10, 
];
console.log(numbers2);