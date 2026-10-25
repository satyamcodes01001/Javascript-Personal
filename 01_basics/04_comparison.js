
// 1. BASIC COMPARISONS

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(5 <= 5);    // true


// 2. == VS ===

console.log(5 == "5");   // true  -> type conversion possible
console.log(5 === "5");  // false -> type bhi same hona chahiye

console.log(5 != "5");   // false
console.log(5 !== "5");  // true


// 3. null CONVERSION (IMPORTANT)

console.log(Number(null)); // 0 -> explicit conversion

console.log(null > 0);     // false -> numeric comparison: 0 > 0
console.log(null < 0);     // false -> numeric comparison: 0 < 0
console.log(null >= 0);    // true  -> numeric comparison: 0 >= 0
console.log(null <= 0);    // true  -> numeric comparison: 0 <= 0

console.log(null == 0);   // false -> == mein null, 0 nahi banta
console.log(null === 0);  // false -> type bhi different hai


// 4. null VS undefined

console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false


// 5. STRING COMPARISON

console.log("2" > "10");  // true -> strings character-wise compare hoti hain
console.log(2 > 10);      // false -> numbers compare hote hain

console.log("apple" < "banana"); // true


// 6. STRING + NUMBER COMPARISON

console.log("10" > 5);   // true -> numeric comparison
console.log("10" < 20);  // true
console.log("abc" > 5);  // false -> comparison NaN banne par false


// 7. NaN COMPARISON

console.log(Number("abc")); // NaN

console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(NaN > 0);     // false
console.log(NaN < 0);     // false

console.log(Number.isNaN(NaN)); // true


// 8. BOOLEAN CONVERSION IN COMPARISON

console.log(true == 1);   // true
console.log(false == 0);  // true

console.log(true === 1);  // false
console.log(false === 0); // false


// 9. ARRAY AND OBJECT COMPARISON

console.log([] == 0);   // true -> [] converts to ""
console.log([] == "");  // true

// console.log([] === []); // false -> different array objects
// console.log({} === {}); // false -> different object references


// IMPORTANT POINTS:
// 1. Comparison ka result generally true ya false hota hai.
// 2. == type conversion kar sakta hai; === type conversion nahi karta.
// 3. Number(null) -> 0, but null == 0 -> false.
// 4. null aur undefined, == mein equal hain; === mein nahi.
// 5. NaN kisi value ke equal nahi hota, khud NaN ke bhi nahi.
// 6. String vs string -> lexicographic comparison.
// 7. String vs number -> numeric comparison ki koshish.
// 8. [] aur {} truthy values hain.
// 9. Alag arrays/objects ko compare karne par references compare hote hain.