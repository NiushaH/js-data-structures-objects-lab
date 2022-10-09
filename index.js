// Write your solution in this file!
const driver = { key: "value" };

{obj, key, value};

function updateDriverWithKeyAndValue(obj, key, value) {
    const newObj = Object.assign({}, obj, {[key]: value });

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(obj) {
    const newObj = Object.assign({}, obj);

    delete newobj[key];

    return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]; 

    return obj;
}

/*

updateDriverWithKeyAndValue()- this function should take in three arguments: 
   a driver Object, a key and a value. This function should not mutate the driver
   and should return a new driver that has an updated value for the key passed in.

destructivelyUpdateDriverWithKeyAndValue() - this function should work the same 
   as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed
   in.

deleteFromDriverByKey() - this function should take in a driver Object and a key.
   It should delete the key/value pair for the key that was passed in from the 
   driver Object. This should all not actually mutate the driver passed in.

destructivelyDeleteFromDriverByKey() - this function should work the same as 
   deleteFromDriverByKey() but it should mutate the driver passed in. Be sure to 
   consider whether and how using dot notation vs. bracket notation might affect 
   your solution.

*/


// TRAVERSING NESTED OBJECTS  
// function find(array, criteriaFn) {
//     let current = array
//     let next = []
//     while (current || current === 0) {
//       if (criteriaFn(current)) {
//         return current
//       }
//       if (Array.isArray(current)) {
//         for (let i = 0; i < current.length; i++) {
//           next.push(current[i])
//         }
//       }
//       current = next.shift()
//     }
//     return null
//   }

// const numberCollections = [1, [2, [4, [5, [6]], 3]]]

// find(numberCollections, number => number > 5)
// find(numberCollections, number => (typeof number === 'number' && number > 5))
