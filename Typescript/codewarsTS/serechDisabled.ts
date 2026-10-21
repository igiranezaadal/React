export function searchDisable(log: string): string {
  function isPrime(n: number): boolean {
      if (n <= 1) return false;
      for (let i = 2; i < n; i++) {
          if (n % i === 0) return false;
      }
      return true;
  }

  let items = log.match(/\d+/g) || [];
  let counts: { [key: string]: number } = {};
  
  for (let c of items) {
      if (c.length === 4) {
          if (c[2] === '2' || c[2] === '3') {
              let num = Number(c);
              if (isPrime(num)) {
                  counts[c] = (counts[c] || 0) + 1;
              }
          }
      }
  }
  let totalMatchingCount = 0;
  for (let key in counts) {
      if (counts[key] > 3) {
          totalMatchingCount += counts[key];
      }
  }
  if (totalMatchingCount > 50) {
      return "match disable bot";
  } else {
      return "no match continue";
  }
}


let log1 = "1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031";
    console.log(searchDisable(log1)); // "match disable bot"
    let log2 = "2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 ２０３１ ２０３１ ２０３１";
    console.log(searchDisable(log2)); // "no match continue"
    let log3 = '7693 3051 １９９９ 7３０７ 4３２３ 4９６８ ２６６６ 4２６７ 9２６４ ２３９９ 66 ';
    console.log(searchDisable(log3)); // "no match continue"
    let log4 = '8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923';
    console.log(searchDisable(log4)); // "match disable bot"
    let log5 = '5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639';
    console.log(searchDisable(log5)); // "no match continue"