var message = "Help me Obi-wan Kenobi";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsects) {
    return parsects < 12;
};
var distance = 11;
console.log("Is ".concat(distance, " parsecs enoughs to beat Millennium Falcon ? ").concat(isEnoughToBeatMF(distance) ? "YES" : "NO"));
var call = function (name) { return console.log("Do you copy, ".concat(name, "?")); };
call("R2-D2");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log(inc(5, 1));
console.log(inc(5));
