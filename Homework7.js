// filter
function myFilter(array, fn) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

//find
function myFind(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined
}


//some
function mySome(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      return true;
    }
  }
  return false
}


//forEach
function myForEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array)
  }
}

//map
function myMap(array, fn) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i], i, array))
  }
  return newArray
}

//every
function myEvery(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (!(fn(array[i], i, array))) {
      return false;
    }
  }
  return true
}

//reduce
function myReduce(array, fn, initialValue){
    let result = [] 
    let acc = initialValue !== undefined ? initialValue : 0
    for(let i = 0; i< array.length; i++){
    acc  = (fn(acc ,array[i],i, array))
    }
return acc 
}
