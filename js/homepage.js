console.log("homepage js working");

// SLIDER PRODUCTS HOMEPAGE

console.log("slider homepage working");
// var backgrounds = [
//   'url(http://imageshack.com/a/img922/9742/ejJeNI.jpg)',
//   'url(http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_1500,w_2000,f_auto,q_90/v1/780428/e38a5f05c0c44f3cbedca63310cfd82f_puigna.jpg)',
//   'url(http://res.cloudinary.com/bahia-blanca/image/upload/v1/PHOTOS/jujuclaireyunan.jpg)',
//   ];
// var current = 0;

// function nextBackground() {
//   $('.home-slider').css(
//    'background-image',
//     backgrounds[current = ++current % backgrounds.length]
//   );
//   // $('.home-slider').css('background-size', "100% auto");
//   setTimeout(nextBackground, 6000);
// };

// $('.home-slider').css('background-image', backgrounds[0]);
// // $('.home-slider').css('background-size', "100% auto");

// setTimeout(nextBackground, 6000);

// TRUE 1st SLIDER HOME



function nextBackground() {
  var totalImgSlider = $('.img-slider').length;
  actualImgSliderBox = $('.img-slider.show');
  var actualImgSliderRanking = actualImgSliderBox.data("ranking");

  // actualImgSliderBox.fadeIn("slow", function() {
  //   actualImgSliderBox.css("opacity", "0");
  // });

  if (actualImgSliderRanking + 1 > totalImgSlider) {
    var nextImgSliderRanking = 1
  } else {
    var nextImgSliderRanking = actualImgSliderRanking + 1;
  };

  nextImgSliderBox = $('.img-slider[data-ranking="'+ nextImgSliderRanking +'"]');

  nextImgSliderBox.addClass("show");
  actualImgSliderBox.css("opacity","0").removeClass("show");
  nextImgSliderBox.css("opacity", "1");

  setTimeout(nextBackground, 5000);
};


setTimeout(nextBackground, 5000);


// SLIDER PRODUCTS

console.log("slider product begin");


function loop() {
  console.log("begin");
  var totalProducts = $('.one-product-box').length;
  actualProductBox = $('.one-product-box.show');
  var actualRanking = actualProductBox.data("ranking");

  if (actualRanking + 1 > totalProducts) {
    nextRanking = 1
  } else {
    nextRanking = actualRanking + 1;
  };

  // console.log("prochain produit: " + nextRanking);
  nextProductBox = $('.one-product-box[data-ranking="'+ nextRanking +'"]');

  actualProductBox.css("opacity", "0");
  nextProductBox.addClass("show");
  actualProductBox.removeClass("show");
  nextProductBox.css("opacity", "1");

  console.log("ok");

  setTimeout(loop, 3000);
}

$(document).ready(function() {
  setTimeout(loop, 3000);
});



$('#arrow-right').on("click", function(){
  var totalProducts = $('.one-product-box').length
  // console.log("click on arrow right");
  actualProductBox = $('.one-product-box.show');
  var actualRanking = actualProductBox.data("ranking");

  if (actualRanking + 1 > totalProducts) {
    var nextRanking = 1
  } else {
    var nextRanking = actualRanking + 1;
  };

  // console.log("prochain produit: " + nextRanking);
  nextProductBox = $('.one-product-box[data-ranking="'+ nextRanking +'"]');

  actualProductBox.css("opacity", "0");
  nextProductBox.addClass("show");
  actualProductBox.removeClass("show");
  nextProductBox.css("opacity", "1");
});


$('#arrow-left').on("click", function(){
  var totalProducts = $('.one-product-box').length
  // console.log("click on arrow right");
  actualProductBox = $('.one-product-box.show');
  var actualRanking = actualProductBox.data("ranking");

  if (actualRanking - 1 <= 0 ) {
    var previousRanking = totalProducts
  } else {
    var previousRanking = actualRanking - 1;
  };

  // console.log("prochain produit: " + nextRanking);
  previousProductBox = $('.one-product-box[data-ranking="'+ previousRanking +'"]');

  actualProductBox.css("opacity", "0");
  previousProductBox.addClass("show");
  actualProductBox.removeClass("show");
  previousProductBox.css("opacity", "1");
});






