const questions = document.querySelectorAll('.question')
const answers =document.querySelectorAll('.answer')
const arrows = document.querySelectorAll('.arrow')

for (let i = 0; i< questions.length;i++){
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('answer-open');
        arrows[i].classList.toggle('arrow-rotate');
    });
}
