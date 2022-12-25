// function language(name,country){
//     this.name = name;
//     this.country = country;
//     this.greet = () => {return `Say Hi To ${name}`}
// }

class language1{
    // all declaration
    constructor(name,country){
        this.name = name;
        this.country = country;
    }
    greet=() => {return `Say Hi to ${this.name}`}
}

let Dutch = new language1('Dutch','Netherlands')
Dutch
language1 {name: 'Dutch', country: 'Netherlands', greet: ƒ}
Dutch.greet()
'Say Hi to Dutch'