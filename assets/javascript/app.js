var questions = {
    question1: [
        title = 'title1',
        answer1 = "answer1",
        answer2 = "answer2",
        answer3 = "answer3",
        answer4 = "answer4"], 
    question2: [
        title = 'title2',
        answer1 = "answer5",
        answer2 = "answer6",
        answer3 = "answer7",
        answer4 = "answer8"], 
    question3: [
        title = 'title3',
        answer1 = "answer9",
        answer2 = "answer10",
        answer3 = "answer11",
        answer4 = "answer12"], 
    question4: [
        title = 'title4',
        answer1 = "answer13",
        answer2 = "answer14",
        answer3 = "answer15",
        answer4 = "answer16"],
    question5: [
        title = 'title5',
        answer1 = "answer17",
        answer2 = "answer18",
        answer3 = "answer19",
        answer4 = "answer20"],
    question6: [
        title = 'title6',
        answer1 = "answer21",
        answer2 = "answer22",
        answer3 = "answer23",
        answer4 = "answer24"],
    question7: [
        title = 'title7',
        answer1 = "answer25",
        answer2 = "answer26",
        answer3 = "answer27",
        answer4 = "answer28"],
    question8: [
        title = 'title8',
        answer1 = "answer29",
        answer2 = "answer30",
        answer3 = "answer31",
        answer4 = "answer32"],
    question9: [
        title = 'title9',
        answer1 = "answer33",
        answer2 = "answer34",
        answer3 = "answer35",
        answer4 = "answer36"],
    question10: [
        title = 'title10',
        answer1 = "answer37",
        answer2 = "answer38",
        answer3 = "answer39",
        answer4 = "answer40"]};

var answers = ['answer2', 'answer8', 'answer9', 'answer15', 'answer17', 'answer23', 'answer28', 'answer30', 'answer36', 'answer38'];

var correct = 0;
var incorrect = 0; 
var left = 10;


console.log(questions.question1);
console.log(questions.length);

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
    $('#start').hide();
    $('#restart').show();
    $('#timer').show();
    $('#game').show();  
    $('#gameOver').hide();
})
// and start the clock

// when user clicks on an answer, to to the second question
$('#question').text(questions.question1[0]);
$('#answer1').text(questions.question1[1]);
$('#answer2').text(questions.question1[2]);
$('#answer3').text(questions.question1[3]);
$('#answer4').text(questions.question1[4]);


for (var i = 0; i < questions.length; i++) {
    $('#answer1').click(function() {
        correct++;
        left--; 
        console.log("clicked")
        console.log(correct)
        console.log(left)
     });

}
    //   {
    //         console.log("function ran")
    //         var text = questions.question + i + [1];
    //         for (var j = 0; j < answers.length; j++) {
    //             if (text === answers[j]) {
    //                 correct++;
    //                 left--; 
    //                 $('#question').text(questions.question + (i + 1 ) + [0]);
    //                 $('#answer1').text(questions.question + (i + 1 ) + [1]);
    //                 $('#answer2').text(questions.question + (i + 1 ) + [2]);
    //                 $('#answer3').text(questions.question + (i + 1 ) + [3]);
    //                 $('#answer4').text(questions.question + (i + 1 ) + 1[4]); 
    //             }
    //             else if (text !== answers[j]) {
    //                 incorrect++;
    //                 left--; 
    //                 $('#question').text(questions.question + (i + 1 ) + [0]);
    //                 $('#answer1').text(questions.question + (i + 1 ) + [1]);
    //                 $('#answer2').text(questions.question + (i + 1 ) + [2]);
    //                 $('#answer3').text(questions.question + (i + 1 ) + [3]);
    //                 $('#answer4').text(questions.question + (i + 1 ) + 1[4]); 
    //             }
    //         }
    //     })
        
    // )
    console.log(correct);
    console.log(incorrect);
    console.log(left);


// if click was correct, add to correct total

// if click was incorrect, add to incorrect total
