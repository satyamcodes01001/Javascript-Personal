const course = {
    course_name: "AI model training",
    price: 1000,
    course_instructor: "Jarvis"
}

// Normal way (Dot Notation)
console.log(course.course_instructor);  // Jarvis

// Object Destructuring
const { course_instructor } = course;

console.log(course_instructor);  // Jarvis

// Renaming a variable during destructuring
const { course_instructor: instructor } = course;

console.log(instructor);  // Jarvis

// Important Points

// 1. Object Destructuring -> Object ki properties ko directly variables mein extract karna.

// 2. Normal way mein property access karne ke liye dot notation use hota hai.
//    Example: course.course_instructor

// 3. Destructuring mein property ka same name variable ban jaata hai.
//    Example: const { course_instructor } = course;

// 4. Renaming -> Property ka naam change kiye bina uske corresponding variable ka naam change kar sakte hain.
//    Example: const { course_instructor: instructor } = course;

// 5. course_instructor: instructor ka matlab hai ki course_instructor property ki value instructor variable mein store hogi.

// 6. Destructuring ke baad original object change nahi hota.

// 7. Agar property object mein exist nahi karti, toh destructured variable ki value undefined hoti hai.


// ### Ek important difference samjho:


// const { course_instructor: instructor } = course;

// Yahan:

// course_instructor → Object ki property (key).

// instructor → Naya variable.

// instructor ki value → "Jarvis".

// Output:

// Jarvis

// Yaad rakhna: Destructuring mein : ka use variable ko rename karne ke liye hota hai, na ki value assign karne ke liye.