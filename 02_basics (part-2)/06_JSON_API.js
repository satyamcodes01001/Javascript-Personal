// ==========================================
// 1. WHAT IS JSON?
// ==========================================

// JSON = JavaScript Object Notation
// JSON ek lightweight data format hai.
// Iska use different applications ke beech data exchange karne ke liye hota hai.

// JSON Example:
/*
{
    "Name": "Satyam Seth",
    "Age": 20,
    "isLoggedIn": false
}
*/

// Important:
// JSON aur JavaScript Object similar dikhte hain,
// but dono exactly same nahi hain.

// JavaScript Object:
const user = {
    name: "Satyam",
    age: 20,
    isLoggedIn: false
};

// JSON Rules:
// 1. Keys double quotes ("") mein honi chahiye.
// 2. String values double quotes mein honi chahiye.
// 3. Functions allowed nahi hain.
// 4. undefined allowed nahi hai.
// 5. Comments allowed nahi hain.
// 6. Trailing comma allowed nahi hai.


// ==========================================
// 2. JSON DATA TYPES
// ==========================================

// JSON mein 6 types ke values allowed hain.

const jsonExample = {
    name: "Satyam",                     // String
    age: 20,                            // Number
    isLoggedIn: true,                   // Boolean
    marks: null,                        // Null
    skills: ["C++", "Python", "JS"],    // Array
    address: {                          // Object
        city: "Ghaziabad",
        state: "UP"
    }
};


// ==========================================
// 3. JSON.stringify()
// ==========================================

// JavaScript Object -> JSON String

const student = {
    name: "Satyam",
    age: 20
};

const jsonData = JSON.stringify(student);

console.log(jsonData);
console.log(typeof jsonData);     // string


// ==========================================
// 4. JSON.parse()
// ==========================================

// JSON String -> JavaScript Object

const data = '{"name":"Satyam","age":20}';

const parsedData = JSON.parse(data);

console.log(parsedData);
console.log(parsedData.name);     // Satyam
console.log(typeof parsedData);   // object


// Important:
// JSON.stringify() = Object to String
// JSON.parse() = String to Object


// ==========================================
// 5. WHAT IS API?
// ==========================================

// API = Application Programming Interface

// API ek medium hai jiske through
// two different applications communicate karti hain.

// Example:
// Weather App -> Weather API -> Weather Data

// API se data generally JSON format mein mil sakta hai.

/*
{
    "city": "Ghaziabad",
    "temperature": 30,
    "weather": "Sunny"
}
*/

// API Working:
// 1. Client request bhejta hai.
// 2. Server request receive karta hai.
// 3. Server data process karta hai.
// 4. Server response return karta hai.
// 5. Client response ko use karta hai.


// ==========================================
// 6. TYPES OF API
// ==========================================

// 1. REST API
// 2. SOAP API
// 3. GraphQL API
// 4. WebSocket API

// REST API commonly HTTP methods use karti hai:
// GET    -> Data receive karna
// POST   -> New data create karna
// PUT    -> Existing data update karna
// PATCH  -> Partially update karna
// DELETE -> Data delete karna


// ==========================================
// 7. FETCH API
// ==========================================

// fetch() ka use server/API se data request karne ke liye hota hai.

// fetch() ek Promise return karta hai.

// Example:

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// ==========================================
// 8. ASYNC / AWAIT WITH FETCH
// ==========================================

// Async/Await promises handle karne ka cleaner way hai.

async function getUsers() {

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();


// ==========================================
// 9. RESPONSE METHODS
// ==========================================

// response.json() -> JSON data ko JavaScript value mein convert karta hai.
// response.text() -> Response ko text format mein read karta hai.
// response.blob() -> Binary data handle karta hai.
// response.status -> HTTP status code.
// response.ok -> True if status is between 200-299.

// Example:

async function getData() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    console.log(response.status);
    console.log(response.ok);

    const data = await response.json();

    console.log(data.name);
}

getData();


// ==========================================
// 10. HTTP STATUS CODES
// ==========================================

// 200 -> OK (Request successful)
// 201 -> Created (New resource created)
// 400 -> Bad Request
// 401 -> Unauthorized
// 403 -> Forbidden
// 404 -> Not Found
// 500 -> Internal Server Error
// 503 -> Service Unavailable


// ==========================================
// 11. API DATA CAN BE OBJECT OR ARRAY
// ==========================================

// Important:
// API se data hamesha Object mein nahi milta.
// Kabhi Object aur kabhi Array bhi mil sakta hai.

// OBJECT RESPONSE:

const objectData = {
    name: "Satyam",
    age: 20
};

console.log(objectData.name);


// ARRAY RESPONSE:

const arrayData = [
    { name: "Satyam", age: 20 },
    { name: "Tony", age: 25 },
    { name: "Jarvis", age: 30 }
];

console.log(arrayData[0]);
console.log(arrayData[0].name);

// Array ke saare methods use kar sakte hain:
// map(), filter(), reduce(), forEach(), find(),
// includes(), slice(), etc.

// Example:

arrayData.forEach((user) => {
    console.log(user.name);
});

const filteredUsers = arrayData.filter((user) => {
    return user.age > 20;
});

console.log(filteredUsers);


// ==========================================
// 12. IMPORTANT POINTS
// ==========================================

// 1. JSON is a data exchange format.
// 2. API allows applications to communicate.
// 3. JSON keys must be in double quotes.
// 4. JSON.stringify() converts JS value into JSON string.
// 5. JSON.parse() converts JSON string into JS value.
// 6. fetch() returns a Promise.
// 7. response.json() also returns a Promise.
// 8. async/await makes Promise handling easier.
// 9. API response can be an Object, Array or other JSON value.
// 10. Always handle errors using try-catch or .catch().
// 11. fetch() does not automatically reject on HTTP errors
//     like 404 or 500. Check response.ok manually.
// 12. API data is not always available immediately.
//     It is asynchronous, so use await or .then().
