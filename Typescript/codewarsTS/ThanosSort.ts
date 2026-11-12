export function thanosSort(arr: number[]): number {
  //solution here
  const allSeizeToExist = arr.every((item, idx) => idx === 0 || arr[idx - 1] <= item);  
  if (allSeizeToExist)return arr.length;
  
  const half = Math.ceil(arr.length / 2);  
  const left = arr.slice(0, half);
  const right = arr.slice(half);
  
  return Math.max(thanosSort(left), thanosSort(right));
}

console.log(thanosSort([1, 2, 3, 4, 5]));   // Expected: 5 (Already sorted)
console.log(thanosSort([5, 4, 3, 2, 1]));   // Expected: 1 (Reversed)
console.log(thanosSort([3, 1, 4, 1, 5]));// Expected: 2 (Mixed)
console.log(thanosSort([42]));  // Expected: 1 (Single element)
console.log(thanosSort([]));    // Expected: 0 (Empty array)
console.log(thanosSort([2, 2, 2, 1, 2]));   // Expected: 3 (Duplicates)