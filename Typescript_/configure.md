npm install -g typescript
tsc --version

mkdir HelloWorld
cd HelloWorld
code .

let message: string = 'Hello World';
console.log(message);


{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "outDir": "out"
  }
}

bug fixes (optional)
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "outDir": "out",
    "sourceMap": true
  }
}
