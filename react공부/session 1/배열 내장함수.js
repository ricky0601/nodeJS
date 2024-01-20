const arr = [1,2,3,4];
//const newArr= [];

for (let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}
arr.forEach((elm) => console.log(elm * 2)); // 1,2,3,4

arr.forEach(function(elm){
    newArr.push(elm * 2);
});
// =
const newArr = arr.map((elm)=> {
    return elm*2 ;
});

let number = 3;

arr.forEach((elm) =>{
    if (elm === number){
        console.log(true);
    }
});

// =

console.log(arr.includes(number)); //주어진 배열에 넘어온 인자가 있는지

//주어진 배열에 존재하면 index까지 출력하는

console.log(arr.indexOf(number));

const arr2 = [
    { color : "red" },
    { color : "black" },
    { color : "blue" },
    { color : "green" }
];
console.log(arr.findIndex((elm) => elm.color==="green" ));

//아래는 요소 찾기
const element = arr2.find((elm) => {
    return arr2.color === "blue";
});

const arr3 =[
    { num : 1, color : "red" },
    { num : 2, color : "black" },
    { num : 3, color : "blue" },
    { num : 4, color : "green" },
    { num : 5, color : "blue" }
]
//배열을 필터링 해보자

console.log(arr.filter((elm) => elm.color === "blue"));

//배열 자르기

console.log(arr.slice(0,2)); // -> 0 , 1
console.log(arr.slice(0,4)); // -> 0 , 1 , 2 , 3

//배열 합치기

const arrsum1 = [
    { num : 1, color : "red" },
    { num : 2, color : "black" },
    { num : 3, color : "blue" }
];
const arrsum2 = [
    { num : 4, color : "green" },
    { num : 5, color : "blue" },
];

console.log(arrsum1.concat(arrsum2));

//배열 정렬하기

let numbers =[0,1,3,2,10,30,20];

const compare = ( a,b) =>{
    // 1. 같다
    // 2. 크다
    // 3. 작다
    if(a>b){
//크다
        return 1;
    }
    if ( a<b){
//작다
        return -1;
    }
    //같다
    return 0;
}
numbers.sort(compare);

// console.log(numbers);

// chars.sort();

// console.log(chars);

//배열 내 모든 요소를 문자열로 합치기

const arrName = ["한동건", "님" , "안녕하세요", "괴...괴물"];

console.log(arr.join(" "));