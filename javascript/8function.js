var a = 10
var b = 20
a+b
30

/*keyword nameOfFunction(parameter){
    return output
}*/

function add(a,b){
    return a+b
}

add(2,3)
5
add(5,9)
14
add("Hii","Biee")
'HiiBiee'

function add(a,b){
    return a+b
}
add(2,3)
5
add(5,9)
14
add("Hii","Biee")
'HiiBiee'
add(1,2,3)
3

function add(a,b,c){
    return a+b+c
}
add(1,2,3)
6
add(1,2)
NaN

//es6 rest operator
function add(...args){
    console.log(args)
}
add(2,5,7,9)
VM315:2 (4) [2, 5, 7, 9]


function add(...args){
    let out = 0;
    for(data of args){
        out = out+data
    }
    return out
}
add(2,5)
7
add(2,5,6,8)
21

//////////
//es5
function add(a,b){
    return a+b
}

//es6 (arrow funcetion)
let add = (a,b) => {return a+b}

add(5,1)
6
