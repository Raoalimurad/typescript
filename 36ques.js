function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typecript"; }
    console.log("my shirt size is ".concat(size, " and ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love javascript");
