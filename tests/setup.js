const fs = require('fs')
const path = require('path')

// TODO: Make it so the test folder contains the testchain.json file
beforeAll(() => {
});

// Has to become afterEach but causes issues with permissions atm.
afterAll(async () => {
  deleteFile('../testchain.json')
});

function deleteFile(fileName) {
  fs.unlink(path.join(__dirname, fileName), (err) => {
    if (err) throw err;
  });
}