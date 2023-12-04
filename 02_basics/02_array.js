const marval = ["Bhagya", "Upsi", "Nidhu"]
const fri = ["Prah", "Bhagya", "Shubh"]
//marval.push(fri)
//console.log(marval);

const allAlpha = marval.concat(fri)
//console.log(allAlpha);

// ======== Spread Array=========

const all_new_fri = [...marval, ...fri]
console.log(all_new_fri);

//Flat in array

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

//from in array
console.log(Array.isArray("Bhagya"))
console.log(Array.from("Bhagya"))

console.log(Array.from({name:"Bhagya"})) //it retturens empty array, because he don't know how to convert this object in array, like how convert like key or value?

//of in array
let Bhagya1 = "Beatiful"
let Bhagya2 = "Smart"
let Bhagya3 = "Honest"

console.log(Array.of(Bhagya1, Bhagya2, Bhagya3));

