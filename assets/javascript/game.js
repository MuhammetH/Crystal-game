var randomNumber;
var lost = 0;
var win = 0;
var currentNumber = 0;

var game = function () {

    $(".crystals").empty();

    var images = [
        './assets/images/crystal1.jpg',
        './assets/images/crystal2.jpg',
        './assets/images/crystal3.jpg',
        './assets/images/crystal4.jpg'
    ]

    randomNumber = Math.floor(Math.random() * 101 + 19); // generates a number between  19-120
    $("#result").html("Random Result: " + randomNumber);

    console.log(randomNumber);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11 + 1);// generates random number between 12-1 for each crystal

        //console.log(random)

        var crystal = $("<div>");
        crystal.attr({
            class: "crystal",
            "data-random": random // shows the random number for each crystal at sources
        });

        crystal.css({
            "background-image":"src('" + images[i] + "')",
            "background-size":"cover"
        });

        $(".crystals").append(crystal);
    }
    $("#current").html("Current Number: " + currentNumber)
};

game();

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr("data-random"));// turning the variable into the number

    currentNumber += num;

    $("#current").html("Current Number: " + currentNumber)
    console.log(currentNumber);

    if (currentNumber > randomNumber) {
        //console.log("you lost!!");
        lost++;
        $("#losses").html("Losses: " + lost);

        currentNumber = 0;
        game();
    }

    else if (currentNumber === randomNumber) {
        //console.log("you win");
        win++;
        $("#wins").html("Wins: " + win);

        currentNumber= 0;
        game();
    }
});
