// react

// react is a web library to create single page applications
// its a light weight
// has a very high performance due to virtual dom !!important 
// diffing algorithm
// doesn't use html tmeplates instead creates templates using jsx code
// component based architecture


// dom - document object model
// dom-mutation or manipulation - upon interaction mutation happens and is very slow on browsers
// creation of dom tree
// element rendering
// adjusting html elements
// css - style sheet applied
// css -adjustments , font , spacing
// color adjustments 
// final rendering

// 60 frame/sec
// this is the optimal way
// - if less than still good performance

// create a copy of actual html in javascript object format - virtual dom
// do the change in react component first , check there  if its already present - new virtual dom
// virtual dom just does the swap of the value then re rendering of whole page

// use diffing algorithm to compare the new virtual dom with actual dom , dfs
// if change is there just replace the node instead of re-rendering the whole html / dom

// why facebook, linkedin is able to use React and handle so many people

// react - class components and compoent life cycle methods => component

// creation life cycle
    // 1.  constructor - initialize
// update life cycle
// destruction life cycle