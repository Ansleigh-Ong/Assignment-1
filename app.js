
















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
    document.querySelector('#buttonlog').classList.add('invisible')
    document.querySelector('#profile').classList.remove('invisible')

}

function next(container,scrolldist){
    container.scrollBy({left: scrolldist, behavior: "smooth"})
}

function back(container,scrolldist){
    container.scrollBy({left: scrolldist, behavior: "smooth"})
}

document.querySelector('#right-button').addEventListener('click', function(){
    const container = document.querySelector('.review-box')
    next(container,200);
})

document.querySelector('#left-button').addEventListener('click', function(){
    const containers = document.querySelector('.review-box')
    back(containers,-200);
})