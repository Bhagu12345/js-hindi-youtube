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

function calculatecartprice(...num3){
    return num3
}
console.log(calculatecartprice(100,200,300))

const user = {
    username:"Bhagya",
    age:25
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
//handleobject(user);

//Value pass throuth object in function
handleobject({
    username:"Upsi",
    age: 20
})

//value pass through array in function
const myarray = [100,200,300,400]
function returnsecondvalue(getArray){
    return getArray[3]
}
console.log(returnsecondvalue(myarray));

