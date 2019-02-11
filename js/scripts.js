$(document).ready(function(){
  $("#formOne").submit(function(event){
    var yournameInput = $("input#yourname").val();

    $(".yourname").text(yournameInput);

    $("#letterbody").show();

    event.preventDefault();

  });

});
