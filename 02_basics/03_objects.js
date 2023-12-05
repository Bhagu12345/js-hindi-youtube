//Object Literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Bhagya",
    [mySym]: "mykey1",
    age:18,
    Location:"Pune",
    email:"b.k.barhate@gmail.com",
    isLoggedIn:false  
}
console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser[mySym])

JsUser.email="Bhagya@gmail.com"
//Object.freeze(JsUser)
JsUser.email="Bhagya@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greetingTwo = function(){
    console.log(`Hello,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());