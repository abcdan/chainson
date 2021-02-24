// Import chainson
const Chainson = require('../lib/index')

// Define the chain, this will use the default variables
const chain = new Chainson()

// Add data to the chain, it will automatically store!
chain.add("hello", "world")

// // Retrieve the data from the chain!
// const world = chain.get("hello")

// // Print the results!
// console.log(`Hello, ${world}!`)