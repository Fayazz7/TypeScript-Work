class Employee{
    name:string
    age:number
    department:string
    salery:number


    constructor(name,age,dept,salery){
        this.name=name
        this.age=age
        this.department=dept
        this.salery=salery
    }

    displayEmployee(){
        console.log(this.name,this.age,this.department,this.salery);
        
    }
}

const obj1 = new Employee("fayaz",21,"IT",500)

obj1.displayEmployee()