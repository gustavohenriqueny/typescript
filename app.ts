let message: string = "Help me Obi-wan Kenobi";
console.log(message);

let episode: number = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);

let favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite droid is " + favoriteDroid);

let isEnoughToBeatMF = function (parsects: number): boolean {
  return parsects < 12;
};

let distance: number = 11;

console.log(
  `Is ${distance} parsecs enoughs to beat Millennium Falcon ? ${
    isEnoughToBeatMF(distance) ? "YES" : "NO"
  }`
);

let call = (name: string) => console.log(`Do you copy, ${name}?`);
call("R2-D2");

function inc(speed: number, inc: number = 1): number {
	return speed + inc;
}

console.log(inc(5, 1));
console.log(inc(5));