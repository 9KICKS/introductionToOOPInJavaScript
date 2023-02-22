class Car {
    constructor(_wheels, _model, _seats) {
        this.wheels = _wheels;
        this.model = _model;
        this.seats = _seats;
    }

    static counter = 30;

    printModel() {
        console.log(`The model is ${this.model}`);
    }

    static getWheels() {
        // console.log(`Car has ${this.wheels} wheels`);
        console.log(`Car has wheels`);
    }
}

Car.getWheels();
console.log(Car.counter);