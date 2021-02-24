// TODO: Implement a few methods that confirm the chainfile contains all data required for the library to fully function.
// If it isn't fully "okay", it'll try to automatically repair it by filling in as much as the blanks as possible.
// If that's not possible, it'll try to find an older (recent) version of the chain that might be working properly (not by default, auto-restore needs to be on cause it can prevent data loss)
// If possible we can also implement a way to automatically merge the two chains based on the differences between them and prefering the newer version over the older one.
// If nothing can be done to automatically try to heal the file, it should throw an error that will not be catched inside of the library so the developer can implement
// what to do next themselves.

const data = {
  // The timestamp the chain got created
  createdAt: {
    required: false,
    type: String
  },
  //  The timestamp the chain was last updated
  updatedAt: {
    required: true,
    type: String
  },
  // The chain itself, containing all data
  chain: {
    required: true,
    type: Object
  },
  // The transactions that happened within the chain for undoing
  history: {
    required: false,
    type: Array
  },
  // What version of chainson the chain uses (for possible future compatability issues)
  version: {
    required: true,
    type: String
  }
}
