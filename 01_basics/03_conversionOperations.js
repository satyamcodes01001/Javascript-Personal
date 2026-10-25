"use strict";

// 1. DATA TYPES

let name = "Satyam";        // String
let age = 18;               // Number
let isLoggedIn = true;      // Boolean
let city;                   // Undefined
let selectedItem = null;   // Null
let bigNumber = 123456789n; // BigInt
let id = Symbol("id");      // Symbol

console.log(typeof name);         // string
console.log(typeof age);          // number
console.log(typeof isLoggedIn);   // boolean
console.log(typeof city);         // undefined
console.log(typeof selectedItem); // object (historical behaviour)
console.log(typeof bigNumber);    // bigint
console.log(typeof id);           // symbol


// 2. TYPE CONVERSION

// String -> Number
console.log(Number("50"));       // 50
console.log(Number("50abc"));    // NaN
console.log(Number(""));         // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0

// Number -> String
console.log(String(100));        // "100"
console.log(typeof String(100)); // string

// Value -> Boolean
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("Satyam"));  // true
console.log(Boolean(""));        // false
console.log(Boolean("0"));       // true
console.log(Boolean(null));      // false

// parseInt() & parseFloat()
console.log(parseInt("50px"));     // 50
console.log(parseInt("10.8"));     // 10
console.log(parseFloat("10.8kg")); // 10.8
console.log(parseInt("abc50"));    // NaN


// 3. ARITHMETIC OPERATIONS

let a = 10;
let b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1  (Remainder)
console.log(a ** b); // 1000 (Power)

// Increment & Decrement
let x = 5;
console.log(++x); // 6 (Pehle increase, phir print)
console.log(x++); // 6 (Pehle print, phir increase)
console.log(x);   // 7

console.log(--x); // 6 (Pehle decrease, phir print)
console.log(x--); // 6 (Pehle print, phir decrease)
console.log(x);   // 5


// 4. ASSIGNMENT OPERATORS

let score = 10;

score += 5; // score = score + 5
console.log(score); // 15

score -= 3; // score = score - 3
console.log(score); // 12

score *= 2; // score = score * 2
console.log(score); // 24

score /= 4; // score = score / 4
console.log(score); // 6

score %= 4; // score = score % 4
console.log(score); // 2


// 5. COMPARISON OPERATORS

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 3);   // false
console.log(5 == "5"); // true (value compare, conversion possible)
console.log(5 === "5");// false (value + type compare)
console.log(5 != "5"); // false
console.log(5 !== "5");// true


// 6. STRING OPERATIONS

let firstName = "Satyam";
let lastName = "Seth";

console.log(firstName + " " + lastName); // Satyam Seth

// Template literals: string ke andar variables use karna
console.log(`My name is ${firstName} and my age is ${age}`);


// 7. IMPLICIT TYPE CONVERSION

console.log("5" + 2); // "52" (String concatenation)
console.log("5" - 2); // 3 (String -> Number)
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5

console.log(1 + "2" + 3); // "123"
console.log(1 + 2 + "3"); // "33"


// 8. LOGICAL OPERATORS

console.log(true && true);   // true (AND)
console.log(true && false);  // false
console.log(true || false);  // true (OR)
console.log(false || false); // false
console.log(!true);          // false (NOT)
console.log(!false);         // true


// 9. SPECIAL CASES

console.log(typeof NaN); // number
console.log(typeof null); // object
console.log(typeof []);   // object

console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
