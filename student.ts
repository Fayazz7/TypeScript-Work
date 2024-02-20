class Student{
    name:string
    rollnum:number
    course:string

    setStudent(n,r,c){
        this.name=n
        this.rollnum=r
        this.course=c
    }

    displayStudent(){
        console.log(this.name,this.rollnum,this.course);
        
    }

}

var  obj = new Student

obj.setStudent("Fayaz",12,"IT");
obj.displayStudent()
