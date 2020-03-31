$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    
    var firstNum = parseInt($("#input1").val());
    console.log(firstNum);
    var secondNum = parseInt($("#input2").val());
    for (var index = 0; index <= firstNum; index += secondNum) {
      alert(index);
    }

  });
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt