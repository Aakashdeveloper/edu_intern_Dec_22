var a = []  //array
var b = {} //object

let movieName = "Avengers"
let movieRating = 4.5
let movieType = "Action"

let movieName1 = "Jab We Met"
let movieRating1 = 4.7
let movieType1 = "Romatic"

var movie = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}

movie.name
'Avengers'
movie.rating
4.5
movie.type
'Action'

movie.ind="Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.5, type: 'Action', ind: 'Hollywood'}
movie.rating = 4.6
4.6
movie
{name: 'Avengers', rating: 4.6, type: 'Action', ind: 'Hollywood'}
delete movie.type
true
movie
{name: 'Avengers', rating: 4.6, ind: 'Hollywood'}

movie['name']
'Avengers'

JSON(Javascript Object notation)

var movies = [
    {
        name:"Avengers",
        rating:4.5,
        type:'Action'
    },
    {
        name:"Jab We Met",
        rating:4.7,
        type:'Romatic'
    }
]

movies[1].name
'Jab We Met'
movies[0].name
'Avengers'


var movie = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}

for(key in movie){
    console.log(key)
}

for(key in movie){
    console.log(movie[key])
}


var movies = [
    {
        name:"Avengers",
        rating:4.5,
        type:'Action'
    },
    {
        name:"Jab We Met",
        rating:4.7,
        type:'Romatic'
    }
]


for(movie of movies){
    console.log(movie.name)
}

Avengers
Jab We Met