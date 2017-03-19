$(document).ready(function(){
  $('*[data-btn="liens-utiles"]').click(function(){
    tabSelector = $(this).data("target");
    $('*[data-btn="liens-utiles"]').removeClass("underline");
    $('.liens-utiles-content').children().css("display", "none");
    $(this).addClass("underline");
    $(tabSelector).css("display", "block");
  });
});
