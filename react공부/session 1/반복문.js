//반복은 되게 중요

//1
for ( let i = 1; i<=100 ; i++ ){ //(초기식(반복의 주체가 되는 변수 선언) ; 조건식 ; 증감식)
    //반복 수행할 명령
    console.log("한동건");
}

//배열 순회
const arr = ['a','b','c'];
for (let i = 0 ; i < arr.length; i++){
    console.log(arr[i]); //-> a b c
}

//객체 순회

let person = {
    name : "한동건",
    age : 25,
    tall : 175
};

const personKeys = Object.keys(person);
const val = Object.values(person);
console.log(personKeys); //-> [name, age, tall]

for ( let i=0 ; i<personKeys.length ; i++){
    console.log(personKeys[i]);

    const curKey = personKeys[i];
    const curValue = person[curLey];

    console.log(`${curKey} : ${curValue}`);
}
for ( let i=0 ; i<val.length ; i++){
    console.log(val[i]);
}