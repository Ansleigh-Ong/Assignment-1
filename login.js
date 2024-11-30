
//Switch from the 2 log in and sign out forms
document.querySelector('#signupbutton').addEventListener('click',function Signup(){
    const login = document.querySelector('.login')
    login.style.display = 'none'

    const singup = document.querySelector('.sign')
    singup.style.display = 'flex'
})

document.querySelector('#loginbutton').addEventListener('click',function Login(){
    const login = document.querySelector('.login')
    login.style.display = 'flex'

    const singup = document.querySelector('.sign')
    singup.style.display = 'none'  
})

//Log user in
function setlogin(){
    document.querySelector('#buttonlog').classList.add('invisible')
    document.querySelector('#profile').classList.remove('invisible')
    localStorage.setItem('login','true')

}

//Input validation for user sign up form
document.querySelector('#signupform').addEventListener('submit',function(event){
    event.preventDefault()
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirm = document.getElementById('confirm')

    //checks if both passwords are the same or error
    if (password != confirm.value){
        document.querySelector('.unmatching_pass').style.display = 'block'
        confirm.value = '';
        return;
    }
    else{
        localStorage.setItem(email,password);
        location.reload();
    }
})

//For user log in form
document.querySelector('#loginform').addEventListener('submit',function(event){
    event.preventDefault();
    var email = document.getElementById('email-login').value
    var password = document.getElementById('password-login').value
    let correct_password = localStorage.getItem(email) //Gets the saved email/password

    //Check validation and display error or success message accordingly
    if (correct_password == null){
        document.querySelector('.wrong_email').style.display = 'block'
        document.getElementById('email-login').value = ''
        document.getElementById('password-login').value = ''
    }

    else if (password !== correct_password){
        document.querySelector('.wrong_pass').style.display = 'block'
        document.getElementById('password-login').value = ''
    }

    else{
        setlogin();
        location.reload();
    }
})