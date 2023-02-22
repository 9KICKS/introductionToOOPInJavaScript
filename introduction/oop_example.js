let vehicle = {
    wheel: 4,
};
let car = {
    seats: 5,
    __proto__: vehicle,
};
let bmw = {
    logo: "BMW",
    __proto__: car,
};
console.log(vehicle, vehicle.__proto__);
console.log(car, car.wheel);
console.log(car, bmw.wheel);