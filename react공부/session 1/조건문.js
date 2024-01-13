//if & else if

let a = 0;

if (a >= 7) {
  console.log("5 이상입니다.");
} else if (a >= 5) {
  console.log("5 이상입니다.");
} else if (a >= 4) {
  console.log("4 이상입니다.");
} else {
  console.log("5 이하입니다.");
}

let country = "ko";

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  default:
    console.log("미분류");
    break;
}