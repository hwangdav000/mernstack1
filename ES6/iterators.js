//Apart from for,of,in,froeach, while... ES6 introduced 4 new Iterators, which helps to read, modify and re-create the
//Array or Array of objects
//1.Filter, 2.Map, 3.Some and 4.Reduce
// When we do new changes it should not impact the core object, preserve the immutability


let personsList = [
    {id : 1, name : "John", savedBy : "CaptainAmerica"},
    {id : 2, name : "Alice", savedBy : "IronMan"},
    {id : 3, name : "Roger", savedBy : "CaptainAmerica"},
    {id : 4, name : "Adam", savedBy : "IronMan"},
    {id : 5, name : "Alex", savedBy : "Spiderman"},
    {id : 6, name : "Robin", savedBy : "Batman"},
]

// 1. Print persons saved by captain america
let savedByCA = personsList.filter(person => person.savedBy == "CaptainAmerica" ? person: "")

console.log(savedByCA)

// 2. List the Names saved by Iron man and add super hero before the name

let savedByIronMan = personsList.map(person => {
    if (person.savedBy == "IronMan") {
        return {"New Birth" : "Super Hero" + person.name}
    }}).filter(names => names != undefined)

console.log(savedByIronMan)

console.log(personsList) // preservation of immutability , no changes in value in main list

//3. Check if someone is saved by Black Panther
// some works as short circuit

let savedByBlkPanther = personsList.some(person => person.savedBy == "BlackPanther")
let savedByBatman = personsList.some(person => person.savedBy == "Batman")
console.log(savedByBlkPanther)
console.log(savedByBatman)

// set => data structure used to create arrays of unique value

//4. Give me the number of persons saved by each super hero uniquely

let personsSavedUniquely = personsList.reduce((prevVal, currVal, index, array) => {
    console.log(prevVal)
    // get from the array
    console.log(currVal)
    console.log(index)
    //console.log(array)
    prevVal[currVal.savedBy] = prevVal[currVal.savedBy] ? prevVal[currVal.savedBy] + 1 : 1
    // becomes the previous val
    return prevVal
}, new Set())

console.log(personsSavedUniquely)

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present in list