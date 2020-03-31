# soundex-fr
Soundex function adapted for french phonetics   
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

### Return value

Soundex key (4 chars)
