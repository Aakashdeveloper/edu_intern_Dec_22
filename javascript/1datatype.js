es5
es6
Ecma script

////datatypes
> String = "Hiii" 'hey' "10" '10a' 'true' `hi`
> Number = 10 893 4237835 .3423 34.3423
> Boolean = true/false

//es5
var a = 10
var b = "Hiii"
var c = true

typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d = "10"
typeof(d)
'string'

var d = 10.2234
typeof(d)
'number'


var a = 20
var b = 10
a+b (addition)
30
a-b
10
a*b
200
a/b
2
a%b
0
5%2
1
5%3
2

2%4
2
3%4
3

var a = "Hii"
var b = "Javascript"
a+b (concat)
'HiiJavascript'
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN


var a = "hiii"
var b = 10
a+b
'hiii10'
a-b
NaN
"10a"-1

String + String = String
String + number = String
number + String = String
number + number = number

10+"20"+30
"1020"+30
'102030'-1

"10"+20+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

10+"20"+30-1
102029
"10"+20+30-1
102029
10+20+"30"-1
3029

"10"-1
9
10*"2"
20
"10"/"2"
5
"10"+"2"
'102'


"10a"/"2"
NaN
10*"2a"
NaN

//////
true is equal to 1
false is equal to 0

var a = true
var b = false
var c = true

a+c
2
a+b
1
10/false
Infinity
20+true
21