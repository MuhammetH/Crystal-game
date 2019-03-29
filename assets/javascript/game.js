var randomNumber;
var lost;
var win;

//$(".crystal").attr('class', 'red');  setting value to crystal

randomNumber = Math.floor((Math.random()* 101) + 19);// generates a number between  19-120
$("#result").html('Random Results: ');
console.log(randomNumber)


for(var i = 0; i < 4;i++){// generates random number between 12-1 for each crystal 
    var random = Math.floor((Math.random() * 11)+ 1);
    console.log(random)

    var crystal = $("<div>");
        crystal.attr({
         "class": 'crystal',
         "data-random": random// shows the random number for each crystal at sources 
     });

    $(".crystals").append(crystal);
}

$(".crystal").on('click', function(){
    console.log($(this).attr('data-random'));
});