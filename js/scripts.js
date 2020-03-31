$(document).ready(function() {

  $("form#form1").submit(function(event){
    event.preventDefault();

    var firstNum = $("input1").val();
    console.log(firstNum);
    var secondNum = $("input2").val();
    console.log(secondNum);
    for (var i = 0; index <= firstNum; index += secondNum) {
      alert(i);
    }

  });
});