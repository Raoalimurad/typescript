function describCity(city, country) {
    if (country === void 0) { country = "default country"; }
    console.log("".concat(city, " is in ").concat(country));
}
describCity("karachi", "Pakistan");
describCity("Dehli", "India");
describCity("New york"); ////default country 
