interface Foods{
    name:string
    having()
}

class FriedRice implements Foods{
    name: string;
    constructor(name){
        this.name=name
    }
    having() {
        console.log("have",this.name);
    }
}

class Noodles implements Foods{
    name: string;
    constructor(name){
        this.name=name
    }
    having() {
        console.log("have",this.name);
        
    }
}

class Customer{
    dish:Foods
    constructor(dishObj){ //Dependency Injection
        this.dish=dishObj
    }
    eat(){
        this.dish.having()
    }
}

var friedRiceObj=new FriedRice("Chicken FriedRice")
var noodlesObj=new Noodles("Mixed Noodles")

var CustomerObj=new Customer(noodlesObj)