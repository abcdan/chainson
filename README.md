<div style="text-align:center"><img src="https://file.coffee/u/0rmnUPqCtl.png" /></div>

# chainson
![npm](https://img.shields.io/npm/v/chainson)
![npm](https://img.shields.io/npm/dw/chainson)
![GitHub last commit](https://img.shields.io/github/last-commit/abcdan/chainson)
![NPM](https://img.shields.io/npm/l/chainson)
<a href="https://snyk.io/test/github/abcdan/chainson?targetFile=package.json"><img src="https://snyk.io/test/github/abcdan/chainson/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/abcdan/chainson?targetFile=package.json" style="max-width:100%;"></a>
[![Ecologi (Trees)](https://img.shields.io/ecologi/trees/lngzl)](https://ecologi.com/lngzl?r=6005cc57f70194001deaedfa)

🪐 Chainson is a database-backed Map with zero dependencies for Node.js

**Please read the following before using:**
This library is still in alpha. A lot of things might change internally and to the outside of the library. I aim to keep the API the same but I'm confident some things are gonna change. It's recommended to install it and lock it on one version to avoid having it automatically grab a newer version (that could theoretically break your application).

Now we got that out of the way, let's start!

## Example
Let me show you how easy to use it is! More examples will be in the `examples` folders in the (near) future!
```js
const Chainson = require('chainson')

const chain = new Chainson()
chain.add('hello', 'world')

const world = chain.get('hello')
console.log(`Hello, ${world}!`) // Helo, world!
```

## Installing
It's pretty easy cause we're on NPM! Simply run the following command to install the library as a dependency. We **do not** recommend installing it globally to ensure you use the right version in your projects.
### [NPM](https://www.npmjs.com/package/chainson) - Node Package Manager
```cli
npm i chainson
```

### [Yarn](https://yarnpkg.com/package/chainson)  - Package Manager
```
yarn add chainson
```

## Why create a library like this?
We all have worked on an application that, for example, needed a simple settings menu or has to store something based on what an user enters and just want to simply store it. Usually, this requires you to setup some sort of database (such as SQLite or even heavier databases). This _can_ take some effort and introduces security issues if not properly implemented (such as SQL-Injection).

That's why I'm working on a library to simply `store` and `retrieve` data without having to set up anything or having to think about security.

## Isn't this basically storing a map to JSON and vice verca?
Kinda, yes! But it'll be able to do much more than just storing and retrieving data. Besides that, it's a lot of fun for me learning new things while working on a project that I'm actually planning on using myself in the future.

## Why use it?
- It's **easy to use**. Everything you need is already included by default with Node.js.
- It's completely dependency free.
- It's small!
- You can rapidly store and retrieve data without having to worry about SQL.
- It's literally as easy as using a Map, it uses a Map for storing in memory and it's gonna be fully compliant with the Map methods on the future.
- It got typings, duh, it's built with Typescript!

## Logic
When the database is "started", it loads the chainfile into memory. Every change to the chainfile will be saved to a json file. 

## What does Chainson mean?
It's simple! The data is stored in a Map which is kinda like a Chain and when the data is made persistent on the drive of the system it's running on it stores it as `JSON` so that's where the "son" part comes from.

## What is supported?
- [x] Strings
- [x] Numbers
- [x] Booleans
- [x] Arrays
- [x] Objects
- [x] Floats
- [x] null
- [x] undefined, _theoretically supported. It just removes it from the chain._
- [ ] Maps, _which is funny because it uses maps to properly function. I might add a function later to put a Map inside of a chain_

## Roadmap
**Moved**! I'm gonna keep updating this README until all of the tasks here are done. But if you want to see new tasks or an overview of what is being worked on head over to our Github Projects board with the Tasks over [here](https://github.com/abcdan/chainson/projects/1)

Here follows a list of things that still need to be implemented:
- [x] Check if chainfile already exists
- [x] Create chainfile if none is available
- [x] Queue for adding, removing, etc. to avoid getting the file corrupt
- [x] Add to chain
- [x] Getting from chain
- [x] Check if chainfile is writable
- [x] Check if chainfile is readable
- [x] Loading chainfile into memory
- [x] A store function to save memory to a file
- [x] Check if exists in chain
- [x] Remove from chain
- [x] Update in chain
- [x] Convert the data from the saved chain file back to original data structure
- [ ] Automatic repairing of a chainfile
- [ ] Automatic restoring of an older chainfile
- [ ] Automatic merging of older and newer chainfile (if new one not fully functional)
- [ ] Write a complex parser to add/change/remove specific key/value pairs [example of what I mean](https://stackoverflow.com/questions/62369838/javascript-parse-object-key-value-from-string-keys)
- [ ] In between editing and saving lock the chain (chainfile.json.lock) with an ID that has to match the process trying to edit it in order to unlock it
- [ ] Optional `Chainhistory` folder with older versions of the chain, can be "every 5 minutes" or "every change" etc.
- [ ] Robust logging system
- [ ] Robust error handling
- [ ] Undo function for recent changes (bottom of chainfile holds last x amount of change)
- [ ] Have the entire thing be fully asynchronous (except methods appended with Sync for flexibility)

_If something is [x], it doesn't mean that it's working properly. It's just means that it has been implemented. In the future I'm gonna add unit tests and make everything a lot more secure. I first want to build a base to work from._

## Documentation
There are a few places to find documentation for the application:
1. In the codebase itself there _should_ be comments on almost every method.
2. An online version based on these comments can be found on [chainson.js.org](https://chainson.js.org).

## How to release a new version or contribute.
This part of the documention is mainly for myself at the moment (or people who might have release permissions in the future).

To ensure everything is formatted and linted, simply run `npm run prepare-for-release` and all the things that need to be ran will be run. If there are **any** errors or warnings: ⚠️ DO NOT RELEASE ⚠️ and fix the issues or wait for a fix to be implemented.

This ensures everything is consistent across all releases.

If you are contributing to the project ensure you run this command before you open a pull request. There have to be no errors before we're gonna merge your pull request so everything stays consistent.

During development you probably don't want to constantly generate documentation. That's why I've added `npm run fix` to make your life easier during development.

When you are ready to make a pull request make a pull request to the latest `x.x.x-y` branch (ensure your branch is based on the latest version of dev to avoid any merge conflicts). Once that gets accepted it will be merged into the `x.x.x-y` branch. Once a new set of features is implemented and the version is ready for release we'll merge it with `master`. 

In the meanwhile, I personally work on the `dev` branch with my own features. There is a chance that your code get changed on the `dev` branch after it has been merged for optimizations. So don't be scared if you see me changing your code :)

## Done reading? Check out this joke!
![Jokes Card](https://readme-jokes.vercel.app/api)
_Refresh for a new one!_

## License
The library is released under an Apache 2.0 License.
