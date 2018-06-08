Bacon = {
  fetch: function (callback) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.responseType = 'json';
    request.addEventListener("load", function () { callback(this.response) });
    request.send();
  }
}

window.addEventListener("load", function () {
  var container = document.getElementById("texts");

  Bacon.fetch(function (responses) {
    for (var i = 0; i <= responses.length -1; i++){
      var h = document.createElement("H3")
      var title = document.createTextNode(responses[i].title);
      var p = document.createElement("P");
      var body = document.createTextNode(responses[i].body);
      h.appendChild(title);
      p.appendChild(body);
      container.appendChild(h);
      container.appendChild(p);
    }
  });
});

// document.body.scrollTop + window.innerHeight.
// document.body.scrollHeight
