// type User={
//     id: string;
//     name: string;
//     age: number;
// }
// type PartialUser = Partial<User>;
// // means optianal
// type RequiredUser = Required<PartialUser>;
// // must use

// // type omitUser = Omit<User, 'id'>
// type omitUser = Omit<User, 'id' | 'name'>;//remove multiple
// // omit is used to remove property from the object

// // type pickUser = Pick<User, 'id'> //being pick me
// type pickingUser = Pick<User, 'id' | 'name'>;//pick multiple
// // pick is used to get property from the object

// // type readonlyUser= Readonly<User>
// // make it read only

// type Adal = {
//  readonly id: string;
//  readonly name: string;
//  readonly age: number;
// }
// type Mutable <T> = {
//     -readonly [K in keyof T]: T[K]
// };
// type MutableUser = Mutable<Adal>
// // make it not read only
// let AdalValue={id:'gf676',name: 'Prime Adal', age:67}
// console.log(AdalValue)

type Role= 'admin' | 'user' | 'anonymous';
let useRole='admin'
console.log(useRole+'\n');

type nonAdminRole =  Exclude <Role, 'admin' | 'anonymous'>;
// exclude is used to remove members from type or multiple member

type RoleAttributes =|{role: 'admin'; orId: string}
                        |{role: 'user'}
                        |{role: 'anonymous'}
type AdminiRole= Extract<RoleAttributes,{
    role: "admini"
}>
// grab specific element in object 

type func =(a: number, b: string)=> number;
type getThem= Parameters<func>;
let params=[67,'using parameters type']
console.log(params)


type mayBeString= 'admin' | null | undefined;
type notNull= NonNullable<mayBeString>
// this removes means value cant be empty

type promiseString = Promise<string>
type isPromise = Awaited<promiseString>
// you can use Awaited to unwrap these promises


const asyncro =async()=>{
    return{
        id: 123,
    }
}

type Result = Awaited<ReturnType <typeof asyncro>>
//it can be use to exract value from promise



