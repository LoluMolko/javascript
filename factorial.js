var factorial = function (number){
  var result = 1;

  for (var i = 1; i <= number; i++){
    result = result * i;
  };
  return result
};

console.log(factorial(4)) // 24
console.log(factorial(5)) // 120
console.log(factorial(1)) // 1
