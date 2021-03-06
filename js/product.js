function myMap() {

  // LATITUDE & LONGITUDE

  var mapLat = document.getElementById("map-artisan").getAttribute('data-lat');
  var mapLng = document.getElementById("map-artisan").getAttribute('data-lng');
  var mapZoom = document.getElementById("map-artisan").getAttribute('data-zoom');


  var mapStyle = [
          {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": "1"
              },
              {
                  "color": "#9f1723"
              },
              {
                  "lightness": "0"
              },
              {
                  "gamma": "0.90"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#f3eaea"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f3eaea"
              },
              {
                  "lightness": "0"
              },
              {
                  "saturation": "0"
              },
              {
                  "weight": "0.01"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f1f1f1"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#dedede"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#dedede"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#dedede"
              },
              {
                  "lightness": 18
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 17
              }
          ]
      }
  ];

  var mapProp= {
      center:new google.maps.LatLng(mapLat, mapLng),
      zoom:parseInt(mapZoom),
      scrollwheel: false,
      zoomControl: true,
      styles: mapStyle,
  };

  var map=new google.maps.Map(document.getElementById("map-artisan"),mapProp);

  var mapSmall=new google.maps.Map(document.getElementById("map-artisan-xs"),mapProp);

  // var pinColor = 'FFFF00';

  var pinIcon = new google.maps.MarkerImage(
    'https://alizeewyart.github.io/new_eshop_bahiablanca/img/red_marker.svg',
    new google.maps.Size(50, 60),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34),
    new google.maps.Size(30, 30)
  );

  // var pinIcon = new google.maps.MarkerImage(
  //   'img/red_marker.svg',
  //   new google.maps.Size(50, 60),
  //   new google.maps.Point(0,0),
  //   new google.maps.Point(10, 34),
  //   new google.maps.Size(30, 30)
  // );

  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(mapLat, mapLng),
      map: map,
      title: 'Hello World!',
      icon: pinIcon,
  });
};



// PHOTO ZOOM

$("#main-photo").elevateZoom({
  zoomType        : "inner",
  cursor: "crosshair"
});


// PHOTO GALLERY

$('.other-photos-box .thumb-product').first().removeClass("opacity-50");

$(".thumb-product").hover(function(){
  $(this).removeClass("opacity-50");
}, function() {
   $(this).addClass("opacity-50");
});

$(".thumb-product").on("click", function(e){
    // on récupère l'url de thumb cliqué
    var newBackgroundImage = $(this).css("background-image");
    var newUrl = newBackgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
    // console.log(newUrl);
    // on récupère l'url de la main photo
    var lastBackgroundImage = "url(" + $("#main-photo").attr('src') + ")";
    // On met la petite photo dans la grande
    $("#main-photo").attr('src', newUrl);
    $("#main-photo").elevateZoom({
      zoomType: "inner",
      cursor: "crosshair",
    });
    console.log(lastBackgroundImage)
    // Et la grande dans la petite
    // $(this).css('background-image', lastBackgroundImage)
  });


// COLOR CHOICE

// PRENDRE LE PREMIER CHOIX
$('input[name="color"]').first().prop("checked", "true");
// LE CHECKER
var idColorChecked = $('input[name="color"]:checked').attr("id");
$("label[for='" + idColorChecked + "']").addClass("checked");

$('input[name="color"]').change(function(){
  $('label.color-choice').removeClass('checked');
  $('label.color-choice').css('border', '3px solid white');
  var idColorToCheck = $(this).attr("id");
  $("label[for='" + idColorToCheck + "']").addClass("checked");
  // var colorChecked = $("label[for='" + idColorToCheck + "']").css("background-color");
  // var borderStyle = "4px solid " + colorChecked + " !important";
  $("label[for='" + idColorToCheck + "']").css("border", "none");
});


// SIZE CHOICE

// PRENDRE LE PREMIER CHOIX
$('input[name="size"]').first().prop("checked", "true");
// LE CHECKER
var idSizeChecked = $('input[name="size"]:checked').attr("id");
$("label[for='" + idSizeChecked + "']").addClass("checked");

$('input[name="size"]').change(function(){
  $('label.size-choice').removeClass('checked');
  var idSizeToCheck = $(this).attr("id");
  $("label[for='" + idSizeToCheck + "']").addClass("checked");
  // var sizeChecked = $("label[for='" + idsizeToCheck + "']").css("background-size");
  // var borderStyle = "4px solid " + sizeChecked + " !important";
});


// BRODERIE CHOICE ORDI

var actualBroderieNb = $('.broderie-image.selected').data("nb-broderie");
$('input[name="broderie"]').val("broderie n° " + actualBroderieNb);

$('#broderie-right').on("click", function(){
  var nbTotalBroderie = $('.broderie-image').length;
  var nbActualBroderie = $('.broderie-image.selected').data("nb-broderie");


  if (nbActualBroderie + 1 > nbTotalBroderie) {
    var nbNextBroderie = 1;
  } else {
    var nbNextBroderie = nbActualBroderie + 1;
  };

  actualBroderie = $('.broderie-image.selected');
  nextBroderie = $('.broderie-image[data-nb-broderie="'+ nbNextBroderie +'"]');

  actualBroderie.removeClass("selected");
  nextBroderie.addClass("selected");
  actualBroderie.css("opacity", "0");
  nextBroderie.css("opacity", "1");

  $('input[name="broderie"]').val("broderie n° " + nbNextBroderie);
});

