
var correct = 0;
var incorrect = 10; 
var left = 10;
var timeLeft = 120
var intervalId

// show start screen first
$('#btnRestart').hide();
$('#timer').hide();
$('#game').hide();
$('#gameOver').hide();
$('#btnDone').hide();

// when user clicks on start, go to the first question
$('#btnStart').on('click', function() {
    run();
    timeLeft = 120;
    $('#btnStart').hide();
    $('#start').hide();
    $('#btnRestart').show();
    $('#timer').show();
    $('#game').show();  
    $('#gameOver').hide();
    $('#btnDone').show();
    // for (var i = 1; i < 41; i++ ){
    //     $('#i').prop('checked', false);
    // }
    $('#1').prop('checked', false);
    $('#2').prop('checked', false);
    $('#3').prop('checked', false);
    $('#4').prop('checked', false);
    $('#5').prop('checked', false);
    $('#6').prop('checked', false);
    $('#7').prop('checked', false);
    $('#8').prop('checked', false);
    $('#9').prop('checked', false);
    $('#10').prop('checked', false);
    $('#11').prop('checked', false);
    $('#12').prop('checked', false);
    $('#13').prop('checked', false);
    $('#14').prop('checked', false);
    $('#15').prop('checked', false);
    $('#16').prop('checked', false);
    $('#17').prop('checked', false);
    $('#18').prop('checked', false);
    $('#19').prop('checked', false);
    $('#20').prop('checked', false);
    $('#21').prop('checked', false);
    $('#22').prop('checked', false);
    $('#23').prop('checked', false);
    $('#24').prop('checked', false);
    $('#25').prop('checked', false);
    $('#26').prop('checked', false);
    $('#27').prop('checked', false);
    $('#28').prop('checked', false);
    $('#29').prop('checked', false);
    $('#30').prop('checked', false);
    $('#31').prop('checked', false);
    $('#32').prop('checked', false);
    $('#33').prop('checked', false);
    $('#34').prop('checked', false);
    $('#35').prop('checked', false);
    $('#36').prop('checked', false);
    $('#37').prop('checked', false);
    $('#38').prop('checked', false);
    $('#39').prop('checked', false);
    $('#40').prop('checked', false);
    correct = 0;
})

// when user clicks restart, this happens
$('#btnRestart').on('click', function() {
    timeLeft = 120;
    $('#btnStart').show();
    $('#start').show();
    $('#btnRestart').hide();
    $('#timer').hide();
    $('#game').hide();  
    $('#gameOver').hide();
    $('#btnDone').hide();

 
})

// when user click on done, go to done screen
$('#btnDone').on('click', function() {
    clearInterval(intervalId);
    clockrunning = false;
    $('#timer').html('You had ' + timeLeft + ' seconds left on the clock!');
    $('#btnStart').show();
    $('#start').hide();
    $('#btnRestart').hide();
    $('#timer').show();
    $('#game').hide();  
    $('#gameOver').show();
    $('#btnDone').hide();
    result ();

})



// timer stuff

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

function decrement() {
    timeLeft--;
    $('#timer').html('You have ' + timeLeft + ' seconds left!');

    if (timeLeft === 0) {
        clearInterval(intervalId);
        clockrunning = false;
        $('#btnStart').show();
        $('#start').hide();
        $('#btnRestart').hide();
        $('#timer').show();
        $('#game').hide();  
        $('#gameOver').show();
        $('#btnDone').hide();
        result();

    }
}


// if the answer is in the correct answer array, add one to the correct answer number
function result() {
    if ($("#2").is(":checked")) {
        correct++;
        console.log('checked1' + correct)
    }
    if ($("#7").is(":checked")) {
        correct++;
        console.log('checked2' + correct)
    }
    if ($("#9").is(":checked")) {
        correct++;
        console.log('checked3' + correct)
    }
    if ($("#13").is(":checked")) {
        correct++;
        console.log('checked4' + correct)
    }
    if ($("#20").is(":checked")) {
        correct++;
        console.log('checked5' + correct)
    }
    if ($("#22").is(":checked")) {
        correct++;
        console.log('checked6' + correct)
    }
    if ($("#27").is(":checked")) {
        correct++;
        console.log('checked7' + correct)
    }
    if ($("#29").is(":checked")) {
        correct++;
        console.log('checked8' + correct)
    }
    if ($("#35").is(":checked")) {
        correct++;
        console.log('checked9' + correct)
    }
    if ($("#40").is(":checked")) {
        correct++;
        console.log('checked10' + correct)
    }
$('#numberCorrect').text('You got ' + correct + ' correct!');
// subtract 10 from the correct answers to get the incorrect answers.
var totalIncorrect = (10 - correct);
$('#numberIncorrect').text('You got ' + totalIncorrect + ' incorrect.')
}
// 
