// let value: any = "This is a string";
// let lengthOfString: number = (value as string).length;

// console.log(lengthOfString);


// // async
// interface User {
//     id: number;
//     username: string;
// }
// const data = await response.json();
// const user = data as User;
// console.log(user)

// let age = "2004" as number;
// const birth = ("25" as unknown) as number;
// const colors = ["red", "blue"] as const;
// console.log(birth)
// console.log(colors)

// var n: number=5
// while(n>5){
//     console.log("enter while");
// }

// do{
//     console.log(`entered dowhile`);  
// }
// while(n>5)


// function assertionFunc(): any {
//     return 'Hello, Typescript';
// }
// let strLength: number = (assertionFunc() as string).length;
// console.log(strLength)

// optional chaining
// type Customer={
//     birthday: Date
// }
// function getCustomer (id: number): Customer | null | undefined {
//  return id ===0? null: { birthday: new Date() };
// }
// let customer = getCustomer(1);

// console.log(`date is: ${customer?.birthday}`);



//  errors testing

// let count =56
// console.log(count);
// count='name count is change(number to string as value)\nbut its an error'
// console.log(count);
// count={id:67, name: 'adal'}
// console.log(count);

const age = 25;
// age = "twenty-six";
console.log(age);

function testing<T>(position?:T){
    return `hello i play as a ${position ?? "bench"} in football`
}
console.log(testing('center back, left back, right back,defensive and center modifield'));
 


function greet(name: string,  punctuation: string, greeting?: string) {
  return `${greeting ?? "Hello"}, ${name}${punctuation}`;
}
console.log(greet('adal', '!',));



interface Coordinate { x: number; y: number, z?: Number } //fixed error by adding z as optional

const withZ = { x: 1, y: 2, z: 3 };
const a: Coordinate = withZ;                        // line A
const b: Coordinate = { x: 1, y: 2, z: 3 };         // line B
console.log(a)
console.log(b)


function isString(val: unknown): val is string {
  return typeof val === "string";
}
console.log(isString('67'));
