function megaFriend(friends) {
    if (Array.isArray(friends) == false) { // !Array evabeo hoto
        return "please provide an array";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
};
const friends = ["Kutub", "Lion", "Shamol", "Sabbir"];
const myBigBuddy = megaFriend(2122);
console.log(myBigBuddy);

if (friends.indexOf("Fox") != -1) {
    console.log("lion is exists");
}
else {
    console.log("Fox doesn't exists");
}

if (friends.includes("Lion")) {
    console.log("YES lion is here");
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);