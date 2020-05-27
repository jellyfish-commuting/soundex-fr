[![Version](https://img.shields.io/npm/v/@thejellyfish/soundex-fr)](https://www.npmjs.com/package/@thejellyfish/soundex-fr)
[![Licence](https://img.shields.io/npm/l/@thejellyfish/soundex-fr)](https://en.wikipedia.org/wiki/ISC_license)
[![Build](https://img.shields.io/travis/thejellyfish/soundex-fr)](https://travis-ci.org/github/thejellyfish/soundex-fr)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/soundex-fr)](https://codecov.io/gh/thejellyfish/soundex-fr)
[![Downloads](https://img.shields.io/npm/dt/@thejellyfish/soundex-fr)](https://www.npmjs.com/package/@thejellyfish/soundex-fr)

# soundex-fr
Soundex function adapted for french phonetics   
Compliant, optimized and small package to get soundex key       

For mapping used see https://fr.wikipedia.org/wiki/Soundex#Description  


### Install
```bash
yarn add @thejellyfish/soundex-fr
```
or
```bash
npm install @thejellyfish/soundex-fr
```
### Usage
```javascript
import soundex from '@thejellyfish/soundex-fr';

// Test equal phonetics
if (soundex('Robert') === soundex('Rupert')) {
  console.log('Equal soundex');
} else {
  console.log('Different soundex');
}
    
// Output : Equal soundex
```


### Params

```javascript
soundex(str, length);
```

| Prop     | Type     |  Default         | Note                  |
|----------|----------|------------------|-----------------------|
| `str`    | `string` | _Required field_ | Input value           |
| `length` | `int`    | `4`              | Length of soundex key |


### Return value

Soundex key of `length` chars
