// generics allows you to wirte reuseable code that is not type specific like class,function,interface.
//     type parameter <T> 

// functions:
//     c reusablity
//     eliminate type casting(manually conversion of type)
//function generics
// function identifyAny(arg: any):any {
//     return arg ;
// }
// function identity<T>(arg:T){
//     return arg;
// }
// const num = identity<number>(42)
// const str = identity<string>('hi Adal')

// generic interface & classes

// function printVar<T>(val: T) {

// }
// printVar(val);

// class Box<T> {
//     private content: T;

//     constructor(value: T) {
//         this.content = value;
//     }

//     getValue(): T {
//         return this.content;
//     }
// }

// const numberBox = new Box<number>(100);
// const stringBox = new Box<string>("Hello");


// // generics and constraints
// interface hasLength{length:number;}
// function logLength<T extends hasLength>(arg: T){
//     console.log(arg.length);
//     return arg;
// }
// logLength('hello Adal')
// logLength([1,2])

// const addUID= <T extends {name:string}>(obj: T ) =>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: 'yoshi', age: 40});

// console.log(docOne.name)
// console.log(docOne.age)
// console.log(docOne)

// interface Resourse<T>{
//     uid: number;
//     resourceName: string;
//     data: object
// }
// // let adal69: Resourse{
// //     uids=67,
// //     resourse='HELLO aDAL',
// //     data='???'
// // }
// // console.log(adal69);
// // console.log(adal69);
// // urce={}
// const docThree: Resourse<string>={
//     uid: 1,
//     resourceName: 'person',
//     data: {name:'sh aun'}
// }
// console.log(docThree);


function data_<MyType>(infor:MyType): MyType{
    return infor
}
const ages: number[]=[67,68]
const names: string[]=['tony','adal']

console.log(data_(ages));
console.log(`\n`)
console.log(data_(names));

const adal=document.querySelector<HTMLInputElement>('.btnAdal')
adal?.value
