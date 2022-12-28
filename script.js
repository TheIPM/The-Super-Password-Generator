// Assignment Code

var generateBtn = document.querySelector("#generate");
var capital = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"] 
var numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","[","}","]", ",", "<", ".", ">", "/", "?", ":", ";", "'", "|"]

var password= []; 
var length;
var capital1;
var lower1;
var numbers1;
var special1;


console.log(capital,lower,numbers,special)

function questions () {
  reset();
  length = prompt("Choose a number between 8 - 128.");
  if (length === null) {
    return; //break out of the function early
}
  capital1 = confirm("You want capital letters?");
  lower1 = confirm("You want lower case letters?");
  numbers1 = confirm("You want numbers?");
  special1 = confirm("You want special characters?");

  if (length < 8 || length > 128 || length == null) {
    alert("Password needs to be between 8 and 128 characters.");
    questions();
  }

  if (!capital1 && !lower1 && !numbers1 && !special1) {
    alert("Need at least one type of character.");
    questions();
  }

  var choices = {
    length: length,
    capital1: capital1,
    lower1: lower1,
    numbers1: numbers1,
    special1: special1}
  

  return choices;
}

console.log(questions)



// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword() { 
  var choices = questions();

  if (choices.capital1) {
    pChar = pChar.concat(capital)
  }

  if (choices.lower1) {
    pChar = pChar.concat(lower)
  }

  if (choices.numbers1) {
    pChar = pChar.concat(numbers)
  }

  if (choices.special1) {
    pChar = pChar.concat(special)
  }
  var password = "";

  for (var i = 0; i < choices.length; i++) {
      var randomChar = pChar[Math.floor(Math.random() * pChar.length)];
      password = password + randomChar;
  }
  
  return password;
}

function reset() {
  pChar = [];
  length;
  capital1;
  lower1;
  numbers1;
  special1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
