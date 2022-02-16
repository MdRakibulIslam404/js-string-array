// 1. .log element which element includes 'm'
const foods = ["banana", "Mango", "coconut", "jaam", "orange", "amloki"];
for (const food of foods) {
    if ((food.toLowerCase().includes("m"))) {
        // console.log(food);
    }
};

// 2. .log name; which name started md or MD
function mdName(names) {
    let md = [];
    for (const name of names) {
        if (name.toLowerCase().startsWith("md")) {
            md.push(name);
        }
    }
    return md;
};
const names = mdName(["chokina khatun", "md. aku islam", "mosaraf karim", "MD. Rakibul Islam"]);
console.log(names);

// 3. print orange and lemon
function orangeLemon(fruits) {
    const fruit = fruits.slice(1, 3);
    return fruit;
};
const fruits = orangeLemon(["Banana", "Orange", "Lemon", "Apple", "Mango"]);
console.log(fruits);