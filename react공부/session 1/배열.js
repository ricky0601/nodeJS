//비원식 자료형
//집합
//동시에 여러개 값 가질수 있다...

//1번 : 생성자 방법
let arr4 = new Array();

//2번 : 배열 리터럴 방법 보통 이거씀
let arr3 = [1, "name", true, null, undefined, {}, [], function(){}];
console.log(arr3); //자료형이 달라도 문제 없음

let arr = [1,2,3,4,5];
console.log(arr);   //[1,2,3,4,5]
console.log(arr[0]); //[1]
console.log(arr[5]); //undefinded

arr.push(6);
console.log(arr); //[1,2,3,4,5,6] push는 배열에 마지막에 넣음

console.log(arr.length); //arr의 배열크기 배열에 추가되면 자동으로 증감


