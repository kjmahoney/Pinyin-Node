var targetVowel = require('./selectVowel')

//replace the target vowel with the appropriate pinyin

let pinyinVowelsArray = {
  a: ["ā", "á", "ǎ", "à"],
  e: ["ē", "é", "ě", "è"],
  i: ["ī", "í", "ǐ", "ì"],
  o: ["ō", "ó", "ǒ", "ò"],
  u: ["ū", "ú", "ǔ", "ù"],
  v: ["ǖ", "ǘ", "ǚ", "ǜ"]
}

function getPinyin(targetVowel, wordArray){
  let toneNumber = wordArray[wordArray.length-1]
  let pinyinVowel = pinyinVowelsArray[targetVowel][toneNumber -1]
  wordArray.splice(wordArray.indexOf(targetVowel),1,pinyinVowel)
  wordArray.splice((wordArray.length-1),1)
  let newWord = wordArray.join("")
  console.log(newWord)
}

function chop(words){
  wordsNew = words.split(/(?=[\s=\d])/);
  console.log(wordsNew)
}

module.exports = getPinyin;
