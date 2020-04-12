const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  var metrics = {
    name : "",
    num : 0
  };
  for (var i = 0; i < vegetables.length; i++){
    if (vegetables[i][metric] > metrics.num){
      metrics.name = vegetables[i].submitter;
      metrics.num = vegetables[i][metric]
    }
  }
  return metrics.name;
}
