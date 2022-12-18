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