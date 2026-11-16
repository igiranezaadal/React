
export function findEvenIndex(arr: number[]): number{
 for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
   
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))  // 3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]))  //1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]))  //-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]))  //3, "The array was: [20,10,30,10,10,15,35] \n");
