interface car{
//Abstract Method
start()
stop()
accelarate()

}

interface vehicle{
    on()
    of()
}






class Swif implements car,vehicle{
    start() {
        console.log("Start Swift");
        
    }

    stop() {
        console.log("Stop Swift");
        
    }

    accelarate() {
        console.log("Accelarate Swift");
        
    }

    on() {
        console.log("Swift on");
        
    }

    of() {
        console.log("Swift off");
        
    }
}

var obj = new Swif
