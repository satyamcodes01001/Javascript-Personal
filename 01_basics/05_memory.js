// STACK MEMORY -> Primitive Datatypes
// Yahan variable ki value ki COPY milti hai.
// Copy change karne par original variable change nahi hota.

let ytname = "Venomsgamer";

let newname = ytname;  // ytname ki value ki copy newname mein aayi

newname = "SpideyXTGamer";  // Sirf newname ki value change hui

console.log(ytname);   // Venomsgamer
console.log(newname);  // SpideyXTGamer


// HEAP MEMORY -> Objects jaise Non-Primitive Datatypes
// Object ke case mein variable mein object ka reference hota hai.
// Jab hum reference copy karte hain, dono variables same object ko access karte hain.
// Isliye object ki property change karne par change dono variables se dikhega.

let user1 = {
    email: "saundarya@google.com",
    upi: "saundarya@ybl"
};

let user2 = user1;  // Object ka reference copy hua, naya object nahi bana

user2.email = "Maya@google.com";  // Same object ki email change hui

console.log(user1.email);  // Maya@google.com
console.log(user2.email);  // Maya@google.com
