const questionList = document.querySelectorAll(".question");
const mainQuestion = document.querySelectorAll(".main-q")
const answerList = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".arrow");

let list = Array.prototype.slice.call(questionList)


questionList.forEach( question => {

    question.addEventListener('click', () => {
        let index = list.indexOf(question)
        if (answerList[index].classList.contains("show")){
            basePage();
            return;
        }
        
        basePage();
        answerList[index].classList.toggle('show')
        mainQuestion[index].classList.toggle('selected')
        icons[index].classList.toggle('arrow-flip')
    })

})

function basePage() {
    for(let i = 0; i < mainQuestion.length; i++) {
        mainQuestion[i].classList.remove('selected')
    }
    for(let i = 0; i < answerList.length; i++) {
        answerList[i].classList.remove('show')
    }
    for(let i = 0; i < icons.length; i++) {
        icons[i].classList.remove('arrow-flip')
    }
}