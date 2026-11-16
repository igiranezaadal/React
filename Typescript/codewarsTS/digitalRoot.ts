// import { ArrayQueue } from './../Class';
export const digitalRoot = (n:number):number => {
//   let arr: number[]= n.toString().split('').map(Number)
//   return arr
    let currentNumber: number=n;
    while (currentNumber >= 10) {
    let sum = 0;
    const digitString = currentNumber.toString();

    for (const c of digitString) {
      sum += Number(c);
    }

    currentNumber = sum;
  }
  return currentNumber
};
console.log(digitalRoot(16));  // 7
console.log(digitalRoot(456)); // 7
