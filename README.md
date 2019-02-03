# json-2-csv-kata
Parse array of JSON objects create csv string.

## Requirements
Given as input an array of JSON objects with the same keys, your function should produce a CSV string that could be written in a file (not required).

#### Example
This input
```
[{
  field1: 'fieldValue1',
  field2: 'fieldValue2',
  field3: 'fieldValue3'
}, {
  field1: 'fieldValue4',
  field2: 'fieldValue5',
  field3: 'fieldValue6'
}]
```
Should result in
```
  field1;field2;field3/nfieldValue1;fieldValue2;fieldValue3/nfieldValue4;fieldValue5;fieldValue6
```




