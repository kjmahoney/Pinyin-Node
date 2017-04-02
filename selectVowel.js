var getPinyin = require('./returnPinyin');

//Determine which letter should have the tone according to pinyin rules
function selectVowel(wordArray){

  for (i=0; i< wordArray.length; i++){
    //  a and e trump all other vowels and always take the tone mark.
    if (wordArray[i] == "a" || wordArray[i] == "e"){
      let targetVowel = wordArray[i]
      getPinyin(targetVowel, wordArray)
      break
    }
    // look to see if the following vowel is an a or an e
    else if (wordArray[i+1] == "a" || wordArray[i+1] == "e"){
      let targetVowel = wordArray[i+1]
      getPinyin(targetVowel, wordArray)
      break
    }
    // In the combination ou, o takes the mark.
    else if(wordArray[i]=="o" && wordArray[i+1] == "u"){
      let targetVowel = wordArray[i]
      getPinyin(targetVowel, wordArray)
      break
    }
    // In all other cases, the final vowel takes the mark.
    else if(wordArray[i] == "o" || wordArray[i] == "i" || wordArray[i] == "u"){
      let targetVowel = wordArray[i]
      getPinyin(targetVowel, wordArray)
    }
  }
}

module.exports = selectVowel;
