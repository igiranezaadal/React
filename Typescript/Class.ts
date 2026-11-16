// Class:is a blue print to create an object 

// class Point{
//     x: number;
//     y:number;
//     draw:(){
//         //..
//         console.log('draw');
        
//     }

//     getDistance(another:point)=>{
//         //..
//         console.log('get Distance');

//     }
// }

// let drawPoint= (point: Point)=>{
//     //...
// }

// let getDistance= (pointA: Point,pointB: Point)=>{
//     //...
// }
// drawPoint({
//     x:1,
//     y:2 
// })

// access modifier in typescript


// Public class Person {
//   name: string;
// }

// const person = new Person();
// person.name = "Jane";

// class Person {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(`Your name is: ${person.getName()}`); // no error
// console.log(person.name) // cant accsess private accesss modifirer


// class Point{
//     x: number;
//     y: number;
//     constructor(x: number, y: number){
//         this.x = x;
//         this.y = y; 
//     }

//     draw(){
//         console.log('X: '+ this.x + 'Y: '+ this.y);
        
//     }
// }

// let point= new Point(1, 2);
// console.log(point.x=3);
// console.log(point.draw());


// making a queue

// export class Queue<T>{
//     private items: Record<number, T> ={};
//     private headIndex: number = 0;
//     private tailIndex: number = 0;

//     enqueue(item: T): void{
//         this.items[this.tailIndex]=item;
//         this.tailIndex++;
//     }

//     dequeue():T | undefined{
//         delete this.items[this.headIndex];
//         this.headIndex++;
//         return undefined;
//     }
    
//     peek(): T | undefined {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     return this.items[this.headIndex];
//   }
//   isEmpty(): boolean {
//     return this.size === 0;
//   }

//   get size(): number {
//     return this.tailIndex - this.headIndex;
//   }

//   clear(): void {
//     this.items = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }
// }

// const printQueue =new Queue<string>();

// printQueue.enqueue('document1.pdf')
// printQueue.enqueue('report.docx')
// printQueue.enqueue('Photo.png')
// printQueue.enqueue('Photo.png')
// printQueue.dequeue();

// console.log(printQueue.peek()); // Output: "Document1.pdf"
// console.log(printQueue.size);   // Output: 3

// console.log(printQueue.dequeue()); // Output: "Document1.pdf"
// console.log(printQueue.size);      // Output: 2

// using arrays
export class ArrayQueue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }


  dequeue(): T | undefined {
    return this.items.shift();
  }

  
  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  get size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}


const printQueue = new ArrayQueue<string>();

printQueue.enqueue("Document1.pdf");
printQueue.enqueue("Report.docx");
printQueue.enqueue("Photo.png");

console.log(printQueue.peek());   // Output: "Document1.pdf"
console.log(printQueue.size);     // Output: 3

console.log(printQueue.dequeue()); // Output: "Document1.pdf"
console.log(printQueue.size);


// union typeon union cant 




// inheritance
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}