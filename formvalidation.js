function validFname(){
    let first_name=document.getElementById('firstname').value
    if(first_name==""){
        displayMsg('firstname is required','fnameMsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 characters','fnameMsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname only accepts alphabets','fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true
    }
}

function validLname(){
    let last_name=document.getElementById('lastname').value
    if(last_name==""){
        displayMsg('lastname is required','lnameMsg','red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 characters','lnameMsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('lastname only accepts alphabets','lnameMsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnameMsg','green')
        return true
    }
}

function validEmail(){
    let email=document.getElementById('email').value
    if(email==""){
        displayMsg('email is required','emailMsg','red')
        return false
    }
   //55ramw.ggf233@gmail.com
    else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])+$/)){
        displayMsg('invalid email','emailMsg','red')
        return false
    }
    else{
        displayMsg('valid email','emailMsg','green')
        return true
    }
}

function validPassword(){
    let password=document.getElementById('password').value
    if(password==""){
        displayMsg('password is required','passwordMsg','red')
        return false
    }
    else if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#?!%$&*]).{8,50}$/)){
        displayMsg('must contain one uppercase,one lowercase,one numeric,one special character and must be more than 8 characters','passwordMsg','red')
        return false
    }
    else{
        displayMsg('valid password','passwordMsg','green')
        return true
    }
}

function validForm(){
    if(validFname() && validLname() && validEmail() && validPassword()){
        return true
    }
    else{
        return false
    }
}

function displayMsg(message,idValue,colorValue){
    document.getElementById(idValue).innerHTML=message
    document.getElementById(idValue).style.color=colorValue
}
