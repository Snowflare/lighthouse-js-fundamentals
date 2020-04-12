function calculateRectangleArea(a,b){
  if (a < 0 || b < 0){
    return undefined;
  }
  return a * b;
}
function calculateTriangleArea(a,b){
  if (a < 0 || b < 0){
    return undefined;
  }
  return a * b / 2;
}
function calculateCircleArea(r){
  if (r < 0){
    return undefined;
  }
  return Math.PI * r * r;
}