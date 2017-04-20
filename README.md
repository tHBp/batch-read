# batch-read

Asynchronous multiple file read with promises! :rocket:

## Getting Started

```
$ npm install --save batch-read
```

## Usage

```javascript
const batchRead = require('batch-read');

batchRead(['file-1', 'file-2', 'file-3', 'file-n']).then(function(result){
    console.log(result);
    /* [
        {
            file: 'file-1',
            data: 'This is file 1'
        },
        {
            file: 'file-2',
            data: 'This is file 2'
        },
        {
            file: 'file-3',
            data: 'This is file 3'
        },
        {
            file: 'file-n',
            data: 'This is file n'
        }
    ]*/
}).catch(function(error){
    //catch the error!
})
```

## API

### batchRead(array [, encoding])

Reads the array of files and returns a promise that resolves when everything completes.

#### array

Type: `Array`<br>
Default: `none`

Array of files to be read.

#### encoding

Type: `String`<br>
Default: `utf-8`

The encoding of the files to be read.

## License
MIT © [The Half Blood Prince](mailto://thehalfbloodprince.github@gmail.com)