$('#broderie-left').on("click", function(){
  var nbTotalBroderie = $('.broderie-image').length;
  var nbActualBroderie = $('.broderie-image.selected').data("nb-broderie");


  if (nbActualBroderie - 1 <= 0 ) {
    var nbNextBroderie = nbTotalBroderie;
  } else {
    var nbNextBroderie = nbActualBroderie - 1;
  };

  actualBroderie = $('.broderie-image.selected');
  nextBroderie = $('.broderie-image[data-nb-broderie="'+ nbNextBroderie +'"]');

  actualBroderie.removeClass("selected");
  nextBroderie.addClass("selected");
  actualBroderie.css("opacity", "0");
  nextBroderie.css("opacity", "1");

  $('input[name="broderie"]').val("broderie n° " + nbNextBroderie);
});

// BRODERIE CHOICE MOBILE

var actualBroderieNbXs = $('.broderie-image-xs.selected').data("nb-broderie");
$('input[name="broderie"]').val("broderie n° " + actualBroderieNbXs);

$('#broderie-right-xs').on("click", function(){
  var nbTotalBroderieXs = $('.broderie-image-xs').length;
  var nbActualBroderieXs = $('.broderie-image-xs.selected').data("nb-broderie");


  if (nbActualBroderieXs + 1 > nbTotalBroderieXs) {
    var nbNextBroderieXs = 1;
  } else {
    var nbNextBroderieXs = nbActualBroderieXs + 1;
  };

  actualBroderieXs = $('.broderie-image-xs.selected');
  nextBroderieXs = $('.broderie-image-xs[data-nb-broderie="'+ nbNextBroderieXs +'"]');

  actualBroderieXs.removeClass("selected");
  nextBroderieXs.addClass("selected");
  actualBroderieXs.css("opacity", "0");
  nextBroderieXs.css("opacity", "1");

  $('input[name="broderie"]').val("broderie n° " + nbNextBroderieXs);
});

$('#hello').click(function(){
  console.log("hello")
});

$('#broderie-left-xs').on("click", function(){
  console.log("working broderie left xs");
  var nbTotalBroderieXs = $('.broderie-image-xs').length;
  var nbActualBroderieXs = $('.broderie-image-xs.selected').data("nb-broderie");


  if (nbActualBroderieXs - 1 <= 0 ) {
    var nbNextBroderieXs = nbTotalBroderieXs;
  } else {
    var nbNextBroderieXs = nbActualBroderieXs - 1;
  };

  actualBroderieXs = $('.broderie-image-xs.selected');
  nextBroderieXs = $('.broderie-image-xs[data-nb-broderie="'+ nbNextBroderieXs +'"]');

  actualBroderieXs.removeClass("selected");
  nextBroderieXs.addClass("selected");
  actualBroderieXs.css("opacity", "0");
  nextBroderieXs.css("opacity", "1");

  $('input[name="broderie"]').val("broderie n° " + nbNextBroderieXs);
});


// QUANTITY IN SHOW PRODUCT
  // INCREASE +1
  $('#increase-quantity').on("click", function(e){
    var qty = $('#quantity-input').val();
    console.log(qty);
    var newQty = parseInt(qty) + 1;
    $('#quantity-input').val(newQty);
  });
  // DECREASE - 1
  $('#decrease-quantity').on("click", function(e){
    var qty = $('#quantity-input').val();
    console.log(qty);
    var newQty = parseInt(qty) - 1;
    if(newQty < 1) newQty=1;
    if(newQty >= 10) newQty=10;
    $('#quantity-input').val(newQty);
  });

  $('*[data-btn="mob-product"]').click(function(){
    var tabTarget = $(this).data("target");
    // console.log(tabTarget);
    $('*[data-btn="mob-product"]').removeClass("fw-400").addClass("fw-300");
    $('*[data-btn="mob-product"]').parent().removeClass("bb-2px-red");
    $(this).removeClass("fw-300").addClass("fw-400");
    $(this).parent().addClass("bb-2px-red");
    $('.product-box-mob').addClass("hidden");
    $(tabTarget).removeClass("hidden");
    if (tabTarget == "#artisanat-product-box-mob") {
      heightArtisan = $('#h-to-know').height();
      $('.h-responsive').css("height", heightArtisan);
      myMap();
    }
  });




$(document).ready(function(){
  $('.mob-product-photos.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    navigation:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed: 1500,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });

  if (window.matchMedia("(max-width: 600px)").matches) {
    $('.product-suggestion-result').addClass("owl-carousel").addClass("owl-theme");
    $('.product-suggestion-result.owl-carousel').owlCarousel({
      loop:true,
      responsiveClass:true,
      navigation:true,
      autoplay:true,
      autoplayTimeout:2500,
      autoplaySpeed: 1500,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
    });
  };

});

$('#close-guide-taille-popup').click(function(){
  console.log("working close modal");
  $('#guide-taille-popup').css("background-color", "transparent")
  $('#guide-taille-popup').css("top","-1000px")
});

$('#open-guide-taille-popup').click(function(){
  console.log("working open modal");
  $('#guide-taille-popup').css("background-color", "rgba(250, 250, 250, 0.7)")
  $('#guide-taille-popup').css("top","0px")
});
