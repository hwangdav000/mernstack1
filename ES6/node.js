//Node JS -
// runtime for JS
// to run JS outside the browser
// google chrome v8 engine 
// non blocking single thread
// scalable network application
// servers, APIs , file system interactions and all other thing that we can think of by development framework
// webex scale up to handle the increase in users
// scale vertically , computer can handle 1 terabyte of capacity -> 2 terabyte
// scale horizontally, introduce multiple computers 

// non blocking - approach

// Java Certification

// David N => Mexican - 30 min
// Eric M => Italian - 20 min
// Suyash => South Asian - 10 min

// Waiters=> attendant

// Approach 1 Blocking approach

// David N <==> Order <==> Kitchen (waits) ==> 30 min => delivers
// Eric M <==> Order2 <==> Kitchen (waits) ==> 20 min => delivers
// etc
// waiter and kitchen is blocked
// need multiple threads / 3 waiters to take order

// Apporach 2 ==> Non blocking (using event loop for registered API's, callbacks)

// David N <==> order1 <==> kitchen (order-key1) <==> check order-key ==> 30 mins ==> Delivers
// Eric M <==> order2 <==> kitchen (order-key2) <==> check order-key ==> 30 mins ==> Delivers
// Suyash <==> order3 <==> kitchen (order-key3) <==> check order-key ==> 10 mins ==> Delivers

// waiter not blocked, will take all orders at same time 
// kitchen is the api as soon as order is ready will deliver to customer
// Total Time == > maximum of 30 minutes (to finish order)
// 50% reductions

// 1 scenario which can fail 
// 30 min order takes longer , makes other orders to take longer



