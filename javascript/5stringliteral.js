var mname = "Avengers"
var type = "Action"
var ind = "Hollywood"
var rating = 4.5

//es5
var out = "An "+mname+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'

//es6
let out1 = `An ${mname} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'