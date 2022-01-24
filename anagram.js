/*
Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is a word, phrase,
or name formed by rearranging the letters of another, such
as cinema, formed from iceman
Given two strings, write 
*/

function validAnagram(str1, str2){
  if(str1.length != str2){
    false
  }

  arr1 = str1.split("")
  arr2 = str2.split("")

  strFrequency1 = {}
  strFrequency2 = {}


  for(let val of arr1){
    strFrequency1[val] = ( strFrequency1[val]|| 0) + 1
  }
  for(let val of arr2){
    strFrequency2[val] = ( strFrequency2[val]|| 0) + 1
  }

  for(let k in strFrequency1){
    if (!(k in strFrequency2) || strFrequency1[k] != strFrequency2[k]){
      return false
    }
  }

  return true
}



console.log(validAnagram('','')) //true
console.log(validAnagram('aaz','zza')) //false
console.log(validAnagram('anagram','nagaram')) //true
console.log(validAnagram('rat','car')) //false
console.log(validAnagram('awesome','awsom')) //false
console.log(validAnagram('qwerty','qeywrt')) //true
console.log(validAnagram('texttwisttime','timetwisttext')) //true