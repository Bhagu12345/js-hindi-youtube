// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//using ; you can put 2 iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')