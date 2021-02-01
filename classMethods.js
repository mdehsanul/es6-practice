class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent {
    constructor(cName){
        super();
        this.name = cName;
    }

    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby1 = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby1 , baby2);
console.log(baby1.getFullName());
console.log(baby2.getFullName());
