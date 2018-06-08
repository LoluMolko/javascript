function convert (array){
  var i = 0;
  var new_array = [];

  while (array[i]){
    if (isNaN(parseInt(array[i]))) {
      i++
    } else {
      new_array.push(parseInt(array[i]))
      i++
    }
  }
  return new_array
}

console.log(convert(['1', '10', '100'])) //=> [1, 10, 100]
console.log(convert(['3', '6', 'asdf', '7'])) //=> [3, 6]
