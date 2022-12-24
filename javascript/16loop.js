for
while
do while
for of >> array
for in >>> Object

///////////
for > iterate over the array as well as print the series

for(inital,condition,operation)

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston', 'Helsinki']
for(i=0; i<city.length;i+2){
    console.log(city[i])
}



var city = ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston', 'Helsinki']
for(i=0; i<city.length;i++){
    console.log(`<li>${city[i]}</li>`)
}

/////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

/////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

var city = ['Delhi', 'Amsterdam', 'London', 'Venice', 'Boston', 'Helsinki']
for(mycity of city){
    console.log(mycity)
}
