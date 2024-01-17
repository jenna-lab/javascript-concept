// LOOPS IN JS
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. foreach loop
// 5. for...in loop
// 6. for...of loop
// 7. break statement
// 8. continue statement

// 1. for loop
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// 0 1 2 3 4 5 6 7 8 9

for (let i = 0; i < 10; i++) {
    // console.log(i)
}
// console.log("exit");

//9 8 7 6 5 4 3 2 1 0

for (let y = 9; y >= 0; y--) {
    // console.log(y)
}

// example 3
// *
// **
// ***
// ****
// *****
// ******

// for (let z = 1; z <= 6; z++) {
//     console.log("*".repeat(z))            
// }




//ASSIGNMENT

// example 4
// ******
// *****
// ****
// ***
// **
// *

for(let z=6; z>=1; z--){
    console.log("*".repeat(z));
}

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *


// Increasing pattern
for (let z = 1; z <= 5; z++) {
    let spaces = " ".repeat(5 - z); 
    console.log(spaces + "*".repeat(z));
  }
  
  // Decreasing pattern
  for (let z = 4; z >= 1; z--) {
    let spaces = " ".repeat(5 - z); 
    console.log(spaces + "*".repeat(z));
  }


// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// Upper pyramid pattern
for (let z = 1; z <= 5; z++) {
    let spaces = " ".repeat(5 - z);
    console.log(spaces + "*".repeat(z * 2 - 1));
  }
  
  // Lower pyramid pattern
  for (let z = 4; z >= 1; z--) {
    let spaces = " ".repeat(5 - z);
    console.log(spaces + "*".repeat(z * 2 - 1));
  }

// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *
let z=7;
console.log("*".repeat(z));
for(z=1;z<=7;z++){
let spaces=" ".repeat(7-1);
console.log(spaces+ "*".repeat(1));
}



// example 8
//*******
//*
//*
//*
//*
//*
//*

let y=7;
console.log("*".repeat(y));
for(y=1;y<=7;y++){
let spaces=" ".repeat(7-1);
console.log("*".repeat(1)+spaces);
}

// 0 1 2 3 4 5 6 7 8 9
let i = 0;
console.log("start")
while (i < 10) {
    console.log(i)
    console.log("continue")
    i++;
}
console.log("end")

//ASSIGNMENT //generate six random numbers between 1 and 49

// 3. do...while loop : the condition will be  exec at least one time
// do {
//     // code to be executed
// }
// while (condition);

function generateNumbers() {
    let randomNumbers = [];

    for(let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 49)

        if(randomNumbers.includes(randomNumber)) {

         randomNumber = Math.floor(Math.random() * 49)
        }

        randomNumbers.push(randomNumber)
    }

    return randomNumbers;
}

let result = generateNumbers();


console.log(result);

// 0 1 2 3 4 5 6 7 8 9
let j = 2000;
console.log("start")
do {
    console.log(j)
    console.log("continue")
    j++;
} while (j < 10);

//4. break statement : stop the loop

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);  // 0 1 2 3 4
}
console.log("exit")

//5. continue statement : skip the current iteration
for (let i = 0; i < 10; i++) {
    if (i == 8) {
        console.log(`${i} is skipped`)
        continue;
    }
    console.log(i);  // 0 1 2 3 4 6 7 8 9
}
console.log("exit")