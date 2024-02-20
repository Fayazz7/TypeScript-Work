interface Oninit{
    ngOninit()
}

interface onChange{
    ngOnchange()
}

class MyComponents implements onChange,Oninit{
    ngOnchange() {
        console.log("Method CHanged");
        
    }
    ngOninit() {
        console.log("Method");
        
    }
}