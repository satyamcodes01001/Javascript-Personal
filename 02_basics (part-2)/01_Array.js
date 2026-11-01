
// ARRAYS

// Array ek collection hai jisme multiple values store kar sakte hain.
// JavaScript arrays different data types ki values bhi store kar sakte hain.

const myArray = ["Satyam", 0, 1, 2, 3, true];

// Array ke elements ko index ke through access karte hain.
// Index 0 se start hota hai.
console.log(myArray[0]);  // Satyam
console.log(myArray[5]);  // true


// Shallow Copy -> Copy ke andar nested objects/arrays ke references
// share ho sakte hain. Changes original data ko affect kar sakte hain.

// Deep Copy -> Completely independent copy.
// Nested objects/arrays bhi separately copy hote hain.


// Another way to create an array
const mySuperheros = [
    "Ironman",
    "Black Panther",
    "Doctor Strange",
    "Spiderman",
    "Captain America"
];

const myArray2 = new Array(1, 2, 3, 4);

console.log(myArray2[2]);  // 3


// ARRAY METHODS

// 1. push() -> Array ke END mein element add karta hai.
myArray.push(6);
myArray.push(7);

// 2. pop() -> Array ke LAST element ko remove karta hai.
myArray.pop();

// 3. unshift() -> Array ke START mein element add karta hai.
myArray.unshift(70);

// 4. shift() -> Array ka FIRST element remove karta hai.
myArray.shift();

// 5. includes() -> Check karta hai ki element present hai ya nahi.
console.log(myArray.includes(9));  // false

// 6. indexOf() -> Element ka index return karta hai.
// Element nahi mila toh -1 return hota hai.
console.log(myArray.indexOf(3));   // 3
console.log(myArray.indexOf(9));   // -1

// 7. join() -> Array ke elements ko string mein convert karta hai.
const newArr = myArray.join();

console.log(myArray);
console.log(newArr);
console.log(typeof newArr);  // string


// SLICE vs SPLICE

console.log("A :", myArray);

// 1. slice(start, end)
// Start index included hota hai, end index excluded hota hai.
// Original array mein koi change nahi hota.

const myn1 = myArray.slice(1, 4);

console.log(myn1);
console.log("B :", myArray);


// 2. splice(start, deleteCount)
// Starting index se specified number of elements remove karta hai.
// Original array MODIFY ho jaata hai.

const myn2 = myArray.splice(1, 4);

console.log(myn2);
console.log("C :", myArray);


// IMPORTANT:
// slice() -> Original array safe rehta hai.
// splice() -> Original array modify ho jaata hai.
// slice(1, 4) -> Index 1, 2, 3 return honge.
// splice(1, 4) -> Index 1 se 4 elements remove honge.
