// // 1.
// // 1. **Task:** Define an abstract class `Shape2D`:
// //     - Abstract method `area(): number`;
    
// //     Then implement:
    
// //     - `Circle` subclass (property: `radius`);
// //     - `Rectangle` subclass (properties: `width`, `height`);
    
// //     Constructors should initialize properties, and `area()` should return correct values.
// // export {class Shape2D
// // }
// abstract class Shape2D {
//     constructor(length:number,width:number,radius:number) {
//         //func
//         const pi=3.14;
//         let circle=radius*radius*pi;
//         let rectangle=length* width;
//         function area():void{
//         console.log(`\nrectangle: ${rectangle}`)
//         console.log(`rectangle: ${circle}`)
//         }
//         // s
//     }
//     // function area(radius:number):void{
//     //     const pi=3.14;
//     //     let circle=radius*radius*pi
//     // }
// }
// const shape=new Shape2D(34,45,23)




3.
    // 1. **Task:** Define a discriminated union `Notification`:

// ```tsx
// type Notification = 
//   | { type: 'email'; to: string; subject: string; }
//   | { type: 'sms'; to: string; phone: string; }
//   | { type: 'push'; to: string; deviceId: string; };
// ```

// Write function `sendNotification(n: Notification): void` using `switch(n.type)`. For each case, log a message including all relevant fields.

// Add an `assertNever(x: never): never` helper, and call it in `default:` to enforce exhaustive handling.




export 
type Notification = 
  | { type: 'email'; to: string; subject: string; }
  | { type: 'sms'; to: string; phone: string; }
  | { type: 'push'; to: string; deviceId: string; 
};


let n1:Notification = {
    type: "email", 
    to: "sender1@gmail.com", 
    subject: "did you do the task 1"

}

let n2:Notification = {
    type: "sms", 
    to: "sender1", 
    phone: "07834534534"

}

let n3:Notification = {
    type: "push", 
    to: "sender1", 
    deviceId: "AZipp123"

}

let n4:any = {
    type: "paper", 
    to: "sender1", 
    deviceId: "AZipp123"
}


function sendNotification(n: Notification): void{

    switch(n.type){
        case 'email':
            console.log(`you send an email to ${n.to} telling ${n.subject} `)
            break;
        case 'sms':
            console.log(`you contact via sms to ${n.to} telling ${n.phone} `)
            break;
        case 'push':
            console.log(`you send an email to ${n.to} telling ${n.deviceId} `)
            break;
        default:
            assertNever(n)
    }
}

sendNotification(n1)
sendNotification(n2)
sendNotification(n3)
sendNotification(n4)

function assertNever(x: never): never{
    throw new Error("there is no notification type");

}