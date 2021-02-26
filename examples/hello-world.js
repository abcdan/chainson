/**
 * HEADSUP!
 * If you cloned this repository. Ensure that you run `npm run build` so you can use the '../lib/index`.
 * If you are planning on using this example code, simply replace '../lib/index' with 'chainson'
 */

// Import chainson
const Chainson = require('../lib/index')

// Define the chain, this will use the default variables
const chain = new Chainson()

// Print the full chain before doing anything!
console.log(chain.full())

// Add data to the chain, it will automatically store!
chain.add('hello', 'world')

// Retrieve the data from the chain!
const world = chain.get('hello')

// Check if the chain has the "hello" key!
const contains = chain.contains('hello')
console.log(contains)

// Print the results!
console.log(`Hello, ${world}!`)

// Print the full at the end!
console.log(chain.full())
