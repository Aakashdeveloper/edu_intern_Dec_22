var a = "10"
var b = "2"
undefined
a+b
'102'
parseInt(a)+parseInt(b)
12
var c = "Hii"
undefined
parseInt(c)
NaN


var a = "10.11"
var b = "2.54"

parseInt(a)+parseInt(b)
12
parseFloat(a)+parseFloat(b)
12.649999999999999

//es6
Number(a)+Number(b)
12.649999999999999

var a = "101a"
parseInt(a)
101

var b = "21c56"
parseInt(b)
21

var b = "a21c56"
parseInt(b)
NaN

var a = "101a"
Number(a)
NaN

var b = "21c56"
Number(b)
NaN

var b = "a21c56"
Number(b)
NaN