// ARRAY CONCATENATION & SPREAD OPERATOR

const myHeros = ["Ironman", "Doctor Strange", "Spiderman", "Thor"];
const dc_heros = ["Superman", "Batman", "Flash"];

// 1. push() -> Existing array mein doosra array add karna.

// myHeros.push(dc_heros);
// console.log(myHeros);

// Output:
// ["Ironman", "Doctor Strange", "Spiderman", "Thor",
//  ["Superman", "Batman", "Flash"]]

// Yahan poora dc_heros ek single element ki tarah add hua hai.
// Isliye myHeros[4][1] se Batman access kar sakte hain.


// 2. concat() -> Do arrays ko combine karke NEW array return karta hai.

// const allHeros = myHeros.concat(dc_heros);
// console.log(allHeros);

// Output:
// ["Ironman", "Doctor Strange", "Spiderman", "Thor",
//  "Superman", "Batman", "Flash"]

// Original arrays change nahi hote.


// 3. Spread Operator (...) -> Array ke elements ko spread karta hai.

const all_new_heros = [...myHeros, ...dc_heros];

console.log(all_new_heros);

// Output:
// ["Ironman", "Doctor Strange", "Spiderman", "Thor",
//  "Superman", "Batman", "Flash"]

// ... ka matlab elements ko individually spread karna.
// Ye concat() ka alternative bhi hai.
// Multiple arrays ko easily combine kar sakte hain.


// FLAT METHOD

const another_array = [1, 2, 3, 4, [5, 6], [7, 8, [9, 10]]];

// flat() -> Nested arrays ko single-level array mein convert karta hai.

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Infinity ka matlab: jitni bhi nesting depth ho,
// sabhi nested arrays ko flatten kar do.

// flat(1) -> Sirf 1 level tak flatten.
// flat(2) -> 2 levels tak flatten.
// flat(Infinity) -> Saare levels flatten.


// ARRAY CHECKING & CONVERSION

// 4. Array.isArray() -> Check karta hai ki given value array hai ya nahi.

console.log(Array.isArray("Satyam"));  // false
console.log(Array.isArray([1, 2, 3])); // true


// 5. Array.from() -> Iterable ya array-like value se NEW array banata hai.

console.log(Array.from("Satyam"));

// Output:
// ["S", "a", "t", "y", "a", "m"]

// String ke har character ko separate element bana diya.


// Interesting case:
console.log(Array.from({ name: "Satyam" }));

// Output: []

// Kyunki object mein name property hai,
// lekin woh iterable ya array-like structure nahi hai.
// Isliye Array.from() empty array return karta hai.


// Object ke values ko array mein convert karna:
const obj = { name: "Satyam", age: 20 };

console.log(Object.values(obj));
// ["Satyam", 20]


// 6. Array.of() -> Given values se NEW array create karta hai.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// Output:
// [100, 200, 300]
