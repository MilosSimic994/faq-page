const question = document.querySelectorAll('.qusetion')
const answer = document.querySelectorAll('.answer')

console.log(question.nextSibling);


function showQuestion() {
    question.forEach(item => {
        item.addEventListener('click', () => {
            // item.nextSibling.style.display = "block"
            item.children[1].classList.toggle('show-text')
            item.children[0].classList.toggle('font-weight')
        })
    });
}

showQuestion()