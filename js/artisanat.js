$('ul.articles-section a:nth-child(2)').css("margin-top", "160px");
$('ul.articles-section a:nth-child(2n+1)').css("margin-top", "-160px");
$('ul.articles-section a:nth-child(1)').css("margin-top", "0px");


$('#MX-CHP').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#chiapas-info-box').css("z-index", "2");
  $('#chiapas-info-box').css("opacity", "1");
});

$('#MX-GRO').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#guerrero-info-box').css("z-index", "2");
  $('#guerrero-info-box').css("opacity", "1");
});

$('#MX-MIC').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#michoacan-info-box').css("z-index", "2");
  $('#michoacan-info-box').css("opacity", "1");
});

$('#MX-MEX').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#distrito-federal-info-box').css("z-index", "2");
  $('#distrito-federal-info-box').css("opacity", "1");
});


$('#MX-HID').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#hidalgo-info-box').css("z-index", "2");
  $('#hidalgo-info-box').css("opacity", "1");
});

$('#MX-QUE').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#hidalgo-info-box').css("z-index", "2");
  $('#hidalgo-info-box').css("opacity", "1");
});

$('#MX-PUE').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#puebla-info-box').css("z-index", "2");
  $('#puebla-info-box').css("opacity", "1");
});

$('#MX-TLA').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#puebla-info-box').css("z-index", "2");
  $('#puebla-info-box').css("opacity", "1");
});

$('#MX-MOR').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#puebla-info-box').css("z-index", "2");
  $('#puebla-info-box').css("opacity", "1");
});

$('.circle-lago-atitlan').mouseover(function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
  $('#lago-info-box').css("z-index", "2");
  $('#lago-info-box').css("opacity", "1");
});



$('.close-info-box').on("click", function(){
  $('.artisanat-info-box').css("z-index", "-1");
  $('.artisanat-info-box').css("opacity", "0");
});
