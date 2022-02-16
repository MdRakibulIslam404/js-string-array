function addNumbers() {
    // console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
};
const sum = addNumbers(23, 13, 67);
console.log(sum);

function getFullName() {
    let fullName = "";
    for (const part of arguments) {
        fullName = fullName + part + " ";
    }
    return fullName;
};
const name = getFullName("omuk", "sonket", "bin", "hanif", "sonket", "others");
console.log(name);