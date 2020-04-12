const carPassing = function (cars, speed) {
  // Your code in here ...
  var s = speed
  var car = {
    time : Date.now(),
    speed : s
  }
  cars.push(car);
  return cars;
}
