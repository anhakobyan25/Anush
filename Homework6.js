includesi +
  charAt +
  endsWith - 
  startsWith +
  slice +
  indexOf +
  replace
replaceAll +

  // replaceAll
  function myReplaceAll(string, substr, newSubstr) {
    let newString = '';
    let i = 0;
    while (i < string.length) {
      let match = true;
      for (let j = 0; j < substr.length; j++) {
        if (substr[j] !== string[i + j]) {
          match = false;
          break;
        }
      }
      if (match) {
        newString += newSubstr;
        i += substr.length;
      } else {
        newString += string[i];
        i++;
      }
    }
    return newString;
  }

//replace

function myReplace(string, searchValue, newValue) {
  let newString = '';
  let replaced = true;
  for (let i = 0; i < string.length; i++) {
    let match = true;
    for (let j = 0; j < searchValue.length; j++) {
      if (searchValue[j] !== string[i + j]) {
        match = false;
        break;
      }
    }
    if (match && replaced) {
      newString += newValue;
      i += searchValue.length - 1;
      replaced = false;
    } else {
      newString += string[i];
    }
  }

  return newString;
}


//charAt

function myCharAt(string, index = 0) {
  let index1 = Math.floor(index)
  for (let i = 0; i < string.length; i++) {
    if (i === index1) {
      return string[i]
    }
  }
  return -1
}

//startsWith
function myStartsWith(string, searchString, index = 0) {
  for (let i = index; i < string.length; i++) {
    for (let j = 0; j < searchString.length; j++) {
      if (string[i + j] !== searchString[j]) {
        return false;
      }
    }
    return true;
  }
  return false;
}




//slice

function mySlice(string, indexStart = 0, indexEnd = string.length) {
  if (indexStart >= string.length) {
    return ""
  }
  if (indexStart < 0) {
    indexStart = Math.max(indexStart + string.length, 0)
  }
  if (indexEnd < 0) {
    indexEnd = Math.max(indexEnd + string.length, 0)
  }
  if (indexEnd <= indexStart) {
    return ""
  }
  let newString = ''
  for (let i = indexStart; i < indexEnd; i++) {
    newString += string[i]
  }
  return newString
}
//indexOf

function myIndexOf(string, searchValue, fromIndex = 0) {
  for (let i = fromIndex; i < string.length; i++) {
    let match = true;
    for (let j = 0; j < searchValue.length; j++) {
      if (string[i + j] !== searchValue[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i;
    }
  }

  return -1;
}

// endsWith ??

function myEndsWith(string, searchString, index = string.length) {
  let result 
  let str = '
  for (let i = index - searchString.length; i < index; i++) {
    str += a[i]
  }
    for (let j = 0 ; j <  str.length ; j++) {
      if (searchString[ j] !== str[j]) {
        result = false;
        break;
      } else {
        result = true
    }
  }
  return result
}

//inculdes

function myIncludes(string, searchValue, start = 0) {
  for (let i = start; i < string.length; i++) {
    let match = true;
    for (let j = 0; j < searchValue.length; j++) {
      if (string[i + j] !== searchValue[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return true;
    }
  }
  return false;
}

