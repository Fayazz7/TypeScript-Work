class Parent{
    m1(){
        console.log("Hellow From Parent");
        
    }
}

class Child extends Parent {
    m2(){
        console.log("Hellow From Child");
        
    }
}

var ch= new Child()

ch.m2()
ch.m1()