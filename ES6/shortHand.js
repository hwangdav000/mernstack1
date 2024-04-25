// Shorthand - avoids writing redundant variable name 

let cat = "miaow",
dog = "woof",
bird = "chirp",
lion = "roar";

// without short hand
let AnimalSound = {
    cat : cat,
    dog : dog,
    bird: bird,
    lion: lion
}

// we can just keep one if key and value both refer to the same name and variable
let AnimalSoundES6 = {
    cat,
    dog,
    bird,
    lion
}

// one liner 
let AnimalSoundES6_one = {cat, dog, bird, lion}

// console.log(AnimalSound)
// console.log(AnimalSoundES6)

// console.log(`Animal Sound refers with 1 ${AnimalSoundES6}`) // {}.toString() => [object object]
// console.log('Animal Sound refers with 2 ' + AnimalSoundES6) // [object object]

// // Solution? 
// console.log(`Animal Sound refers with 3 ${JSON.stringify(AnimalSoundES6)}`) // converts objects into value of strings
// console.log('Animal Sound refers with 4 ' , AnimalSoundES6) // works
// console.log('Animal Sound refers with 5 ' + JSON.stringify(AnimalSoundES6)) // works

module.exports = AnimalSoundES6