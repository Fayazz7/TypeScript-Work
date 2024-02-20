var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setStudent = function (n, r, c) {
        this.name = n;
        this.rollnum = r;
        this.course = c;
    };
    Student.prototype.displayStudent = function () {
        console.log(this.name, this.rollnum, this.course);
    };
    return Student;
}());
var obj = new Student;
obj.setStudent("Fayaz", 12, "IT");
obj.displayStudent();
