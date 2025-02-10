// Even or Odd Function
function EvenOrOdd(num){
    if (num % 2 == 0){
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}

EvenOrOdd(6);

// Reverse String Function
function ReverseString(original){
    let length = original.length;
    let reverse = "";

    for (i=0; i<length; i++) {
        reverse = original.charAt(i) + reverse;
    }
    console.log(reverse)
}

ReverseString("Problem");

// Background Color Change Code


// Max Value Function
function MaxValueArray(arr){
    let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;

}

let max = MaxValueArray([10,54,32,75,86,15,96,4,7]);
console.log(max);

// Count Vowels in a String Function
function VowelCount(statement){
    let vowel1 = statement.match(/a/gi)
    let vowel2 = statement.match(/e/gi)
    let vowel3 = statement.match(/i/gi)
    let vowel4 = statement.match(/o/gi)
    let vowel5 = statement.match(/u/gi)
    
    let vowels = vowel1.concat(vowel2,vowel3,vowel4,vowel5);
    let count = vowels.length;
    console.log(count);
}

VowelCount("The quick brown fox jumps over the lazy dog.");