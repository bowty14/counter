$(document).ready(function() {
  $("form#form1").submit(function(event){
    event.preventDefault();
    
    var firstNum = parseInt($("#input1").val());
    console.log(firstNum);
    var secondNum = parseInt($("#input2").val());
    for (var index = 0; index <= firstNum; index += secondNum) {
      alert(index);
    }
    
    
    if (isNaN(firstNum) || isNaN(secondNum)) {
      $("#output").text("Empty is not a number");
      //alert("Empty is not a number!")
    } else if (firstNum < 0) {
      $("#output").text("You've got to be positive!")
    } else if (secondNum > firstNum) {
      $("#output").text("Well that is obviously not gonna work!")
    }

  });
});
