function createCar(manufacturer, modelName) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
        var feature = features_1[_a];
        var _b = (feature)[0], key = _b[0], value = _b[1];
        // //   const[year,values]=Object.entries(feature)[1];
        carInfo[key] = value;
        // //   carInfo[year]= values;
    }
    return carInfo;
}
// Calling the function with required and optional information
var carDetails = createCar("Toyota", "Camry", { color: "Silver", year: 2022 });
// Printing the object to verify the stored information
console.log(carDetails);
