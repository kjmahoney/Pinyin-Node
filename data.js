var selectVowel = require('./selectVowel');

function splitWord(word){
  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var citrus = fruits.slice(0, 2);
  console.log(citrus)
}

function toPinyin(word){
  let vowelsArray = word.split("")
  selectVowel(vowelsArray)
}

splitWord("ni2hao3");
toPinyin("ni2");

//break apart

//when you hit a number stop

//split the array there

//save the first word

//run hrough the module

//////for each in array{ function()}

//run subsequent words

//stash into one word


//if array[i] = 1,2,3,4
