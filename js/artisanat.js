$('ul.articles-section a:nth-child(2)').css("margin-top", "160px");
$('ul.articles-section a:nth-child(2n+1)').css("margin-top", "-160px");
$('ul.articles-section a:nth-child(1)').css("margin-top", "0px");


$('#MX-CHP').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#chiapas-info-box').css("z-index", "2");
    $('#chiapas-info-box').css("opacity", "1");
   }, 500)
});

$('#MX-GRO').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#guerrero-info-box').css("z-index", "2");
    $('#guerrero-info-box').css("opacity", "1");
  }, 500)
});

$('#MX-MIC').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#michoacan-info-box').css("z-index", "2");
    $('#michoacan-info-box').css("opacity", "1");
  }, 500)
});

$('#MX-MEX').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#distrito-federal-info-box').css("z-index", "2");
    $('#distrito-federal-info-box').css("opacity", "1");
  }, 500)
});


$('#MX-HID').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#hidalgo-info-box').css("z-index", "2");
    $('#hidalgo-info-box').css("opacity", "1");
  }, 500)
});

$('#MX-QUE').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#hidalgo-info-box').css("z-index", "2");
    $('#hidalgo-info-box').css("opacity", "1");
  }, 500)
});

$('#MX-PUE').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#puebla-info-box').css("z-index", "2");
    $('#puebla-info-box').css("opacity", "1");
  }, 500)
});

$('#MX-TLA').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#puebla-info-box').css("z-index", "2");
    $('#puebla-info-box').css("opacity", "1");
  }, 500)
});

$('#MX-MOR').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
    $('#puebla-info-box').css("z-index", "2");
    $('#puebla-info-box').css("opacity", "1");
  }, 500)
});

$('.circle-lago-atitlan').click(function(){
  $('.artisanat-info-box').css("opacity", "0");
  $('.artisanat-info-box').css("z-index", "-1");
  $('#lago-info-box').css("z-index", "2");
  $('#lago-info-box').css("opacity", "1");
});



$('.close-info-box').on("click", function(){
  $('.artisanat-info-box').css("opacity", "0");
  setTimeout(function(){
    $('.artisanat-info-box').css("z-index", "-1");
  }, 1000)
});
