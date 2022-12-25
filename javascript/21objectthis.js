let firstname = "Michal";
let lastname = "Peter"

let sayHi = {
    firstname:'Zoe',
    lastname:'Lisa',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet());
// without this
// Say hi to Michal Peter

//with this
//Say hi to Zoe Lisa

// this help to access values from the same scope