// 함수 표현삭 차이

console.log(helloB());

let helloA = function () {
  return "안녕하세요 여러분";
}; // 함수 표현식

console.log(helloA());

function helloB() {
  return "안녕하세요 여러분";
} // 함수 선언식

//화살표 함수

let helloC = () => {
  return "안녕하세요 여러분 22";
};

console.log(helloC());
