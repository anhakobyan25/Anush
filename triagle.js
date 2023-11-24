let triangle = function(n){
let print = "";
let result = "";
    for(let i = 0; i <= n; i++){
        for(let j = n - i + 1; j > 1; j--){
            print =  print + " "
        }
    for(let k = 1; k <= i; k++){
       print =   print  + "*"  
    }
 print += "\n"
    }   
return print
}







let triangle = function(n){
let print = "";
let result = "";
    for(let i = 0; i <= n; i++){
        for(let j = n - i + 1; j > 1; j--){
            print =  print + "  "
        }
    for(let k = 1; k <= i; k++){
       print =   print  + "  * "  
    }
 print += "\n"
    }   
return print
}
