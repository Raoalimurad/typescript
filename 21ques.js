// Create an array of car objects
var cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Silver"
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2019,
        color: "Blue"
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2021,
        color: "Red"
    }
];
console.log("the list of cars");
for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    console.log("car ".concat(i + 1));
    console.log("make".concat(car.make));
    console.log("model".concat(car.model));
    console.log("color".concat(car.color));
    console.log(".............");
}
