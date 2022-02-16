// 1. print book name which is includes javascript
function jsIncludes(books) {
    let js = [];
    for (const book of books) {
        if (book.toLowerCase().includes("javascript")) {
            js.push(book);
        }
    }
    return js;
};
const books = jsIncludes(["habijabi is the gt", "hate kolome JavaScript", "programming with javascript", "python is a powerful language", "THE JAVASCRIPT"]);
console.log(books);

// 2. sort number
function sortNum(numbers) {
    const number = numbers.sort(function (a, b) {
        return a - b;
    });
    return number;
};
const numbers = sortNum([45, 555, 2222, 12, 3, 5, 78, 9, 65, 0, 9]);
console.log(numbers);