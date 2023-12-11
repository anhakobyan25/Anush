//1. Given a string. Check whether the string is palindrome or not.
function palidrome(world) {
  let i = world.length - 1
  let str = ''
  while (i >= 0) {
    str += world[i]
    i--
  }
  if (str === world) {
    return ("yes")
  } else {
    return ("no")
  }
}

//2. Given a string and symbols. Change first symbol by the second one in the string.

function replace(str, el1, el2) {
  let string = ''
  string = str.replaceAll(el1, el2)
  return string
}

function replace(string, element1, element2) {
  let str = ''
  let str1 = ''
  let str2 = ''
  let j = string.length
  for (let i = 0; i < j; i++) {
    if (string[i] === element1) {
      str += string[i] = element2
    } else if (string[i] === ' ') {
      str += ' '
    } else {
      str += string[i]
    }
  }
  return str
}

//3.Insert a string. Create new string which is the mirror reverse of the inserted one around
// its center.

function palidrome(word) {
  let i = word.length
  let str = ''
  let str1 = ''
  let str3 = ''
  let num = ''
  let j = word.length - 1
  if (i % 2 === 0) {
    num = i / 2
  } else {
    num = Math.floor(i / 2)
    str3 = word[num]
  }
  for (let i = 0; i < num; i++) {
    str += word[i]
  }
  if (i % 2 !== 0) {  // Եթե տրված բառի քանակը զույգ է պետք չի, բայց կենտ լինեու դեպքում անհրաժեշտ է  
    num = num + 1
  }
  while (j >= num) {
    str1 = word[j] + str1
    j--
  }
  return str1 + str3 + str
}


//4. Print the following number pattern: function will take argument (in this case it is 5)

function number(num) {
  let str = ""
  let str1 = ""
  let str2 = ""
  let str3 = ""
  for (let i = 1; i <= num; i++) {
    for (let k = i; k > 0; k--) {
      str = k + str
    }
    str1 = str1 + "\n" + str
    if (i >= num) {
      str2
    } else {
      str2 = str + "\n" + str2
    }
    str = ""
  }
  str3 = str1 + "\n" + str2
  return str3
}


//5.Given an object. Invert it (keys become values and values become keys).

let me = {
  name: "Anush",
  surname: "Hakobyan"  // նոր  object֊ի դեպքում միայն վերջի 2  property-ն է վերադարձնում
}

for (let key in me) {
  console.log(`${me[key]} : ${key}`)
}

