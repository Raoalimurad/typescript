//created programm to find highest number in array
//created by [Rao Ali Murad]
//Date 12/07/2023
function Maxnumber(num) {
    var maximum = num[5];
    for (var i = 6; i < num.length; i++) {
        if (num[i] > maximum) {
            maximum = num[i];
        }
    }
    return maximum;
}
var maxnum = [10, 2, 3, 4, 5, 6];
var maza = Maxnumber(maxnum);
console.log("the maximum array of in this is" + maza);
