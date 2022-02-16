const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";
const words = anthem.split(" ");
const withoutA = anthem.split("a");
// console.log(words);
// console.log(withoutA);

const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(5, 13);
// console.log(anotherAnotherPart);

// concat
const first = "amader";
const second = "City";
// const fullString = first + second;
const fullString = first.concat(second).concat("abc").concat("RJ kibria");
// console.log(fullString);

// join
const words2 = ["luaky", "yokla", "crimon", "mofiz"];
// const allJoined = words2.join("");
// const allJoined = words2.join(" ");
// const allJoined = words2.join(",");
// const allJoined = words2.join(", ");
const allJoined = words2.join("www");
console.log(allJoined);