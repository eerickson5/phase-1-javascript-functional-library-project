function convertIfNeccessary(collection){
    return Array.isArray(collection) ? collection : Object.values(collection);
}

function myEach(collection, callback) {
    const convertedCollection = convertIfNeccessary(collection);
    
    let i = 0;
    while(i < convertedCollection.length){
        callback(convertedCollection[i])
        i ++;
    }

    return collection;
}

function myMap(collection, callback) {
    const convertedCollection = convertIfNeccessary(collection);

    const modifiedCollection = [];
    let i = 0;
    while(i < convertedCollection.length){
        modifiedCollection.push(callback(convertedCollection[i]));
        i ++;
    }

    return modifiedCollection;
}


function myReduce(collection, callback, acc){
    const convertedCollection = convertIfNeccessary(collection);

    let i = 0;
    if(acc === undefined){
        acc = convertedCollection[0];
        i = 1;
    }

    while(i < convertedCollection.length){
        acc = callback(acc, convertedCollection[i], convertedCollection);
        i ++;
    }

    return acc;
}

function myFind(collection, predicate) {
    const convertedCollection = convertIfNeccessary(collection);
    let i = 0;

    while(i < convertedCollection.length) {
        if(predicate(convertedCollection[i])){
            return convertedCollection[i]
        }
        i++;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const convertedCollection = convertIfNeccessary(collection);
    let returnArray = []
    let i = 0;

    while(i < convertedCollection.length) {
        if(predicate(convertedCollection[i])){
            returnArray.push(convertedCollection[i])
        }
        i++;
    }
    return returnArray;
}

function mySize(collection) {
    const convertedCollection = convertIfNeccessary(collection);

    let i = 0;
    while(convertedCollection[i] != undefined){
        i ++;
    }
    return i;
}

function myFirst(array, n = 1) {
    if (n === 1){
        return array[0];
    }

    let i = 0;
    let returnArray = []
    while(i < n && array[i] != undefined){
        returnArray.push(array[i])
        i++;
    }
    return returnArray;
}

function myLast(array, n = 1){
    if (n === 1){
        return array[array.length - 1];
    }

    let i = array.length - n;
    let returnArray = []
    while(i < array.length && array[i] != undefined){
        returnArray.push(array[i])
        i++;
    }
    return returnArray;
}