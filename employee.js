var Employee = /** @class */ (function () {
    function Employee(name, age, dept, salery) {
        this.name = name;
        this.age = age;
        this.department = dept;
        this.salery = salery;
    }
    Employee.prototype.displayEmployee = function () {
        console.log(this.name, this.age, this.department, this.salery);
    };
    return Employee;
}());
var obj1 = new Employee("fayaz", 21, "IT", 500);
obj1.displayEmployee();
