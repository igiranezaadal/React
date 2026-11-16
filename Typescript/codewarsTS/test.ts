function rot13Beginner(str: string): string {
  let result = "";

  for (const char of str) {
    const c = char.charCodeAt(0);
    if (c >= 65 && c <= 90) {
      const shifted = ((c - 65 + 13) % 26) + 65;
      result += String.fromCharCode(shifted);
    }
    else if (c >= 97 && c <= 122) {
      const shifted = ((c - 97 + 13) % 26) + 97;
      result += String.fromCharCode(shifted);
    }
    else {
      result += char;
    }
  }
  return result;
}
console.log(rot13Beginner("Hello, World! 123")); // "Uuryb, Jbeyq! 123"