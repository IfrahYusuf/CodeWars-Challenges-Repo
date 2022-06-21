//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

//Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

//Examples(Input ==> Output)
//"anna"   ==> true
//"walter" ==> false
//12321    ==> true
//123456   ==> false





function isPalindrome(line) {
  
    //First need to convert everything into a string 
   let string = line.toString();
    
    //Then loop through the string using a for loop
    //Use a conditional to return T or F if condition is met
    for(let i=0; i<= string.length - 1 ; i++){
      if( string[0] === string[string.length - 1]){
       return true;
      }else{
        return false;
      }
    }
  }