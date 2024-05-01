//6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc 

let aMap = new Map();
let key1 = 'hello'
let key2 = {}

aMap.set(key1, "string")
aMap.set(key2, "object")
console.log(aMap.entries())
console.log(aMap.get(key1))
console.log(aMap.get(key2))

aMap.delete('hello')
console.log(aMap.entries())
aMap.clear()
console.log(aMap.entries())

let aSet = new Set([1, 2, "David"])
console.log("set entries: ", aSet.entries())
aSet.add(3)
aSet.add(3)
console.log("set entries: ", aSet.entries())
console.log(aSet.has("David"))
console.log(aSet.has("David H"))

//7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

function studentPromise() {return new Promise((resolve, reject) => {
    //let userSession = Authentication_API(userInfo) // make call to server get the response and store
    // get one or the other
    let ES5_details = ["Arrow Function", "Const and Let", "Template Literals", "Destructuring", "Spread and Rest"]
    
    setTimeout(()=>{
        resolve({
            status : "resolved",
            value : ES5_details,
            code : 200
        })
    }, 2000)

    setTimeout(()=>{
        reject({
            status : "rejected",
            value : "rejected promise",
            code : 400
        })
    }, 3000)
})} 

//8. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)

function mult_Large(...numbers){
    let sum=1;
    sum= numbers.reduce((prevVal, currVal) => prevVal * currVal, 1)
    return sum
}

console.log(mult_Large(1,2,3))

//9. Use the question #7 to build promises using async and await - with multithread

async function asyncCall() {
    console.log("Before 1")

    await studentPromise()
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    console.log("After 1")

    console.log("Before 2")
    await studentPromise()
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    console.log("After 2")
}
asyncCall()

//10. Create an example of generator function of your choice

function incrementByOne(incValue=0) {
    return incValue+1
}

function *incGenerator(baseValue) {
    var incValue = incrementByOne(baseValue)
    yield {value : incValue}
    incValue = incrementByOne(incValue)
    yield {value : incValue}
    incValue = incrementByOne(incValue)
    yield {value : incValue}
    incValue = incrementByOne(incValue)
    return incValue
}
let incPointer = incGenerator(10)
console.log(incPointer.next())
console.log(incPointer.next())
console.log(incPointer.next())
console.log(incPointer.next())