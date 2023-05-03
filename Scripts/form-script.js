const quiz_form = document.querySelector('#quiz-form');
const reset_button = document.querySelector('#reset-button');
const result_display = document.querySelector('#result');

quiz_form.addEventListener('submit', function(event) {
    event.preventDefault();

    const responses = {
        response_1: document.querySelector('input[name="answer_options_1"]:checked').value,
        response_2: document.querySelector('input[name="answer_options_2"]:checked').value,
        response_3: document.querySelector('input[name="answer_options_3"]:checked').value
    };

    let correct_responses = 0;
    if (responses.response_1 === 'a') {
        correct_responses++;
    }
    if (responses.response_2 === 'b') {
        correct_responses++;
    }
    if (responses.response_3 === 'a') {
        correct_responses++;
    }

    const num_of_questions = 3;
    const percentage = (correct_responses / num_of_questions) * 100;
    const percentage_round = Math.floor(percentage);
    const missed = num_of_questions - correct_responses;

    result_display.textContent = `You got ${percentage_round}% correct (${correct_responses}/3).`;

    if (missed == 1) {
        result_display.innerHTML += ` You missed ${missed} question.`;
    } else if (missed != 0 && missed != 1) {
        result_display.innerHTML += ` You missed ${missed} questions.`;
    } else {
        result_display.innerHTML += " You got no questions wrong!";
    }
});

reset_button.addEventListener('click', function() {
    const answer_inputs = document.querySelectorAll('input[type="radio"]');
    answer_inputs.forEach(input => {
        input.checked = false;
    });
    result_display.textContent = '';
});