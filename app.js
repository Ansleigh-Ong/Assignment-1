function DisplayDropdown(){
    const side = document.querySelector('.dropdown')
    side.style.display = 'flex'
}

function CloseDropdown(){
    const side = document.querySelector('.dropdown')
    side.style.display = 'none'
}

function Signup(){
    const login = document.querySelector('.login')
    login.style.display = 'none'

    const singup = document.querySelector('.sign')
    singup.style.display = 'flex'
}

function Login(){
    const login = document.querySelector('.login')
    login.style.display = 'flex'

    const singup = document.querySelector('.sign')
    singup.style.display = 'none'

    
}

function checklogin(){
    const loginbutton = document.getElementById('.buttonlog')
    const profileicon = document.getElementById('.profile')

    buttonlog.addClass('invisible')
    profileicon.removeClass('invisible')
} /*Not working*/



