# soundex-fr
Soundex function adapted for french phonetics   
Compliant, optimized and small package to get the soundex key       

For mapping used see https://fr.wikipedia.org/wiki/Soundex#Description  


### Install
```bash
yarn add @jellyfish/soundex-fr
```
or
```bash
npm install @jellyfish/soundex-fr
```
### Usage
```javascript
import soundex from '@jellyfish/soundex-fr';

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
