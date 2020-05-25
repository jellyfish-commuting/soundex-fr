![Version](https://img.shields.io/npm/v/@thejellyfish/soundex-fr)
![Licence](https://img.shields.io/npm/l/@thejellyfish/soundex-fr)
![Build](https://img.shields.io/travis/thejellyfish/soundex-fr)
![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/soundex-fr)
![Downloads](https://img.shields.io/npm/dt/@thejellyfish/soundex-fr)

# soundex-fr
Soundex function adapted for french phonetics   
Compliant, optimized and small package to get the soundex key       

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

if (!soundex('Robert').localeCompare(soundex('Rupert'))) {
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

| Prop     | Type     |  Default         | Note                      |
|----------|----------|------------------|---------------------------|
| `str`    | `string` | _Required field_ | Input value               |
| `length` | `int`    | `4`              | Length of the soundex key |


### Return value

Soundex key of `length` chars
