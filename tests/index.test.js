const Chainson = require('../lib/index')

describe('Altering chain', () => {
  const chain = new Chainson(chainLocation = './testchain')
  
  test('Add to chain', () => {
    chain.add('hello', 'world')
  
    const res = chain.get('hello')
    expect(res).toEqual('world')
  })
  
  test('Not in chain', () => {
    try {
      chain.get('peter')
    } catch(e) {
      expect(e.message).toMatch('Link `peter` not found in Chain')
    }
  })  
  
  test('Updating in chain', () => {
    chain.update('hello', 'limonade')
    const res = chain.get('hello')
    expect(res).toEqual('limonade')
  })
  
  test('Removing from chain', () => {
    chain.remove('hello')
    try {
      chain.get('hello')
    } catch(e) {
      expect(e.message).toMatch('Link `hello` not found in Chain')
    }
  })
})