function myMap() {

// LATITUDE & LONGITUDE

var mapLat = document.getElementById("map-ulule").getAttribute('data-lat');
var mapLng = document.getElementById("map-ulule").getAttribute('data-lng');
var mapZoom = document.getElementById("map-ulule").getAttribute('data-zoom');


var mapProp= {
    center:new google.maps.LatLng(mapLat, mapLng),
    zoom:parseInt(mapZoom),
    scrollwheel: false,
    zoomControl: true,
  };

var map=new google.maps.Map(document.getElementById("map-ulule"),mapProp);

var pinColor = 'FFFF00';

var pinIcon = new google.maps.MarkerImage(
  'img/icons/ululelogo.png',
  new google.maps.Size(50, 60),
  new google.maps.Point(0,0),
  new google.maps.Point(10, 34),
  new google.maps.Size(30, 30)
);

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(mapLat, mapLng),
    map: map,
    title: 'Hello World!',
    icon: pinIcon,
  });
};

if (window.matchMedia("(max-width: 760px)").matches) {
  $('.insta-photos-box').addClass("owl-insta-carousel").addClass("owl-carousel");
  $(document).ready(function(){
    $('.owl-insta-carousel.owl-carousel').owlCarousel({
      loop:true,
      responsiveClass:true,
      navigation:true,
      autoplay:true,
      autoplayTimeout:1500,
      autoplaySpeed: 1000,
      responsive:{
          0:{
              items:2,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
    });
  });
}
