const marval = ["Bhagya", "Upsi", "Nidhu"]
const fri = ["Prah", "Bhagya", "Shubh"]
//marval.push(fri)
//console.log(marval);

const allAlpha = marval.concat(fri)
//console.log(allAlpha);

// ======== Spread Array=========

const all_new_fri = [...marval, ...fri]
console.log(all_new_fri);
