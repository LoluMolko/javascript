function flatten (array) {
  var flattened_array = [];
  for (var i = 0; i <= array.length - 1; i++){
    flattened_array = flattened_array.concat(array[i])
  }
return flattened_array
}

console.log(flatten([[1, 2], [3], [4, 5]])) //=> [1, 2, 3, 4, 5]
