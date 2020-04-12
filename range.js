function range(s, e, st){
  var foo = [];
  if (st <= 0 || e < s || st == undefined || s == undefined || e == undefined){
    return foo;
  }
  for (var i = s; i <= e; i = i + st){
    foo.push(i);
  }
  return foo;
}