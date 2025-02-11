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
document.getElementById("button").addEventListener("click", (event) => {
    document.body.style.backgroundColor = "red";
});

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
    let vowels = statement.match(/aeiou/gi)
    let count = vowels.length;
    console.log(count);
}

VowelCount("The quick brown fox jumps over the lazy dog.");