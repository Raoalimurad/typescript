const placevisit=["pakistan","india","srilanka ","bangladesh","netharland"];
/////print original array
console.log("original array is",placevisit);

// sorted array alphabatical without modify original array
const sortedArrayAlphabatical=[...placevisit].sort();
console.log('sorted array in alphabatical without modify original array',sortedArrayAlphabatical);
////After sorting array still it is in original condition
console.log("original order (after sorting)",placevisit);



//Print  array in reverse alphabetical order without changing the order of the original list.
const reverseSortedAarray=[...placevisit].sort((a,b)=>b.localeCompare(a));
console.log("reverse sorted alphabatical order",reverseSortedAarray);

////After reverse sorting array still it is in original condition
console.log("original order (after reverse sorting)",placevisit);

// REVERSE THE ORIGINAL ARRAY
placevisit.reverse();
console.log("original array in reverse",placevisit);



// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placevisit.reverse();
console.log("back reverse array in original array",placevisit);

// Sort the array in alphabetical order

placevisit.sort();
console.log("sorted original array in alphabatical",placevisit);

// Sort the array in reverse alphabetical order
placevisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted Reverse Alphabetical Order:", placevisit);



