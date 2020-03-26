# soundex-fr
Soundex function adapted for french phonetics   
See https://fr.wikipedia.org/wiki/Soundex#Description  


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

    if (!soundex('PÉNIBLE').localeCompare(soundex('PEMIPLE'))) {
      console.log('Equal soundex');
    } else {
      console.log('Different soundex');
    }
    
    // Output : Equal soundex
```
