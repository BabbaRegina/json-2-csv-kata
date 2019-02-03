import test from 'ava'
const { stripIndents } = require('common-tags')
const { covertJson } = require('./index')

test('foo', t => {
  const arrayToConvert = [{
    field1: 'some',
    field2: 'thing',
    field3: 'else',
    field4: 'to',
    field5: 'say'
  }, {
    field1: 'some 1',
    field2: 'thing 1',
    field3: 'else 1',
    field4: 'to 1',
    field5: 'say 1'
  }, {
    field1: 'some 2',
    field2: 'thing 2',
    field3: 'else 2',
    field4: 'to 2',
    field5: 'say 2'
  }, {
    field1: 'some 3',
    field2: 'thing 3',
    field3: 'else 3',
    field4: 'to 3',
    field5: 'say 3'
  }, {
    field1: 'some 4',
    field2: 'thing 4',
    field3: 'else 4',
    field4: 'to 4',
    field5: 'say 4'
  }]

  const csv = covertJson(arrayToConvert)
  
  t.deepEqual(csv, stripIndents`
  field1;field2;field3;field4;field5
  some;thing;else;to;say
  some 1;thing 1;else 1;to 1;say 1
  some 2;thing 2;else 2;to 2;say 2
  some 3;thing 3;else 3;to 3;say 3
  some 4;thing 4;else 4;to 4;say 4
`)
})

