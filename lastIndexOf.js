function lastIndexOf(arr, n){
  for (var i = arr.length - 1; i >= 0; i--){
    if (arr[i] === n){
      return i;
    }
  }
  return i;
}