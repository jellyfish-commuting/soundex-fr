[![Version](https://img.shields.io/npm/v/@jellyfish-commuting/soundex-fr)](https://www.npmjs.com/package/@jellyfish-commuting/soundex-fr)
[![Licence](https://img.shields.io/npm/l/@jellyfish-commuting/soundex-fr)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/jellyfish-commuting/soundex-fr)](https://travis-ci.org/github/jellyfish-commuting/soundex-fr)
[![Coverage](https://img.shields.io/codecov/c/github/jellyfish-commuting/soundex-fr)](https://codecov.io/gh/jellyfish-commuting/soundex-fr)
[![Downloads](https://img.shields.io/npm/dt/@jellyfish-commuting/soundex-fr)](https://www.npmjs.com/package/@jellyfish-commuting/soundex-fr)

# soundex-fr
Soundex function adapted for french phonetics    
Compliant, optimized and small package to get soundex key    
     
For mapping used see https://fr.wikipedia.org/wiki/Soundex#Description


### Install
```bash
yarn add @jellyfish-commuting/soundex-fr
```
or
```bash
npm install @jellyfish-commuting/soundex-fr
```
### Usage
```javascript
import soundex from '@jellyfish-commuting/soundex-fr';

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
