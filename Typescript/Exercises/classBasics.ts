interface PersonInterface{
    id: number;
    name: string;
    getId(): string | number;
}

class Person implements PersonInterface{
    public id: number; 
    // private is only accccessible inside the class
    //protected can be accessed in derivered class (ralated)
    public name: string;
    constructor(id: number, name: string){
        this.id=id;
        this.name=name;
    }
    getId(){
        return `id: ${this.id}\nname: ${this.name}`;
    }
}
const obj= new Person(1,"Igiraneza Adal")
const obj1= new Person(2,"kalisa prince")
// console.log(obj.name);
console.log(obj.getId());
