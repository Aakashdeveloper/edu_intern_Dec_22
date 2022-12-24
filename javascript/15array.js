> array is  collection homogenious as well as hetrogenious datatype

var a = ["hii","Hello","test","Try"] >>> array of string
var b = [5,9,3,6,2] >>> array of number
var c = [true,false,false,true] >>> array of boolean

var d = [3,35,"dgd","dffd",4,true,"dgd"]

var city = ["Delhi","Amsterdam","London","Venice"]
city.length
4
city[0]
'Delhi'
city[1]
'Amsterdam'
city.push("Boston")
5
city
(5) ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston']
city.push("Helsinki")
6
city
(6) ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston', 'Helsinki']

city.pop()
'Helsinki'
['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston']
city.pop(2)
'Boston'
city.pop(20000)
'Venice'
city
(3) ['Delhi', 'Amsterdam', 'London']

var city = ["Delhi","Amsterdam","London","Venice"]
undefined
city.shift()
'Delhi'
city.unshift('Dubai')
4
city
(4) ['Dubai', 'Amsterdam', 'London', 'Venice']

push > add in the end of array
unshift > add in the beginning of array
shift > remove the first value
pop > remove the last value


var city = ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston', 'Helsinki']

city.slice(2)
(4) ['London', 'Venice', 'Boston', 'Helsinki']
city.slice(2,5)
(3) ['London', 'Venice', 'Boston']
city
(6) ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston', 'Helsinki']

///
city.splice(startIndex,deletecount,values)
//remove 1 value from index number 2
city.splice(2,1)
['London']
city
(5) ['Delhi', 'Amsterdam', 'Venice', 'Boston', 'Helsinki']

// on index 3 dont remove any value but add 2 values
city.splice(3,0,'Innsburg','Stockholms')
[]
city
(7) ['Delhi', 'Amsterdam', 'Venice', 'Innsburg', 'Stockholms', 'Boston', 'Helsinki']


// on index 1 remove 2 value and add 1 values
city.splice(1,2,'Pune')
(2) ['Amsterdam', 'Venice']
city
(6) ['Delhi', 'Pune', 'Innsburg', 'Stockholms', 'Boston', 'Helsinki']

var a = "Hii"
var b = ["Hiii"]

Array.isArray(a)
false
Array.isArray(b)
true

var city = ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston', 'Helsinki']
undefined
city.indexOf('Nice')
-1
city.indexOf('Pune')
-1
city.indexOf('Delhi')
0
city.indexOf('Boston')