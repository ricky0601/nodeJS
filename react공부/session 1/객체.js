//let person = new Object();
//객체 생성자 방식

let person = {
    //key: "value" -> 이게 객체가 갖는 데이터 이런식으로 저장 -> 프로퍼티 (혹은 객체 프로퍼티)
    key: "value",
    key1: 1234,
    key2: true,
    key5: function(){}, //타입 상관없이 ㄱㅊ 
    name: "한동건",
    age: 25
    //단 키 이름은 무조건 문자열, 키 이름이 중복될 경우 문제는 안뜨지만 하나가 무시됨
};
//객체 리터럴 방식 -> 짧아서 주로 이거 사용

console.log(person.name); //->점 표기법 = key1의 value를 콘솔에 출력
console.log(person["name"]); //-> 괄호 표기법 반드시 "" 안에 문자열
const name = "name";
console.log(person[name]); //동적인 파라미터에서 사용 용이

console.log(getPropertyValue("name"));

function getPropertyValue (key){
    return person[key];
}

let person2 = { //이때 person2를 let에서 const로 바꾸어도 문제가 없음
    name : "한동건",
    age : 25,   //멤버
    say : function (){
        console.log(`안녕 나는 ${this.name}`);
    } //메서드
}

person2.location = "한국";
person["gender"] = "남성"; //프로퍼티 추가

person.name = "한동건 A"; //프로퍼티 수정
person["age"] = 40;

delete person2.age;
delete person2["name"]; //프로퍼티 삭제 근데 이건 메모리까지 지우지는 않음
person.name = null; //차라리 이게 나음

console.log(person2);

person2.say();

//없는 프로퍼티 확인
console.log(`name : ${"name" in person2}`); // out -> name : true
console.log(`gender : ${"gender" in person}`); // out -> gender : false