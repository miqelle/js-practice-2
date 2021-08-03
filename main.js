//=============EXERCISE 1 Text Manipulation and ARRAYS==============
//Write a JavaScript function that
//accepts a sentence of words all in lowercase
//, and returns every other word in all caps.
//ex. in a galaxy far far away -> in A galaxy FAR far AWAY

//accept a sentence of words all in lowercase
//return every other word in all caps
//I know that toUpperCase may be used to make a word all caps
/* let inputString = prompt("Enter a string!").toLowerCase;
function convertWrds (inputString) {
for(let index = 0; index < inputString.length; index++) {

}
}
 */

//=========EXERCISE 2 TEXT Manipulation and Arrays==================
//Write a JavaScript function that accepts a word in all lowercase
//or in all uppercase, and returns the word in the
//opposite case. Hint: see toLowercase()

function changeWords() {
  let string = prompt("Enter a word"); ///THIS IS WHERE I GET A WORD TO CONVERT
  if (string === string.toLowerCase()) {
    ///THIS CHECKS IF THE WORD ENTERED IS IN LOWERCASE THEN CONVERTS IT TO UPPERCASE
    document.write(string.toUpperCase()); //THIS WRITES THE WORD AFTER IT IS CONVERTED TO THE DOCUMENT
  }
  if (string === string.toUpperCase()) {
    //THIS CHECKS IF STRING IS EQUAL TO UPPERCASE
    document.write(string.toLowerCase()); //THIS CONVERTS UPPERCASE TO LOWERCASE THEN WRITES TO DOCUMENT
  }
}
changeWords();

//========EXERCIS 4
