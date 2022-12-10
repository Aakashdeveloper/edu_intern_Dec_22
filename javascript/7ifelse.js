if(condition){
    // do something
}else{
   // do something 
}

var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

var a = 11
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 11 is odd


var a = 9
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3 == 0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}
Number 9 is divisible by 3

var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3 == 0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

////ternary operator
(single line ifelse) 

condition ? if condition is true: if condition is false

var a = 10
a > 10 ? "Hii":"Biee"
'Biee'

var a = 10
a == 10 ? "Hii":"Biee"
'Hii'

var a = 10
a == 10 ? a+1:a-1
11

var a = 10
a > 10 ? a+1:a-1
9
