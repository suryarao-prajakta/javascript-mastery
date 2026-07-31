//classes in js
// class is a program- code templete for creating objects.
// Thhose objects will have some state (variables) & some behaviour (functions) inside it.


class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    };

    setBrand(brand) {
        this.brand = brand;
    }
};


let Thar = new ToyotaCar() ; 
console.log(Thar.start()); //output : start
Thar.setBrand("Thar");
console.log(Thar);
