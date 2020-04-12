const finalPosition = function (moves) {
  // Your code in here ...
  var position = [0,0];
  for (var i = 0; i < moves.length; i++){
    if (moves[i ] == 'north'){
      position[1]++;
    }else if (moves[i] == 'south'){
      position[1]--;
    }else if (moves[i] == 'east'){
      position[0]++;
    }else if (moves[i] == 'west'){
      position[0]--;
    }
  }
  return position;
}
