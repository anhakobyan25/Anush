let square = function(a, b){
let result = '';
	for(let i = 1; i <= a; i++){
	let print = '';
	for(let j = 1; j <= b; j++){
		if( j > 1 && j < b && i > 1 && i < a){
		print =  print + ' '
		} else {
		print = print + '*'
		}
	}
	result =  result + print + "\n"
	}
	console. log(result)
}


1. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

let num = prompt("Give me number");
let i = 0;
while(num){
	if(num % 10 === 0)
		i++
	if(num % 10 !== 0)
		i = 0
	if(i>=3){
alert("Yes")
    break;
	}
num = Math.floor(num / 10)
}
if(i	=== 0	)
	alert("No")


2.Insert a number. Remove all zeros from the number, except the last one and print the
number. If there are at most one zero, print “Nothing to remove”.

let num = prompt("Give me number");
let last = undefined;
let str = "";
let j = 0;
let num1 = num
while(num){
	if(num % 10 === 0){
		j++
	}
last = num % 10;
num = (num - last) /10;
 	 if(last === 0 && num !== 0 ){
  		if( last === 0){
  		 last = ''
  	 	}str = '' + last + str
      	} else {
     	 str = last + str
     	 }
}
 if(j === 1 || num1 === 0){
	alert("nothing to remove")
}else if(num1 % 10 === 0 && j > 1){
	alert(str + "0")
} else{
	alert(str)
}




3. Insert a n positive number. Check number is prime or not. Prime numbers are numbers that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.

let num = prompt("")
for (let i = 2; i < num; i++) {
	if (num % i === 0) {
	alert('false');
  	} 
}
if (num !== 1){
	alert ('true')
}



4. Insert a n positive number. Print the n-st prime number.  

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
function generatePrime (num) {
  let arr = [];
  let i = 2;
  while(arr.length < num){
      if(isPrime(i)){
	arr.push(i)
      }
      if(i === 2){
     	 i= i + 1
      } else {
       i = i + 2
	}
  };
  return arr;
};


5. Insert two positive integers n and m between 1 and 10. Compute and print  nm.


function sum (a, b){
	if(a >= 1 && a <= 10 && b >= 1 && b <= 10){
		sum = a**b;
	} else {
		sum = "No function"
	}
return sum;
} 
