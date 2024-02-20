interface Bike{
    name:string
    brand:string
    ride()
}

class PassionPro implements Bike{
    name: string;
    brand: string;
    
    constructor(name,brand){
        this.name=name
        this.brand=brand
    }

    ride() {
        console.log(`Ride ${this.name},${this.brand}`);
        
    }
}

class Duke implements Bike{
    name: string;
    brand: string;
    
    constructor(name,brand){
        this.name=name
        this.brand=brand
    }

    ride() {
        console.log(`Ride ${this.name},${this.brand}`);
        
    }
}


class Person {
    vehicle:Bike
    constructor(vehicleobj:Bike){
        this.vehicle=vehicleobj  //dependancy injection
    }

    drive(){
        this.vehicle.ride()
    }
}

var passionProObj=new PassionPro("PassionPro","Hero")
var dukeObj= new Duke("250","KTM")

var personObj= new Person(dukeObj)