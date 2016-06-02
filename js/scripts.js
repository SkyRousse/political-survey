/*This file is for your custom js.  All yours*/
$(function() {
  $("form#political-survey").submit(function(event){
    event.preventDefault();
    var globalWarming = parseInt($("input[name=global-warming]:checked").val());
    var gunCheck = parseInt($("input[name=gun-check]:checked").val());
    var marijuana = parseInt($("input[name=marijuana]:checked").val());
    var military = parseInt($("input[name=military]:checked").val());
    var score = globalWarming + gunCheck + marijuana + military;
    debugger;
    if (score <= 1) {
      $("#red").show();
    }
    else if (score === 2) {
      $("#middle").show();
    }
    else {
      $("#blue").show();
    }
  });
});
