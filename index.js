const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;

function readSingleFile(fileName, encoding) {
    return new Promise(function (resolve, reject) {
        readFile(fileName, encoding || 'utf-8', function (err, fileData) {
            if (err) {
                reject(err);
            }
            resolve({
                file: fileName,
                data: fileData
            });
        });
    });
}

function batchRead(array, encoding) {
    var promises = [];
    array.forEach(function (item) {
        promises.push(readSingleFile(item, encoding));
    });
    return Promise.all(promises);
}

module.exports = batchRead;