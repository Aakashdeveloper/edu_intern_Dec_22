const validateFname = () => {
    const fname = document.getElementById('fname').value;
    const fdiv = document.getElementById('fdiv');
    const fout = document.getElementById('fout');

    if(fname.trim().length == 0){
        fout.innerText = "Please enter FirstName"
        fdiv.classList.add('has-error')
    }else{
        fout.innerText = ""
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}

function validateEmail(){
    const email = document.getElementById('mail').value;
    const eout = document.getElementById('eout');

    if(email.trim().length == 0){
        eout.innerText = "Please enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            eout.innerText = "Please enter Valid Email"
        }else{
            eout.innerText = ""
        }
    }
}