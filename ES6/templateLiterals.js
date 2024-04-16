//Template Literals : are the upgrades in quotes which we use to create dynamic html, sting with values etc.
let AnimalSoundES6 = require("./shortHand") // import animal sounds

let dynVal= 25000
let myNormalString = "Loren" + dynVal + JSON.stringify(AnimalSoundES6)

console.log(myNormalString)

// much easier to manage spacing with ``
let myNormalStringTemplate = `Loren ${dynVal} + ${JSON.stringify(AnimalSoundES6)}`

console.log(myNormalStringTemplate)

