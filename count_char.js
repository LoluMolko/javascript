function countChar (string, char){
  result = 0;
  string = string.toLowerCase()
  for (var i = 0; i <= string.length - 1; i++){
    if (string[i] === char){
      result += 1
    }
  }
return result
}

console.log(countChar('rower', 'r')) // => 2
console.log(countChar('Ala ma kota', 'a')) // => 4

// String.toLowerCase()
//  'asdf'[1] //=> 's'
