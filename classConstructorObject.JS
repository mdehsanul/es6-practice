class Student{
    constructor(sName, sId){
        this.name = sName;
        this.id = sId;
        this.school = 'kolimunnesa school';
    }
}

const student1 = new Student('kapil', 1);
const student2 = new Student('susmita', 10);
console.log(student1, student2)
console.log(student1.name, student2.id);