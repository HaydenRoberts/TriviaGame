$('.start-button').on('click', function () {
    startGame();
});
$('.question').hide();
$('.clock').hide();
$('.results').hide();

var time = 30;
var intervalId;
var increment = 0;
var correct = 0;
var wrong = 0;
var unAnswered = 0;

var trivia = {
    questions: [
        "What is the largest type of ‘big cat’ in the world?",
        "What do you call a group of owls?",
        "What is the largest mammal on earth?",
        "What do you call a baby kangaroo?",
        "The crocodile species is believed to <br>have been around for how long?",
        "How many pairs of wings does a bee have?",
        "How fast can the average <br>hummingbird beat its wings per second?"
    ],
    correctAnswers: [
        "Tiger",
        "Parliament",
        "Blue Whale",
        "Joey",
        "200 Million Years",
        "2 Pairs",
        "53 Beats Per Second"
    ],
    allAnswers: [
        ["Lion", "Panther", "Tiger", "Cheetah"],
        ["Birds", "Wise Men", "Conspiracy", "Parliament"],
        ["Blue Whale", "Elephant", "Rhino", "Giraffe"],
        ["Joey", "Craig", "Hopper", "Calf"],
        ["20 Million Years", "2 Million Years", "200 Million Years", "200,000 Years"],
        ["2 Pairs", "3 Pairs", "1 Pair", "6 Pairs"],
        ["22 Beats Per Second", "101 Beats Per Second", "36 BeatsPer Second", "53 Beats Per Second"]
    ]
}

function startGame() {
    // Changes the start page to a trivia page layout
    $('.start').remove();
    $('.title').remove();
    $('.brain').addClass('brain-after-start');
    $('.brain').removeClass('brain');
    $('.logo').addClass('logo-after-start');
    $('.logo').removeClass('logo');
    $('.append').append('<div class= "trivia"></div>')
    $('.question').show();
    $('.clock').show();

    // Starts the timer
    timer();
    getQuestion();
    getAnswers();
}

function timeUp() {
    wrong++;
    getQuestion();
    getAnswers();
    clearInterval(interval);
    timer();
}

var interval;
function timer() {
    time = 30
    interval = setInterval(count, 1000);
}

function count() {
    if (time === 0) {
        increment++
        timeUp();
        unAnswered++;
    } else {
        time--;
        $('.time-left').html(time);
    }
}

function getQuestion() {
    var question = trivia.questions[increment];
    $('.question-title').html(question);
}

function getAnswers() {
    var answer1 = trivia.allAnswers[increment][0];
    var answer2 = trivia.allAnswers[increment][1];
    var answer3 = trivia.allAnswers[increment][2];
    var answer4 = trivia.allAnswers[increment][3];
    $('.a1').html(answer1);
    $('.a2').html(answer2);
    $('.a3').html(answer3);
    $('.a4').html(answer4);
}

$('.a1').on('click', function () {
    var answer = $('.a1').html()
    if (answer == trivia.correctAnswers[increment]) {
        console.log("Correct");
        increment++;
        correct++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            clearInterval(interval);
            // console.log('End!');
        }
    } else {
        console.log("Wrong");
        console.log(answer);
        increment++;
        wrong++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            $('.results').show();
            clearInterval(interval);
            // console.log('End!');
        }
    }
});

$('.a2').on('click', function () {
    var answer = $('.a2').html()
    if (answer == trivia.correctAnswers[increment]) {
        console.log("Correct");
        increment++;
        correct++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            $('.results').show();
            clearInterval(interval);
        }
    } else {
        console.log("Wrong");
        console.log(answer);
        increment++;
        wrong++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            $('.results').show();
            clearInterval(interval);
        }
    }
});

$('.a3').on('click', function () {
    var answer = $('.a3').html()
    if (answer == trivia.correctAnswers[increment]) {
        console.log("Correct");
        increment++;
        correct++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            $('.results').show();
            clearInterval(interval);
        }
    } else {
        console.log("Wrong");
        console.log(answer);
        increment++;
        wrong++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            $('.results').show();
            clearInterval(interval);
        }
    }
});

$('.a4').on('click', function () {
    var answer = $('.a4').html()
    if (answer == trivia.correctAnswers[increment]) {
        console.log("Correct");
        increment++;
        correct++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            $('.results').show();
            clearInterval(interval);
        }
    } else {
        console.log("Wrong");
        console.log(answer);
        increment++;
        wrong++;
        if (increment < trivia.questions.length) {
            getAnswers();
            getQuestion();
            clearInterval(interval);
            timer();
        } else {
            $('.question').hide();
            $('.clock').hide();
            $('.results').html('Correct Answers: ' + correct + '<br>' +
                'Incorrect Answers: ' + wrong + '<br>' +
                'Unanswered: ' + unAnswered);
            $('.results').show();
            $('.results').show();
            clearInterval(interval);
        }
    }
}); 