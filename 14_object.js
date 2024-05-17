/**
 * Object 객체
 */

// key : value pair
let guma = {
    name : '이민형',
    team : 'T1', 
    nickname : function(){
        return `${this.name}의 소환사명은 gumayusi 입니다.`;
    }
}

console.log(guma);
console.log(guma.name);
console.log(guma['name']);

const key = 'name';

console.log(guma[key]);

console.log(guma.nickname());

const nameKey = 'name';
const nameValue = '이민형';

const teamKey = 'team';
const teamValue = 'T1';

const guma2 = {
    [nameKey]: nameValue,
    [teamKey]: teamValue,
    dance: function(){
        return `${this.name}의 팀은 ${this.team}입니다.`
    }
}
console.log("guma2" , guma2);
console.log(guma2.dance());

guma2['lane'] = 'Bot';
console.log("guma : " ,guma2);

delete guma2['lane'];
console.log(guma2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경할 수 없다
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다. 
 * 
 */

const inno = {
    name : '이신형',
    tema : '무소속'
}
console.log(inno);

// inno = {}
inno['종족'] = 'Terran';
console.log(inno)

/** 
 * 모든 키값 다 가져오기 
 * */
console.log(Object.keys(inno));

/** 
 * 모든 밸류값 다 가져오기 
 * */
console.log(Object.values(inno));

const name = '이신형';

// key값과 value 값이 같을 경우 아래와 같이 하나만 사용할 수 있다. 
const guma3 = {
    name: name,
    name
}

console.log(guma3);
