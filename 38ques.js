function describCity(city, country) {
    if (country === void 0) { country = "default country"; }
    var store = ("".concat(city, " is in ").concat(country));
    return store;
}
var result1 = describCity("karachi", "Pakistan");
var result2 = describCity("Dehli", "India");
var result3 = describCity("New york");
console.log(result1);
console.log(result2);
console.log(result3);
