//1. Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that
// its digits product is equal to n.
function printNum(num) {
  let i = 2
  let val = ""
  while (i < num) {
    if (num % i === 0 && num / i < 10) {
      val = i + "" + num / i
      break
    } else {
      i++
    }
  }
  return val
}

//2. Find the biggest common divisor of two inserted numbers.
function divNum(a, b) {
  let i;
  if (a <= b) {
    i = a
  } else {
    i = b
  };
  for (; i; i--) {
    if (a % i === 0 && b % i === 0) break
  }
  return i;
}


//3. Given a number. Print all prime factors of the number.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimeNumber(num) {
  let val = '';
  let number = num
  while (num) {
    number--
    if (num % number === 0 && isPrime(number) === true) {
      val = number + ',' + val
    }
    if (number === 2) break
  }
  return val
}


// 4. Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2
// * 1 , 0! = 1 )
let factorial = function(num) {
  let sum = 1;
  let val = 1;
  for (; sum <= num; sum++) {
    val *= sum
  }
  return val
}

// 5. Given a number n ( n &gt;= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3,
// 5, 8 …, a k = a k-1 + a k-2 )
function fib(num) {
  let a = 1;
  let b = 1;
  let value = 0;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  if (num <= 1) {
    return num
  } else {
    return b;
  }
}

// 6.Given a number n ( n &gt; 0 ). Print Fibonacci series up to n.
function fib(num) {
  let a = 1;
  let b = 0;
  let value = 0;
  for (let i = 0; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
    if (b <= num) {
      value = value + "," + b;
    }
  }
  return value;
}

