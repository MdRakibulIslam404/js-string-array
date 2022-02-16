const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
const sortedNumber = numbers.sort();
// console.log(sortedNumber);

const friends = ["kabli", "josim", "razzak", "anwar", "deepjol", "badsha"];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

const sortedReverseFriends = friends.sort().reverse();
// console.log(sortedReverseFriends);

// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);