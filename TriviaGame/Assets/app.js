//Create variables for wins and losses
var wins = 0;
var losses = 0;
var timeLeft = 60;
var intervalID;
var clockRunning = false;
// Create 8 arrays one for each question's answers (1 right, 3 wrong)
// var question1 = ["Sloth", "Tortoise", "Mantis Shrimp", "Slow Lloris"];
// var question2 = ["Pride", "Herd", "Pack", "Litter"];
// var question3 = ["Array", "Corral", "Pod", "Pack"];
// var question4 = ["Bowhead Wahle", "Snapping Turtle", "Asian Elephant", "Bubble Jelly"];
// var question5 = ["10", "8", "4", "6"];
// var question6 = ["Giraffe", "Rainbow Trout", "Octopus", "Elephant"];
// var question7 = ["ELephant", "Ox", "Walrus", "Blue Whale"];
// var question8 = ["Penguins", "Seal", "Polar Bear", "Narwhal"];
//Create a function/timer that begins a countdown starting at 60 seconds
// Hide questions and answers on load
$(document).ready(function () {
    $("#questions-container").hide();
    $("#score-container").hide();

// Hide start button and load questions when start is clicked
$("#start-btn").on("click", function () {
    $("#start-btn").hide();
    $("#questions-container").show();
})
$("#submit-btn").on("click", function () {
    $("#questions-container").hide();
    $("#score-container").show();
})

$(".radio-option").on("click", ()=>{$(this).button('toggle')}); 
 
var countDown = function(){ 
    console.log(typeof timeLeft);
    console.log(timeLeft);
    $("#time-remaining").text("Time remaining: " + timeLeft);
    timeLeft--;
    console.log(timeLeft);
    if (timeLeft === 0) {
    }
}

$("#start-btn").on("click",
        
        setInterval(countDown, 1000)
);
})

// if (timeLeft > 0 ) {
//     setInterval(timeLeft, 1000);
//     console.log("Made it");
// } else {
//     clockRunning = false;
// }
// Use buttons/selectors so user can select answers
    // Create if statements where if user guess = correct answer then log wins++

// $(".radio-option").button('toggle')
 // this.button('toggle'))
