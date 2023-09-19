const myArray: number[] = [1, 2, 3, 4, 5];

// Intentional error: Access an out-of-bounds index
const indexError = myArray[3]; // This will produce an error

// Correct the error
if (indexError !== undefined) {
    console.log("Value at index 10:", indexError);
} else {
    console.log("Index 10 is out of bounds.");
}
