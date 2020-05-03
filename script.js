// Assignment Code
var generateBtn = document.querySelector("#generate");

var specials= [ "!", "#", "$", "%", "&", "(", ")", "*", "+", "/", ":", ";", "<", "=", ">", "?"]
var numbers= [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
var uppers = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowers = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//function to wrap the program for output onto the button
function generatePassword(){

//Input password length and confirm password is anywhere from 8 to 128 numbers
var passwordLength = prompt("How many characters would you like your password to be from 8 to 128?");

//this is a checker to make sure that the user selected a number from the correct span
   if(passwordLength < 8 || passwordLength > 128) {
    var length = false;
  while (length === false) {
  passwordLength = prompt("Please enter a number between 8 and 128");
   if (passwordLength >7 && passwordLength <129) {
  length = true;
     }
   }
  }

//confirm which type of characters you would like in your password
var upperCase = confirm("Would you like your password to have uppercase letters?");
var lowerCase = confirm("Would you like your password to have lowercase letters?");
var numberConfirm= confirm("Would you like your password to have numbers?");
var specialCharacters= confirm("Would you like your password to have special characters?");

//this checks to make sure the user selected at least one type of character for their password
if(upperCase === false && lowerCase === false && numberConfirm === false && specialCharacters === false) {
  alert("Please select at least one type of character");
  var charChoice = false;
  while (charChoice === false) {
    var upperCase = confirm("Would you like your password to have uppercase letters?");
    var lowerCase = confirm("Would you like your password to have lowercase letters?");
    var numberConfirm = confirm("Would you like your password to have numbers?");
    var specialCharacters = confirm("Would you like your password to have special characters?");
  if(upperCase === true || lowerCase === true || numberConfirm === true || specialCharacters === true) {
    charChoice = true;
  }
  }
}

//this variable is created to hold all of the character choices that the user has selected
var possibles =[];

if (upperCase) {
  possibles.push(uppers);
}

if (lowerCase) {
  possibles.push(lowers);
}

if (numberConfirm){
  possibles.push(numbers);
}

if (specialCharacters) {
  possibles.push(specials);
}

console.log (possibles);

var result="";

//this for loop selects a random array from the input and secondly randomly selects a character from that array for the entirety of the password length
for (var i = 0; i <passwordLength; i++){
  var randomArray =
  possibles[Math.floor(Math.random() * possibles.length)];
  var randomChar=
  randomArray[Math.floor(Math.random() * randomArray.length)];
  result += randomChar
}
console.log(result);
return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
