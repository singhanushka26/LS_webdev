function checkAnswer() {
    const quizForm = document.getElementById('quizForm');
    const result = document.getElementById('result');
    const correctAnswer = '7';
    let userAnswer = '';

    for (let i = 0; i < quizForm.elements['answer'].length; i++) {
        if (quizForm.elements['answer'][i].checked) {
            userAnswer = quizForm.elements['answer'][i].value;
        }
    }

    if (userAnswer === correctAnswer) {
        result.textContent = 'Correct! Lionel Messi has won 7 Ballon d\'Or awards.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect. Try again!';
        result.style.color = 'red';
    }
}
