//for- while

function mySort(arr) {
  let count = 0
  //let j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false
    let j = 0;
    while (j < arr.length - i - 1) {
      count++
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        swaped = true

      }
      j++
    }
    if (!swaped) {
      break
    }
  }
  return {
    arr: arr,
    count: count
  }
}

//while- while

function mySort(arr) {
  let count = 0
  let i = 0
  while (i < arr.length - 1) {
    count++
    i++
    let swaped = false
    let j = 0;
    while (j < arr.length - i - 1) {
      count++
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        swaped = true
      }
      j++
    }
    if (!swaped) {
      break
    }
  }
  return {
    arr: arr,
    count: count
  }
}

//while-for


function mySort(arr) {
  let count = 0
  let i = 0
  while (i < arr.length - 1) {
    count++
    i++
    let swaped = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      count++
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp

        swaped = true
      }
    }
    if (!swaped) {
      break
    }
  }
  return {
    arr: arr,
    count: count
  }
}

//do-while

function mySort(arr) {
  let swaped;
  do {
    swaped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swaped = true;
      }
    }

    if (!swaped) {
      break
    }
  }
  while (swaped);
  return arr
};

//2. implement build in array sort method with bubble sort algorithm
function mySort(arr){
  let swaped = true
  while (swaped) {
    swaped = false
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swaped = true
      }
    }
  }
  return arr
} 
