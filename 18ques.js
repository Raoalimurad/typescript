var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placevisit = ["pakistan", "india", "srilanka ", "bangladesh", "netharland"];
/////print original array
console.log("original array is", placevisit);
// sorted array alphabatical without modify original array
var sortedArrayAlphabatical = __spreadArray([], placevisit, true).sort();
console.log('sorted array in alphabatical without modify original array', sortedArrayAlphabatical);
////After sorting array still it is in original condition
console.log("original order (after sorting)", placevisit);
//Print  array in reverse alphabetical order without changing the order of the original list.
var reverseSortedAarray = __spreadArray([], placevisit, true).sort(function (a, b) { return b.localeCompare(a); });
console.log("reverse sorted alphabatical order", reverseSortedAarray);
////After reverse sorting array still it is in original condition
console.log("original order (after reverse sorting)", placevisit);
// REVERSE THE ORIGINAL ARRAY
placevisit.reverse();
console.log("original array in reverse", placevisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placevisit.reverse();
console.log("back reverse array in original array", placevisit);
// Sort the array in alphabetical order
placevisit.sort();
console.log("sorted original array in alphabatical", placevisit);
// Sort the array in reverse alphabetical order
placevisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted Reverse Alphabetical Order:", placevisit);
