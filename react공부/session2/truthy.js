//참같은값 거짓 같은 값

let a ="string";

if(a){
    console.log("TRUE"); // -> a="string" & a=[] & a={} & a=42 & a=Infinity
} else{
    console.log("FALSE"); // -> a="" , null, undefinded, 0, NaN, 
}

const getName = (person) => {
    if(!person){ //false NOT -> True
        return "객체가 아닙니다.";
    }
    return person.name;
};

let person;
const name = getName(person);
console.log(name);