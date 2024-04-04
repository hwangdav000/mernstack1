// 

function foo(params){
    throw "this is executed on stack"
}

function bar(params) {
    foo()
}

function baz(params) {
    bar()
}

//baz()

function User(params){
    User()
}
User() // maximum call stack size exceeded , blow up stack