function convertIfNeccessary(collection){
    return Array.isArray(collection) ? collection : Object.values(collection);
}

function myEach(collection, callback) {
    let convertedCollection = convertIfNeccessary(collection);
    
    let i = 0;
    while(i < convertedCollection.length){
        callback(convertedCollection[i])
        i ++;
    }

    return collection;
}

function myMap(collection, callback) {
    let convertedCollection = convertIfNeccessary(collection);

    const modifiedCollection = [];
    let i = 0;
    while(i < convertedCollection.length){
        modifiedCollection.push(callback(convertedCollection[i]));
        i ++;
    }

    return modifiedCollection;
}


function myReduce(collection, callback, acc){
    let convertedCollection = convertIfNeccessary(collection);

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

}