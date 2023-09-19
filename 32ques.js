var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var position;
    if (number === 1) {
        position = "st";
    }
    if (number === 2) {
        position = "nd";
    }
    if (number === 3) {
        position = "rd";
    }
    else {
        position = "th";
    }
    console.log("".concat(number).concat(position));
});
