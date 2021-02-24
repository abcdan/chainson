// Import chainson
const Chainson = require('../lib/index')

// Define the chain, this will use the default variables
const chain = new Chainson()


// Print the full chain before doing anything!
console.log(chain.full())

// Add data to the chain, it will automatically store!
chain.add("hello", "world")

// Retrieve the data from the chain!
// const world = chain.get("hello")

// Check if the chain has the "hello" key!
// const contains = chain.contains("hello")
// console.log(contains)

// Print the results!
// console.log(`Hello, ${world}!`)

// Print the full at the end!
console.log(chain.full())