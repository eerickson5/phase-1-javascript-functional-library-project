function myEach(collection, callback) {
    let convertedCollection = collection
    if(!Array.isArray(collection)){
        convertedCollection = Object.values(collection);
    }
    
    let i = 0;
    while(i < convertedCollection.length){
        callback(convertedCollection[i])
        i ++;
    }

    return collection;
}

function myMap(collection, callback) {
    let convertedCollection = collection
    if(!Array.isArray(collection)){
        convertedCollection = Object.values(collection);
    }


    const modifiedCollection = [];
    let i = 0;
    while(i < convertedCollection.length){
        modifiedCollection.push(callback(convertedCollection[i]));
        i ++;
    }

    return modifiedCollection;
}

function myReduce(collection, callback, acc){
    
}