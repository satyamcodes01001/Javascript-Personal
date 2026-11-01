// OBJECTS

// Object -> Key-value pairs ke form mein data store karta hai.
// Har key ki ek value hoti hai.

// 1. Singleton Object
// Singleton ka matlab: kisi class/type ka sirf ek instance.
// Constructor se object create karne par bhi zaroori nahi ki singleton hi bane.

// Object.create() -> Isse object create kar sakte hain.
// Ye constructor-based object creation ka ek method hai.


// 2. Object Literals
// Curly braces {} ka use karke object create karte hain.

const mysym = Symbol("key1");

const JsUser = {
    name: "Satyam",
    "full name": "Satyam Seth",
    age: 18,

    [mysym]: "key1",  // Symbol ko key banane ke liye [] use karte hain.

    location: "Varanasi",
    email: "satyam@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday", "Sunday"]
};


// ACCESSING OBJECT PROPERTIES

// 1. Dot Notation
console.log(JsUser.name);  // Satyam

// 2. Square Bracket Notation
console.log(JsUser["name"]);  // Satyam

// Square brackets mein key ko string ke form mein pass karte hain.

// Important:
// console.log(JsUser.full name);  // Invalid syntax
// Kyunki property name mein space hai.

console.log(JsUser["full name"]);  // Satyam Seth

// Symbol ko access karne ke liye bhi [] use karte hain.
console.log(JsUser[mysym]);  // key1

console.log(typeof JsUser[mysym]);  // string


// MODIFYING OBJECT PROPERTIES

JsUser.email = "radhe@google.com";

// Object.freeze() -> Object ko freeze kar deta hai.
// Iske baad existing properties modify nahi kar sakte.

Object.freeze(JsUser);

JsUser.email = "rose@google.com";

console.log(JsUser.email);  // radhe@google.com

// Freeze hone ke baad modification apply nahi hua.


// FUNCTIONS INSIDE OBJECTS

// JavaScript mein functions ko values ki tarah treat kar sakte hain.
// Isliye object ke andar bhi functions store kar sakte hain.

JsUser.greeting = function() {
    console.log("Hello JS user");
};

// Function ko execute karne ke liye () lagate hain.
JsUser.greeting();


// THIS KEYWORD

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

JsUser.greetingTwo();


// INPORTANT POINTS:-


// this.name -> Current object ki name property access karta hai.
// Output: Hello JS user, Satyam


// 1. Object -> Data ko key-value pairs mein store karta hai.

// 2. Object Literal -> {} ka use karke object create karte hain.

// 3. Object.create() -> Is method se new object create kar sakte hain.
//    Ye automatically Singleton nahi banata.

// 4. Symbol -> Unique primitive value hoti hai.
//    Symbol ko object key banane ke liye [mysym] use karte hain.

// 5. Object Properties Access:
//    Dot Notation       -> obj.name
//    Square Bracket     -> obj["name"]
//    Space wali keys ko square brackets se access karte hain.

// 6. Dynamic Access:
//    obj.property       -> Literally "property" key search karega.
//    obj[property]      -> Variable ki value ko key banayega.

// 7. Object.freeze() -> Object ki existing properties modify,
//    add ya delete nahi kar sakte.
//    Freeze shallow hota hai (nested objects freeze nahi hote).

// 8. const vs Object.freeze():
//    const -> Variable ko reassign nahi kar sakte.
//    freeze() -> Object ki properties change nahi kar sakte.

// 9. Function inside Object -> Method kehlata hai.

// 10. Function Reference vs Function Execution:
//     obj.greeting   -> Function reference return karta hai.
//     obj.greeting() -> Function execute karta hai.

// 11. this Keyword -> Method ke andar current calling object
//     ko refer karta hai (normal function method ke context mein).

// 12. Template Literals (` `) -> String ke andar variables
//     insert karne ke liye ${} use karte hain.

// 13. Object ke andar Array, Function aur doosre Objects
//     bhi store kar sakte hain.