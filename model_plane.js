var plane = {
  make: 'Boeing',
  model: '747',
  in_air: false,
  up: function(){
    this.in_air = true
    console.log("Lifting off")
  },
  down: function(){
    this.in_air = false
    console.log("Touching down")
  }
}

plane.up()
console.log(plane.in_air)
// plane.touchDown()
