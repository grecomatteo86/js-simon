var cpuArray = [];
var userArray = [];
for (var i = 0; i < 5; i++) {
 cpuArray.push(randomizer(1,100));
}
alert('Memorize these numbers: ' + cpuArray);
alert('You have 30 seconds from now');
setTimeout(function () {
  for ( var i = 1; i <= 5; i++) {
    var numeriUtente = parseInt(prompt('enter the numbers'));
    userArray.push(numeriUtente);
  }
  alert('The numbers you entered are: ' + userArray);
  var guessedNumbers = [];
  for ( var i = 0; i <= userArray.length; i++) {
    if (cpuArray.includes(userArray[i])) {
      guessedNumbers.push(userArray[i]);
    }
  }
  if (guessedNumbers == 0) {
    alert('You haven\'t guessed any number');
  } else {
    alert('The numbers you guessed are: ' + guessedNumbers);
  }
  alert('Points scored: ' + guessedNumbers.length);
}, 30000);
// Function
function randomizer(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}
