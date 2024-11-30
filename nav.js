//Login system for nav bar (checks if user is still log in or not)
var login = localStorage.getItem('login') === 'true';

function DisplayDropdown(){
    const side = document.querySelector('.dropdown')
    side.style.display = 'flex'
}

function CloseDropdown(){
    const side = document.querySelector('.dropdown')
    side.style.display = 'none'
}



document.querySelector('#profile').addEventListener('click', function(){
    document.querySelector('#signout').classList.remove('invisible')
})

document.querySelector('#logout').addEventListener('click', function(){
    document.querySelector('#buttonlog').classList.remove('invisible')
    document.querySelector('#profile').classList.add('invisible')
    document.querySelector('#signout').classList.add('invisible')
    localStorage.setItem('login','false')
  
})



function checklogin(){
    if (login === false){
        return;
    }
    else{
        document.querySelector('#buttonlog').classList.add('invisible')
        document.querySelector('#profile').classList.remove('invisible')
    }

}
// End of nav bar interaction