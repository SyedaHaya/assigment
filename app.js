
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."
//ans
var remainingFuel = prompt("Enter remaining fuel in liters:");
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel.");
}
// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
//Ans
var subject1Marks = prompt("Enter marks obtained in subject 1:");
var subject2Marks = prompt("Enter marks obtained in subject 2:");
var subject3Marks = prompt("Enter marks obtained in subject 3:");
var totalMarks = prompt("Enter total marks:");
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var grade, remarks;
if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Very Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "Good";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Satisfactory";
} else {
    grade = "F";
    remarks = "Fail";
}
console.log("Total Marks Obtained:", totalObtainedMarks);
console.log("Percentage:", percentage);
console.log("Grade:", grade);
console.log("Remarks:", remarks);





// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).
//Ans
var literalArr = ['apple', 'banana', 'cherry'];
var stringArr = ['Hello', 'World', 'JavaScript'];
var numberArr = [10, 20, 30, 40, 50];
var boolArr = [true, false, true, true, false];
var mixedArr = ['apple', 25, true, 'banana', 42, false];
var qualificationArr = [
    { degree: 'Bachelor of Science', field: 'Computer Science', year: 2020 },
    { degree: 'Master of Arts', field: 'English Literature', year: 2018 },
    { degree: 'Bachelor of Commerce', field: 'Finance', year: 2022 }
];


// 5)Write a program to store phone manufacturers in an array.
//Ans
var phoneManufacturers = ["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "OnePlus", "Sony"];
console.log("Phone Manufacturers:", phoneManufacturers);


// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.
//Ans
var studentScores = [85, 92, 78, 95, 88];
console.log("Original Student Scores:", studentScores);
studentScores.sort(function(a, b) {
    return a - b;
});
console.log("Sorted Student Scores (Ascending Order):", studentScores);

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].
//Ans
var wordsArray = ["This", "is", "my", "cat"];
var singleString = wordsArray.join(" ");
console.log("Single String:", singleString);

// 8)Implement the FIFO (First In First Out) approach using arrays.
//Ans
var fifoQueue = [];
fifoQueue("Item 1");
fifoQueue("Item 2");
fifoQueue("Item 3");
var removedItem = fifoQueue.shift();
console.log("Removed Item:", removedItem);
console.log("Updated Queue:", fifoQueue);


// 9)// Implement the LIFO (Last In First Out) approach using arrays.
//Ans
var lifoStack = [];
lifoStack("Item 1");
lifoStack("Item 2");
lifoStack("Item 3");
var removedItem = lifoStack();
console.log("Removed Item:", removedItem);
console.log("Updated Stack:", lifoStack);

// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.
//Ans
var itemsArray = ["apple", "banana", "cherry", "grape", "orange"];
var userInput = prompt("Enter an item to search:");
userInput = userInput.toLowerCase();
var found = false;
for (var i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i] === userInput) {
        found = true;
        break;
    }
}
if (found) {
    alert("Item found in the list!");
} else {
    alert("Item not found in the list.");
}
// 11)Write a program to identify the largest number in the given array.
//Ans
var numbersArray = [45, 67, 12, 89, 34, 98, 23];
var largestNumber = numbersArray[0];
for (var i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > largestNumber) {
        largestNumber = numbersArray[i];
    }
}
console.log("The largest number is:", largestNumber);


// 12)Write a program to identify the smallest number in the given array.
//Ans
var numbersArray = [45, 67, 12, 89, 34, 98, 23];
var smallestNumber = numbersArray[0];
for (var i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] < smallestNumber) {
        smallestNumber = numbersArray[i];
    }
}
console.log("The smallest number is:", smallestNumber);


// 13)Write a program to print multiples of 5 ranging from 1 to 100.
// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.
//Ans
document.write("<h2>Multiples of 5 from 1 to 100:</h2>");
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + "<br>");
    }
}
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var sum = num1 + num2;
document.write("<h2>Addition Result:</h2>");
document.write(num1 + " + " + num2 + " = " + sum);

// 14)Repeat task1 for subtraction, multiplication, division & modulus.
//Ans
var num1 = 10;
var num2 = 5;
var result = num1 - num2;
console.log("Subtraction Result:", result);

var num1 = 10;
var num2 = 5;
var result = num1 * num2;
console.log("Multiplication Result:", result);

var num1 = 10;
var num2 = 5;
var result = num1 / num2;
console.log("Division Result:", result);

var num1 = 10;
var num2 = 3;
var result = num1 % num2;
console.log("Modulus Result:", result);



//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."
//Ans
var cityName = prompt("Enter a city name:");
cityName = cityName();
if (cityName === "karachi") {
    alert("Welcome to the city of lights.");
} else {
    alert("Welcome to " + cityName + ".");
}
// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."
//Ans
var gender = prompt("Enter your gender (Male/Female):");
gender = gender();
if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning.");
}
//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
//Ans
var signalColor = prompt("Enter the color of the road traffic signal (Red/Yellow/Green):");
signalColor = signalColor();
if (signalColor === "red") {
    alert("Must Stop.");
} else if (signalColor === "yellow") {
    alert("Ready to move.");
} else if (signalColor === "green") {
    alert("Move now.");
} else {
    alert("Invalid signal color.");
}