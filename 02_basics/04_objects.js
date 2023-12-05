const tinderUser = new Object()
const tinderUser2 = {}

tinderUser.id="123"
tinderUser.name="Bhagya"
tinderUser.login=false
//console.log(tinderUser2);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Bhagya",
            lastname:"Barhate"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)

//using spared
//const obj4 ={...obj1, ...obj2}

console.log(obj4)

//In Database

const users = [
    {
        id:1,
        name:"Bhagya"
    },
    {
        id:2,
        name:"Upa"
    },
]
users[1].name

//==================================================

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// if you want to ask you have this propert or not use below method

console.log(tinderUser.hasOwnProperty('login'));
// output = true
console.log(tinderUser.hasOwnProperty('login1'));
// False (retures boolean value)

const course = {
    coursename:"js in hindi",
    price:"999",
    courseTeacher:"Hitesh"
}
const {courseTeacher} = course
console.log(courseTeacher);