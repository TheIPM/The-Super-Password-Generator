// Assignment Code

var generateBtn = document.querySelector("#generate");
var capital = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"] 
var numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","[","}","]", ",", "<", ".", ">", "/", "?", ":", ";", "'", "|"]

var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var specialCharacters;

console.log(capital,lower,numbers,special)

function passwordQuestions() {
  resetApp();
  passwordLength = prompt('How long would you like your password to be? Choose a number between 8 - 128.');
  uppercaseLetters = confirm('Would you like uppercase letters?');
  lowercaseLetters = confirm('Would you like lowercase letters?');
  numbers = confirm('Would you like numbers?');
  specialCharacters = confirm('Would you like special characters?');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
