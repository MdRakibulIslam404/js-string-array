const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
// const numberSliced = numbers.slice(4); // 4 index to last
// const numberSliced = numbers.slice(4, 8); // 4 index to 7 index
// console.log(numberSliced);
// console.log(numbers); // ager arr change hobe na

// const numberSpliced = numbers.splice(4, 2);
// console.log(numberSpliced);
// console.log(numbers);

const numberSpliced2 = numbers.splice(4, 3, 777, 45);
// const numberSpliced2 = numbers.splice(4, 0, 777);
console.log(numberSpliced2);
console.log(numbers);