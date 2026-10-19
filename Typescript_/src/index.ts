// const message: string = "TypeScript setup is working perfectly!";
// console.log(message);
// console.log('hello Adal');


// codewars
//  function noSpace(x:string):string {
//     // let result = x.replace(/\s/g, '');
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] !== ' ') {
//             result += x[i];
//         }
//     }
//     return result;
// }
// console.log(noSpace("hell Adal"));



// function descendingOrder(n: number|string): number {
//   // your code here
  
// //   let toText = String(n)
// //   toText = toText.reverse('')
// //   return Number(toText)

//     // n = String(n)
//     // return n.split('').sort((a,b)=>b-a).join('')

//   return Number(String(n).split('')
//                   .sort((a,b)=>Number(b) - Number(a))
//                   .join(''));
// }
// console.log(descendingOrder(12345));


// function repeatStr (n:number, s:String):String {
//   return s.repeat(n);
// }
// console.log(repeatStr(6, 'r'));


//  function stringToNumber(str: string): number {
//   return Number(str);
// }
// console.log(stringToNumber("43"));

/**
 * Challenge: Fix the TS warnings about orderQueue!
 */

// type Pizza = {
//     name: string
//     price: number
// }

// type Order = {
//     id: number
//     pizza: Pizza
//     status: string
// }

// const menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 },
// ]

// let cashInRegister = 100
// let nextOrderId = 1
// const orderQueue:Order[] = []

// function addNewPizza(pizzaObj: Pizza) {
//     menu.push(pizzaObj)
// }

// function placeOrder(pizzaName: string) {
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
//     if (!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`)
//         return
//     }
//     cashInRegister += selectedPizza.price
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
//     orderQueue.push(newOrder)
//     return newOrder
// }

// function completeOrder(orderId: number) {
//     const order = orderQueue.find(order => order.id === orderId)
//     if(!order){
//         console.error(`${order} does not exist in the menu`)
//         return
//     }
//     order.status = "completed"
//     return order
// }

// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ name: "BBQ Chicken", price: 12 })
// addNewPizza({ name: "Spicy Sausage", price: 11 })

// placeOrder("Chicken Bacon Ranch")
// completeOrder(1)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)



function f(n:number, m:number) {
  // My function body is ready
  let sum=0;
  for (let i=1;i<=n;i++){
    if(i%m){
      sum+=m
    }
    else continue
  }
  return sum/2
}
console.log(f(10, 5)) // 20
console.log(f(20, 20)) // 190
console.log(f(15, 10)) // 60
console.log('disjfldsfiosdfsd')
