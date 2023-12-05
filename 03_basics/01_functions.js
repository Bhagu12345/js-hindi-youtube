function myFirstFunction(){
    console.log("B");
    console.log("h");
    console.log("a");
    console.log("g");
    console.log("u");

}
myFirstFunction();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // console.log("me");
    // return result

    return num1 + num2
    
}
const result = addTwoNumbers(3,3)
//console.log(result);

function loginUser(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}
console.log(loginUser());
