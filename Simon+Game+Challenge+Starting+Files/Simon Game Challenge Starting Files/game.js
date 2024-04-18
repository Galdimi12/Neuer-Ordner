
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = []

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4); // 0 | randomNumber = red
  console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


}

nextSequence();

var lastColor = gamePattern.pop();
console.log(lastColor);

$('#' + lastColor).fadeOut(100).fadeIn(100)

$('.btn').click(function() {

  var userChoseColor = $(this).attr('id');
  console.log(userChoseColor)
  userClickedPattern.push(userChoseColor);
  console.log(userClickedPattern);

})

function  animatePress(currentColor) {
  
}