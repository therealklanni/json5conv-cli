const test = require('ava')
const {parseBuf} = require('./')

test('json5conv parseBuf correctly calls JSON.stringify JSON5.parse', t => {
  t.plan(2)
  t.is(parseBuf(Buffer.from('{test:1235}', 'utf8')), JSON.stringify({test: 1235}))
  t.is(parseBuf(Buffer.from(`{
    // this is a comment
    prop: 'value',
    infinity: Infinity,
    dangle: true,
  }`)), JSON.stringify({
    prop: 'value',
    infinity: null,
    dangle: true
  }))
})
