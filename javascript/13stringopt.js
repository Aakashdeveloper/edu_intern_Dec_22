var city = "amSteRDam"

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'

var city = "amSteRDam"
city.length
9
city.charAt(0)
'a'
city.charAt(1)
'm'
city.charAt(8)
'm'

var a = "John"
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true


var city = "amSteRDam"
undefined
city.slice(1)
'mSteRDam'
city.slice(2)
'SteRDam'
city.slice(2,5)
'Ste'
city.slice(0,-1)
'amSteRDa'
city.slice(-1)
'm'
city.slice(2,-1)
'SteRDa'
city.slice(-1,2)
''

var city = "amSteRDam"
var city = "Amsterdam"

var city = "amSteRDam"
undefined
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var city= "paRIs"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'



var name = "   Nikita  "
undefined
name.length
11
name.trim()
'Nikita'
var name = "   Nikita . "
undefined
name.trim()
'Nikita .'

var name = "   Nikita . "
undefined
name.replaceAll(' ','')
'Nikita.'

var a= "I am learning Javascript"
undefined
a.replace('Javascript','JS')
'I am learning JS'

var url1 = "https://github.com/Aakashdeveloper/edu_intern_nov_22"

url1.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_intern_nov_22']0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"4: "edu_intern_nov_22"length: 5[[Prototype]]: Array(0)
var out = url1.split('/')[4]
out
'edu_intern_nov_22'

var url2 = "https://github.com/Aakashdeveloper/edu_ui_nov_22"
var out = url2.split('/')[4]
out
'edu_ui_nov_22'

var a= "I am learning Javascript"
undefined
a.split(' ')
(4) ['I', 'am', 'learning', 'Javascript']

var a= "Javascript"
a.split('')
['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var b = a.split('')
b

['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
b.toString()
'J,a,v,a,s,c,r,i,p,t'

b.toString().replaceAll(',','')
'Javascript'