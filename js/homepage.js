console.log("homepage js working");


// SLIDER HOMEPAGE

console.log("slider homepage working");
var backgrounds = [
  'url(http://imageshack.com/a/img922/9742/ejJeNI.jpg)',
  'url(http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_1500,w_2000,f_auto,q_90/v1/780428/e38a5f05c0c44f3cbedca63310cfd82f_puigna.jpg) center center no-repeat',
  'url(http://res.cloudinary.com/bahia-blanca/image/upload/v1/PHOTOS/jujuclaireyunan.jpg) center center no-repeat',
  ];
var current = 0;

function nextBackground() {
  $('.home-slider').css(
   'background',
    backgrounds[current = ++current % backgrounds.length]
  );
  $('.home-slider').css('background-size', "100% auto");
  setTimeout(nextBackground, 6000);
};

$('.home-slider').css('background', backgrounds[0]);
$('.home-slider').css('background-size', "100% auto");

setTimeout(nextBackground, 6000);


// SLIDER PRODUCTS

console.log("slider product begin");

$('#arrow-right').on("click", function(){
  var totalProducts = $('.product-box').length
  // console.log("click on arrow right");
  actualProductBox = $('.product-box.show');
  var actualRanking = actualProductBox.data("ranking");

  actualProductBox.fadeIn("slow", function() {
    actualProductBox.css("opacity", "0");
  });

  if (actualRanking + 1 > totalProducts) {
    var nextRanking = 1
  } else {
    var nextRanking = actualRanking + 1;
  };

  // console.log("prochain produit: " + nextRanking);
  nextProductBox = $('.product-box[data-ranking="'+ nextRanking +'"]');

  setTimeout(function(){
    nextProductBox.addClass("show");
    actualProductBox.css("display","none").removeClass("show");
    nextProductBox.css("display", "block");
    nextProductBox.fadeIn("slow", function() {
      nextProductBox.css("opacity", "1");
    });
  }, 1000);
});


$('#arrow-left').on("click", function(){
  var totalProducts = $('.product-box').length
  // console.log("click on arrow right");
  actualProductBox = $('.product-box.show');
  var actualRanking = actualProductBox.data("ranking");

  actualProductBox.fadeIn("slow", function() {
    actualProductBox.css("opacity", "0");
  });

  if (actualRanking - 1 <= 0 ) {
    var previousRanking = totalProducts
  } else {
    var previousRanking = actualRanking - 1;
  };

  // console.log("prochain produit: " + nextRanking);
  previousProductBox = $('.product-box[data-ranking="'+ previousRanking +'"]');

  setTimeout(function(){
    previousProductBox.addClass("show");
    actualProductBox.css("display","none").removeClass("show");
    previousProductBox.css("display", "block");
    previousProductBox.fadeIn("slow", function() {
      previousProductBox.css("opacity", "1");
    });
  }, 1000);
});





