console.log("noel working");

$(".color-choice-elle-1").on("click", function(){
  $(".color-choice-elle-1").removeClass("choosen").css("border", "");
  colorChoice = "3px solid " + $(this).data("color");
  console.log(colorChoice);
  imgTarget = $(this).data("target");
  $(".img-choix-cadeau-elle-lui").addClass("not-choosen");
  $(imgTarget).removeClass("not-choosen");
  $(this).css("border",colorChoice);
});
