const Chainson = require('../lib/index')

test('Hello world test', async () => {
  const chain = new Chainson()
  chain.add('hello', 'world')

  const res = chain.get('hello')
  expect(res).toEqual('world')
})