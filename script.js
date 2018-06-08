Bacon = {
  fetch: function (callback) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://baconipsum.com/api/?type=meat-and-filler");
    request.responseType = 'json';
    request.addEventListener("load", function () { callback(this.response) });
    request.addEventListener("error", function () { callback(this.response) });
    request.send();
  }
}

// zadaniem tej funkcji jest sciagniecie tego callbacka w postaci odpowiedzi, callback jest argumentem i jest zmienna, moze sie nazywac jakkolwiek. to co sie bedzie dzialo z callbackiem jest okreslone na dole

window.addEventListener("load", function () {
  var container = document.getElementById("texts");

  Bacon.fetch(function (responses) {
    for (var i = 0; i <= responses.length -1; i++){
      var p = document.createElement("P");
      var t = document.createTextNode(responses[i]);
      p.appendChild(t);
      container.appendChild(p);
    }
  });
});

window.addEventListener("error", function () {
  var container = document.getElementById("texts");
  var p = document.createElement("P");
  var t = document.createTextNode('It seems there was an error');
  p.appendChild(t);
  container.appendChild(p);
});
