var questions = [{
        title: 'title1',
        answer1:  "answerz",
        answer2:  "answer2",
        answer3:  "answer3",
        answer4:  "answer4"}, 
        {
        title:  'title2',
        answer1:  "answer5",
        answer2:  "answer6",
        answer3:  "answer7",
        answer4:  "answer8"}, 
        {
        title:  'title3',
        answer1:  "answer9",
        answer2:  "answer10",
        answer3:  "answer11",
        answer4:  "answer12"}, 
        {
        title:  'title4',
        answer1:  "answer13",
        answer2:  "answer14",
        answer3:  "answer15",
        answer4:  "answer16"},
        {
        title:  'title5',
        answer1:  "answer17",
        answer2:  "answer18",
        answer3:  "answer19",
        answer4:  "answer20"},
        {
        title:  'title6',
        answer1:  "answer21",
        answer2:  "answer22",
        answer3:  "answer23",
        answer4:  "answer24"},
        {
        title:  'title7',
        answer1:  "answer25",
        answer2:  "answer26",
        answer3:  "answer27",
        answer4:  "answer28"},
        {
        title:  'title8',
        answer1:  "answer29",
        answer2:  "answer30",
        answer3:  "answer31",
        answer4:  "answer32"},
        {
        title:  'title9',
        answer1:  "answer33",
        answer2:  "answer34",
        answer3:  "answer35",
        answer4:  "answer36"},
        {
        title:  'title10',
        answer1:  "answer37",
        answer2:  "answer38",
        answer3:  "answer39",
        answer4:  "answer40"}];

var answers = ["answer1", "answer8", "answer9", "answer15", "answer17", "answer23", "answer28", "answer30", "answer36", "answer38"];

var correct = 0;
var incorrect = 10 - correct; 
var left = 10;

var one = document.getElementById('answer1');
var two = document.getElementById('answer2');
var three = document.getElementById('answer3');
var four = document.getElementById('answer4');

console.log(questions[0]);
console.log('10');

function myTimer() {
    var time = setInterval(myTimer,20000);
    $('#game').hide();
    $('#gameOver').show();
}
// show start screen first
$('#btnRestart').hide();
$('#timer').hide();
$('#game').hide();
$('#gameOver').hide();
// when user clicks on start, go to the first question
$('#btnStart').on('click', function() {
    myTimer();
    $('#btnStart').hide();
    $('#start').hide();
    $('#btnRestart').show();
    $('#timer').show();
    $('#game').show();  
    $('#gameOver').hide();
})
// and start the clock

// when user clicks on an answer, go to the second question
$('#question').text(questions[0].title);
$('#answer1').text(questions[0].answer1);
$('#answer2').text(questions[0].answer2);
$('#answer3').text(questions[0].answer3);
$('#answer4').text(questions[0].answer4);


var i = 0

one.onclick = function(){

    var text = questions[i].answer1;
    console.log(text)
            for (var j = 0; j < 10; j++) {
                if (answers[j].includes(text)) {
                    correct++;
                }
                // else { 
                // // (answers[text] === -1) {
                //     // incorrect = incorrect + 1;

                // }
            }

            i++;
            left--; 
            console.log("correct: " + correct)
            console.log("incorrect: " + incorrect)
            console.log(left)

            if (left === 0){
                $('#btnStart').hide();
                $('#start').hide();
                $('#btnRestart').show();
                $('#timer').show();
                $('#game').hide();  
                $('#gameOver').show();
            }
            $('#question').text(questions[i].title);
            $('#answer1').text(questions[i].answer1);
            $('#answer2').text(questions[i].answer2);
            $('#answer3').text(questions[i].answer3);
            $('#answer4').text(questions[i].answer4);

        }

two.onclick = function(){
    left--; 
    var text = questions[i].answer1;
    console.log(text)
            for (var j = 0; j < 10; j++) {
                if (answers[j].includes(text)) {
                    correct++;
                    console.log("correct" + correct)
                    console.log(left)
                }
                else { 
                // (answers[text] === -1) {
                    // incorrect = incorrect + 1;
                    console.log("incorrect: " + incorrect)
                    console.log('Left: '+ left)
                }
            }
            i++;
            $('#question').text(questions[i].title);
            $('#answer1').text(questions[i].answer1);
            $('#answer2').text(questions[i].answer2);
            $('#answer3').text(questions[i].answer3);
            $('#answer4').text(questions[i].answer4);
            if (left === 0) {
                $('#btnStart').hide();
                $('#start').hide();
                $('#btnRestart').show();
                $('#timer').show();
                $('#game').hide();  
                $('#gameOver').show();
            }
}
three.onclick = function(){
    left--; 
    var text = questions[i].answer1;
    console.log(text)
            for (var j = 0; j < 10; j++) {
                if (answers[j].includes(text)) {
                    correct++;
                    console.log("correct" + correct)
                    console.log(left)
                }
                else { 
                // (answers[text] === -1) {
                    // incorrect = incorrect + 1;
                    console.log("incorrect: " + incorrect)
                    console.log('Left: '+ left)
                }
            }
            i++;
            $('#question').text(questions[i].title);
            $('#answer1').text(questions[i].answer1);
            $('#answer2').text(questions[i].answer2);
            $('#answer3').text(questions[i].answer3);
            $('#answer4').text(questions[i].answer4);
            if (left === 0) {
                $('#btnStart').hide();
                $('#start').hide();
                $('#btnRestart').show();
                $('#timer').show();
                $('#game').hide();  
                $('#gameOver').show();
            }
}
four.onclick = function(){
    left--; 
    var text = questions[i].answer1;
    console.log(text)
            for (var j = 0; j < 10; j++) {
                if (answers[j].includes(text)) {
                    correct++;
                    console.log("correct" + correct)
                    console.log(left)
                }
                else { 
                // (answers[text] === -1) {
                    // incorrect = incorrect + 1;
                    console.log("incorrect: " + incorrect)
                    console.log('Left: '+ left)
                }
            }
            i++;
            $('#question').text(questions[i].title);
            $('#answer1').text(questions[i].answer1);
            $('#answer2').text(questions[i].answer2);
            $('#answer3').text(questions[i].answer3);
            $('#answer4').text(questions[i].answer4);
            if (left === 0) {
                $('#btnStart').hide();
                $('#start').hide();
                $('#btnRestart').show();
                $('#timer').show();
                $('#game').hide();  
                $('#gameOver').show();
            }
}


