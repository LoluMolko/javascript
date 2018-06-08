function flattenUniq (array) {
  var flattened_array = [];
  var uniq_flattened_array = [];

  for (var i = 0; i <= array.length - 1; i++){
    flattened_array = flattened_array.concat(array[i])
  }

  for (var i = 0; i <= flattened_array.length - 1; i++){
    if (uniq_flattened_array.indexOf(flattened_array[i]) === -1){
      uniq_flattened_array.push(flattened_array[i])
    }
  }
  return uniq_flattened_array
}

console.log(flattenUniq([[1, 2, 2, 3], [2, 3, 4]])) // => [1, 2, 3, 4]
console.log(flattenUniq([[1, 1, 1], [2, 2]])) // => [1, 2]
