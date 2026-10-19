// let txt="typescript is superset of Js"
// console.log(txt);
// array
// let ids: number[]=[1,2,3,4,5]
// let arr: any[]=[`heloo ${ids}`, 2 , 0.001 , ids , true]
 
// // tuples
// let person: [number, String,boolean]=[67, 'hey', false]
// console.log(ids);
// console.log(arr.sort((a,b)=>b-a));
// console.log(person);

// // tuples arr
// let employee: [number, string][]=[
//     [1, 'adal'],
//     [2, 'others1'],
//     [3, 'others2']
// ]
// console.log(employee);

// Symbol
// const unique_key=Symbol();
// let obj={
//     [unique_key]: "secretValue"
// }
// // console.log(obj)
// // console.log(obj[unique_key])
// // console.log('testing');

// // null undefined
// let empty: null=null
// let ud: undefined
// console.log(empty)
// console.log(ud)
// // object
// let adal:object ={ name: 'bob' }
// // console.log(adal);
// // function void
// function log():void{
//     console.log('log');
//     // return 'return'
// }
// log()

// // Enum(enumeration ): is collection of related values that can be numeric or string
// enum color {red, green, blue};
// let c: color=color.green
// console.log(c);
 
// any : is supertype of all datatypes in TypeScript
// let someThing: any =adal 
// console.log(someThing);

// // t
// type User={ name: string}
// let user: User ={name: "type in TS"}
// console.log(user);
// // type annotation: is basically giving type to the variable in TypeScript

// // nevype vs interfaceer:
// function funcName(): never{
//    // it throws an exception or never returns
// }
// console.log(funcName);


// if?
// let age: number = 19;
// if (age >= 18) {
//     console.log("You care eligible for voting.");
// }


// let age: number = 17;
// if (age >= 18) {
//     console.log("You care eligible for voting.");
// }
// else {
//     console.log("You are not eligible for voting.")
// }


// var grade = 85;
// if (grade >= 90) {
//   console.log("You got an A grade");
// } else if (grade >= 80) {
//   console.log("You got a B grade ");
// } else if (grade >= 70) {
//   console.log("You got a C grade ");
// } else if (grade >= 60) {
//   console.log("You got a D grade ");
// } else {
//   console.log("You got an F grade ");
// }


// var grade: string = 'B';
// switch (grade) {
//     case 'A': {
//         console.log("Excellent");
//         break;
//     }
//     case 'B': {
//         console.log("Good");
//         break;
//     }
//     case 'C': {
//         console.log("Fair");
//         break;
//     }
//     default: console.log("Unknown grade");
// }



// A function definition specifies what and how a specific task would be done.



// Optional parameters:can be used when arguments 
//          need not be compulsorily passed for a functions execution

// function addNumbers(p) {
//    var nums = [];
//    for (var _i = 0; _i < arguments.length; _i++) {
//       nums[_i - 0] = arguments[_i];
//    }
// 	var i;
//    var sum = 0;
	
//    for (i = 0; i < nums.length; i++) {
//       sum = sum + nums[i];
//    }
//    console.log("sum of the numbers", sum);
// }
// addNumbers(1, 2, 3);
// addNumbers(10, 10, 10, 10, 10);


// Rest Parameters:re similar to variable arguments in Java. Rest parameters dont restrict the number of values that you can pass to a function.

// function addNumbers(...nums_:number[]) {  
//    var i;   
//    var sum:number = 0; 
   
//    for(i = 0;i<nums_.length;i++) { 
//       sum = sum + nums_[i]; 
//    } 
//    console.log("sum of the numbers",sum) 
// } 
// addNumbers(1,2,3) 
// addNumbers(10,10,10,10,10)


// function disp_details(id:number,name:string,mail_id?:string) { 
//    console.log("ID:", id); 
//    console.log("Name",name); 
   
//    if(mail_id!=undefined)  
//    console.log("Email Id",mail_id); 
// }
// disp_details(123,"John");
// disp_details(111,"mary","mary@xyz.com");


// Defining the type alias
type UserID = number;
let user1: UserID = 101;
console.log(user1+'\n')

// union
type StringOrNumber = string | number;
function logMessage(message: StringOrNumber): void {
    console.log(message);
}
logMessage("Hello");
logMessage(123);
// arrays
type RGBColor = [number, number, number];
let red: RGBColor = [255, 0, 0];
console.log(`Red color: ${red}`);


type User= {
    id: string;
    name: string;
};
let user :User={id:'101',name:'Adal'}
console.log(user);

// generics
type Container<T>={value: T}
let numberContainer: Container<number>={ value: 123 }
let stringContainer: Container<string>={ value: "hello Adal" }
console.log(numberContainer);
console.log(stringContainer);
// console.log(`${numberContainer}\n${stringContainer}\n`);
