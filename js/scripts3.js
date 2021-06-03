$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const jewelryInput = $("select#jewelry").val();


    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".jewelry").text(jewelryInput);




    $("#story").show();
  });
});