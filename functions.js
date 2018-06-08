var document = {
  getElementById: function (id) {
    return this[id];
  },
  name:    { id: "name",    value: "Michał" },
  surname: { id: "surname", value: "Begejowicz" },
  age:     { id: "age",     value: 24 }
}

document.childNodes = [document.name, document.surname, document.age]

// Funkcja powinna sprawdzić wszystkie elementy dokumentu
// i zwrócić wartość pola tekstowego które posiada najdłuższą wartość
function findLongestInput () {
  var result = '';
  for (var i = 0; i <= document.childNodes.length -1; i++){
    if (document.childNodes[i].value.length > result.length){
      result = document.childNodes[i].value
    }
  }
  return result
};

//toString()

// Dla podanej w argumencie wartości, findInputByValue zwraca
// obiekt zawierający daną wartość
function findInputByValue (value) {
  for (var i = 0; i <= document.childNodes.length -1; i++){
    if (document.childNodes[i].value === value){
      return document.childNodes[i]
    }
  }
};

// Zwraca liczbę wartości inputów spełniających warunek funkcji podanej w argumencie
function count (fun) {
  var result = 0;
  for (var i = 0; i <= document.childNodes.length -1; i++){
    if (fun(document.childNodes[i].value)){
      result += 1
    }
  }
  return result
};

console.log("longest should be 'Begejowicz' --", findLongestInput() === "Begejowicz");
console.log("input with 24 should return proper input --", findInputByValue(24) && findInputByValue(24).id === "age");
console.log("counting strings --", count(function (el) { return (typeof el === "string") }) === 2);
console.log("counting numbers --", count(function (el) { return (typeof el === "number") }) === 1);
