# chainson
![npm](https://img.shields.io/npm/v/chainson)
![npm](https://img.shields.io/npm/dw/chainson)
![GitHub last commit](https://img.shields.io/github/last-commit/abcdan/chainson)
![NPM](https://img.shields.io/npm/l/chainson)

A JSON file-based database with a queuing system
```
This library is still heavily in development.
```

## Installing
It's pretty easy cause we're on NPM! Simply run the following command to install the library as a dependency. We **do not** recommend installing it globally to ensure you use the right version in your projects.
### NPM - Node Package Manager
```cli
npm i chainson
```

### Yarn 
```
yarn add chainson
```

## Why create a library like this?
We all have worked on an application that, for example, needed a simple settings menu or has to store something based on what an user enters and just want to simply store it. Usually, this requires you to setup some sort of database (such as SQLite or even heavier databases). This _can_ take some effort and introduces security issues if not properly implemented (such as SQL-Injection).

That's why I'm working on a library to simply `store` and `retrieve` data without having to set up anything or having to think about security.

## Why use it?
- It's **easy to use**. Everything you need is already included by default with Node.js.
- It's completely dependency free.
- It's small!

## Logic
When the database is "started", it loads the chainfile into memory. Every change to the chainfile will be saved to a json file. 

## Roadmap
Here follows a list of things that still need to be implemented:
- [x] Check if chainfile already exists
- [x] Create chainfile if none is available
- [ ] Check if chainfile is writable
- [ ] Check if chainfile is readable
- [ ] Loading chainfile into memory
- [ ] A store function to save memory to a file
- [ ] Automatic repairing of a chainfile
- [ ] Automatic restoring of an older chainfile
- [ ] Automatic merging of older and newer chainfile (if new one not fully functional)
- [ ] Add to chain
- [ ] Check if exists in chain
- [ ] Remove from chain
- [ ] Update in chain
- [ ] In between editing and saving lock the chain (chainfile.json.lock) with an ID that has to match the process trying to edit it in order to unlock it
- [ ] Queue for adding, removing, etc. to avoid getting the file corrupt
- [ ] Optional `Chainhistory` folder with older versions of the chain, can be "every 5 minutes" or "every change" etc.
- [ ] Robust logging system
- [ ] Undo function for recent changes (bottom of chainfile holds last x amount of change)


## How to release a new version or contribute.
This part of the documention is mainly for myself at the moment (or people who might have release permissions in the future).

To ensure everything is formatted and linted, simply run `npm run prepare-for-release` and all the things that need to be ran will be run. If there are **any** errors or warnings: ⚠️ DO NOT RELEASE ⚠️ and fix the issues or wait for a fix to be implemented.

This ensures everything is consistent across all releases.

If you are contributing to the project ensure you run this command before you open a pull request. There have to be no errors before we're gonna merge your pull request so everything stays consistent.

## License
The library is released under an Apache 2.0 License.