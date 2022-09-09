// Problem 1

let array = [44, 22, -3, 3, 4, 0, 12]

let value = false
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true
      } 
    }
  }
}

console.log(value)


//I believe the runtime for the code will be in the microseconds since we have a set amount of values within the array


// Problem 2

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

//The runtime will also be very short in this case since it will take in a word with an exact number of letters. 


//Problem 3

function isPangram(string){
let strArr = string.toLowerCase()
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
        return false
    }
}

return true
}

//I assume that it would take longer for this code to run since we're using the split method and would have to go through each letter of the alphabet to determine whether a letter
// is repeated or not. 

//Problem 4

function longestWord(str) {

    var words = str.split(' ')
    var long = 0
 
    for (var i=0;i<words.length;i++) {
         if (words[i].length > long) {
              long = words[i].length;
         }  
    }
 
    return long
 }

 //I believe it will take longer for this function to run given the split method being used. 