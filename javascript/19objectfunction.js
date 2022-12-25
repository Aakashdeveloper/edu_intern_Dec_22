let calc = {
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(5,6)
11
calc.sub(9,1)
8

//////////////
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi To ${name}`}
}

let Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi To Hindi'

let french = new language('French','France')
french
language {name: 'French', country: 'France', greet: ƒ}
french.greet()
