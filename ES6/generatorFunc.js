function name(params) {
    return 1000;
}

name() // invocation
name() // invocation
name() // invocation
name() // invocation


function getIncrements(incrementedValue=0) {
    return incrementedValue + 1
}

// generator function
// notice the * in front of the function to specify genreator function
function *ShowpopulationIncrement(baseValue, reduceByDeaths) {   
    
    var incrementedValue = getIncrements(incrementedValue)
    
    yield {count : baseValue + incrementedValue} // when we call for first yield
    yield {count : baseValue + incrementedValue+1} // when we call for second yield
    yield {count : baseValue + incrementedValue+2} // when we call for third yield

    // end of invocation
    return baseValue + incrementedValue
}
let populationPointer = ShowpopulationIncrement(8000, 1000)

console.log(populationPointer.next()) // first yield (done: false execution not complete)
console.log(populationPointer.next()) // second yield
console.log(populationPointer.next()) // third yield
console.log(populationPointer.next()) // return (done: true execution complete)
console.log(populationPointer.next()) // value: undefined , done: true (unable to yield further)