document.bgColor = "#DAF7A6";

function welcomeFunction(){
  var person = prompt('Hello, please tell me your name')
  if (person != null){
    document.getElementById('first_p').innerHTML = 'Very nice to meet you ' + person + '! How are you today?';
  }
}

function changeBtn(){
  document.getElementById("btn").innerHTML = 'I am being hovered over';
}

function changeBtnBack(){
  document.getElementById("btn").innerHTML = 'Click me!!!';
}

function sayHello(){
  document.getElementById('second_p').innerHTML = 'Hello there '+ document.getElementById('name_input').value + '!!!!';
}

document.getElementById('btn')
.addEventListener('click', welcomeFunction);

document.getElementById('btn').addEventListener('mouseover', changeBtn);

document.getElementById('btn').addEventListener('mouseleave', changeBtnBack);

document.getElementById('name_btn').addEventListener('click', sayHello);
