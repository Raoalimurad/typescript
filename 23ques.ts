let number1 = 10;
let number2 = 5;

// Test 1: Is number1 equal to number2 + 5?
console.log("Is number1 == number2 + 5? I predict True.");
console.log(number1 == number2 + 5); // True

// Test 2: Is number1 not equal to number2?
console.log("Is number1 != number2? I predict True.");
console.log(number1 != number2); // True

// Test 3: Is number1 greater than number2?
console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2); // True

// Test 4: Is number1 less than or equal to number2?
console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2); // False

// Test 5: Is 'apple' equal to 'orange'?
let fruit1 = 'apple';
let fruit2 = 'orange';
console.log("Is fruit1 == fruit2? I predict False.");
console.log(fruit1 == fruit2); // False

// Test 6: Is true equal to 1?
console.log("Is true == 1? I predict False.");
console.log(true == 1); // False

// Test 7: Is '10' equal to 10?
let stringNumber = '10';
console.log("Is stringNumber == 10? I predict False.");
console.log(stringNumber === 10); // False

// Test 8: Is 'hello' not equal to 'world'?
let greeting1 = 'hello';
let greeting2 = 'world';
console.log("Is greeting1 != greeting2? I predict True.");
console.log(greeting1 != greeting2); // True

// Test 9: Is (5 + 5) equal to 11?
console.log("Is (5 + 5) == 11? I predict False.");
console.log(5 + 5 == 11); // False

// Test 10: Is undefined equal to null?
let x: number;
let y = null;
console.log("Is x == y? I predict False.");
console.log(x == y); // False
