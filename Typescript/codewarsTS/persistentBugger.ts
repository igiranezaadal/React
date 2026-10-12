export function persistence(num: number): number {
  let count = 0;
  
  while (num >= 10){
    num =num.toString().split('')
      .reduce((acc, n) => acc * Number(n), 1);
    count++;
  }
  
  return count;
}