"use strict";

// 1. OBJECT CREATION

// Singleton Object -> Constructor ki help se create hota hai.
// const tinderUser = new Object();

// Non-Singleton Object -> Object literal ki help se create hota hai.
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Stark";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


// 2. NESTED OBJECTS

// Ek object ke andar doosra object bhi store kar sakte hain.
const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Satyam",
            lastname: "Seth"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);

// Optional Chaining (?.)
// Agar beech ki property exist nahi karti (null/undefined),
// toh error aane ke bajaye undefined return hota hai.
console.log(regularUser.fullname?.userfullname?.firstname);


// 3. COMBINING OBJECTS

const obj1 = {
    1: "A",
    2: "B"
};

const obj2 = {
    3: "C",
    4: "D"
};

const obj3 = {
    5: "E",
    6: "F"
};

// Method 1: Objects ko directly nest kar dega.
// const obj4 = { obj1, obj2 };

// Method 2: Object.assign()
// First parameter target object hai.
// Baaki objects ki properties target mein copy hoti hain.
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// Method 3: Spread Operator (Recommended)
const obj4 = { ...obj1, ...obj2, ...obj3 };

console.log(obj4);


// 4. ARRAY OF OBJECTS

// Jab multiple objects ko ek saath store karna ho,
// tab Array of Objects use karte hain.
const users = [
    {
        id: "1",
        email: "fb@google.com"
    },
    {
        id: "2",
        email: "snap@google.com"
    },
    {
        id: "3",
        email: "insta@google.com"
    }
];

// Array ke index ki help se object access kar sakte hain.
console.log(users[1].email);  // snap@google.com


// 5. OBJECT METHODS

// Object.keys() -> Object ki saari keys ka Array return karta hai.
console.log(Object.keys(tinderUser));

// Object.values() -> Object ki saari values ka Array return karta hai.
console.log(Object.values(tinderUser));

// Object.entries() -> Har key-value pair ko separate Array mein convert karta hai.
console.log(Object.entries(tinderUser));

// hasOwnProperty() -> Check karta hai ki given property
// object ki apni property hai ya nahi.
console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // true
console.log(tinderUser.hasOwnProperty("isLogged"));    // false