# chainson
A JSON file-based database with a queuing system
```
This library is still heavily in development.
```

## Why use it?
- It's **easy to use**. Everything you need is already included by default with Node.js.
- It's completely dependency free.
- It's small!

## Logic
When the database is "started", it loads the chainfile into memory. Every change to the chainfile will be saved to a json file. 

## Roadmap
Here follows a list of things that still need to be implemented:
- [x] Check if chainfile already exists
- [ ] Check if chainfile is writable
- [ ] Check if chainfile is readable
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
