// Define an interface for a car
interface Car {
    make: string;
    model: string;
    year: number;
    color: string;
}

// Create an array of car objects
const cars: Car[] = [
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
for(let i=0;i<cars.length; i++){
    const car= cars[i];
    console.log(`car: ${i+1}`);
    console.log(`make:  ${car.make}`);
    console.log(`model: ${car.model}`);
    console.log(`color : ${car.color}`);
    console.log(".............")
}

