function sum (array){
  var sum = 0;
  for (var i = 0; i <= array.length - 1; i++){
    sum += array[i]
  }
return sum
}

function avg (array){
  result = sum (array) / array.length
  return result
}

function min (array){
  array.sort(function(a, b){return a - b});
  return array[0]
}

function max (array){
  array.sort(function(a, b){return b - a});
  return array[0]
}

function stats (array){
  var result = {sum: null, avg: null, min: null, max: null};
  result.max = max (array);
  result.min = min (array);
  result.sum = sum (array);
  result.avg = avg (array);
  return result
}



console.log(stats([1, 2, 3, 4, 5, 6, 7])) //=> { sum: 28, avg: 4, min: 1, max: 7 }
console.log(stats([3, 3, 3, 3])) //=> { sum: 12, avg: 3, min: 3, max: 3 }
