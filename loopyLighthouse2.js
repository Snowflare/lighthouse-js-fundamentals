function loopyLighthouse(range, multiples, words){
  var num1 = multiples[0];
  var num2 = multiples[1];
  var num3 = num1 * num2;
  var ran1 = range[0];
  var ran2 = range[1];
  var word1 = words[0];
  var word2 = words[1];
  var word3 = word1 + word2;
  for (var i = ran1; i <= ran2; i++){
    if (i % num3 === 0){
      console.log(word3);
    }else if(i % num1 === 0){
      console.log(word1);
    }else if (i % num2 === 0){
      console.log(word2);
    }else{
      console.log(i);
    }
  }
  
}