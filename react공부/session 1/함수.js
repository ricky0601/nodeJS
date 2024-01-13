//똑같은 동작을 하는 코드들 묶는거
//직사각형 면적 구하고 콘솔 출력
/*
let width1 = 10;
let height1 = 20;

let area1 = width1 * height1;

console.log(area1);

let width2 = 30;
let height2 = 15;

let area2 = width2 * height2;

console.log(area2);
*/
/*
function getArea(width, height) {
  let area = width * height;
  console.log(area);
} // 함수 선언식, 함수 선언 방식의 함수 생성


// 함수 호출
console.log("함수 실행 완료");
*/
let count = 1; // 밖에서 선언된 변수 -> 전역변수 및 글로벌변수

function getArea(width, height) {
  console.log(count); //정상적으로 전역변수 출력
  let area = width * height; //area 변수는 함수 안에서 선언
  return area;
}

let area1 = getArea(100, 200);
