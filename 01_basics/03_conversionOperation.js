let score ="33"
console.log(typeof score);

let numbertype = Number(score)
console.log(typeof numbertype);

// "33" => 33
// "33abc" => NaN
// ture => 1; false => 0

let isLoggedIn1 = "1"
let isLoggedIn2 = "true"
let isLoggedIn3 = "hitesh"

let xyz = Boolean(isLoggedIn1)
console.log(xyz);

// 1 => true; 0 => false
// "" false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);


// *************** Operations ***************

let value = 3
let negvalue = -value
console.log(negvalue);


//---------------------------
let str1 = "Bhagya"
let str2 = " Barhate"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// if there is only 2 numbers then they will print the string only
// About 3 number if that number starting with string then they provide string
// if in 3 number number start without double quoyes then it will display first calulate value and then print string value

console.log(+ture); //o/p = 1 (increments value)
//console.log(true+); //o/p = display error
