//Task 1: Student Information

let studentName = "Ruhena Akter Moni";
let age = 23;
let courseName = "Full Stack Web Development with JavaScript (MERN) & AI";
let isEnrolled  = true;

console.log("Student name:" ,studentName);
console.log("Age:" ,age);
console.log("Course name:" ,courseName);
console.log("Is Enrolled:" ,isEnrolled);

//Task 2: Calculator Using Operators

let num1 = 75;
let num2 = 25;

console.log("Addition:" ,num1 + num2);
console.log("Subtraction:" ,num1 - num2);
console.log("Multiplication:" ,num1 * num2);
console.log("Division:" ,num1 / num2);

//Task 3: Loop Practice
//use for loop print numbers 1-10

for(let i=1; i<=10; i++){
    console.log(i);
}

//use while loop print numbers 10-1

let count =10;
while(count>=1){
    console.log(count);
    count--;
}
//Task 4: Function practice
function helloWorld(){
    return "Hello World";
}
console.log(helloWorld());
