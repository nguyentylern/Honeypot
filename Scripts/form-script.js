const quiz_form = document.querySelector('#quiz-form');
const reset_button = document.querySelector('#reset-button');
const result_display = document.querySelector('#result');

quiz_form.addEventListener('submit', function(event) {
    event.preventDefault();

    const responses = [
        document.querySelector('input[name="answer_options_1"]:checked').value,
        document.querySelector('input[name="answer_options_2"]:checked').value,
        document.querySelector('input[name="answer_options_3"]:checked').value,
        document.querySelector('input[name="answer_options_4"]:checked').value,
        document.querySelector('input[name="answer_options_5"]:checked').value
    ];

    const answers = [
        'a',
        'a',
        'c',
        'd',
        'b'
    ]

    let correct_responses = 0;
    const num_of_questions = responses.length;

    for (let i = 0; i < num_of_questions; i++) {
        if (responses[i] === answers[i]) {
            correct_responses++;
        };
    }

    // Object Based Code

    /*const responses = {
        response_1: document.querySelector('input[name="answer_options_1"]:checked').value,
        response_2: document.querySelector('input[name="answer_options_2"]:checked').value,
        response_3: document.querySelector('input[name="answer_options_3"]:checked').value,
        response_4: document.querySelector('input[name="answer_options_4"]:checked').value,
        response_5: document.querySelector('input[name="answer_options_5"]:checked').value,
    };

    const answers = {
        answer_1: 'a',
        answer_2: 'a',
        answer_3: 'c',
        answer_4: 'd',
        answer_5: 'b'
    }

    let correct_responses = 0;
    if (responses.response_1 === answers.answer_1) {
        correct_responses++;
    }
    if (responses.response_2 === answers.answer_2) {
        correct_responses++;
    }
    if (responses.response_3 === answers.answer_3) {
        correct_responses++;
    }
    if (responses.response_4 === answers.answer_4) {
        correct_responses++;
    }
    if (responses.response_5 === answers.answer_5) {
        correct_responses++;
    }
    */

    // const num_of_questions = Object.keys(responses).length;

    const percentage = (correct_responses / num_of_questions) * 100;
    const percentage_round = Math.floor(percentage);
    const missed = num_of_questions - correct_responses;

    result_display.textContent = `You got ${percentage_round}% of the questions correct (${correct_responses}/${num_of_questions}).`;

    if (missed == 1) {
        result_display.innerHTML += ` You missed ${missed} question.`;
    } else if (missed > 1) {
        result_display.innerHTML += ` You missed ${missed} questions.`;
    } else if (missed == 0) {
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