$(document).ready(function(){


  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});

    $('#search-btn-1').on("click", function(){
      console.log("ok");
      $(this).css("opacity", "0").css("z-index","0");
      $('#search-btn-1 .navbar-1-text').css("display", "inline");
      $('.search-form-box').css("opacity", "1").css("z-index", "3");
    });


    $('#search-btn-2').on("click", function(){
      console.log("ok");
      $(this).css("opacity", "0").css("z-index","0").css("display","inline");
      $('.search-form-box-2').css("opacity", "1").css("z-index", "3");
    });

  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);

  });

  //------------------------------------//
  //Wow Animation//
  //------------------------------------//
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();

  // PANIER
  console.log("panier begins");
  $('#close-panier-nav-box').click(function(){
    $('.panier-nav-box').css("opacity", "0");
    setTimeout(function() {
      $('.panier-nav-box').css("z-index", "-3");
    }, 1000);
  });

  $('.panier-nav-btn').mouseover(function(){
    $('.panier-nav-box').css("z-index", "3");
    $('.panier-nav-box').css("opacity", "1");
  });


  $('#mobile-menu-btn').click(function(){
    $('#mobile-menu-right').toggleClass('open');
    $('#mobile-menu-right2').toggleClass('open');
    $('html').toggleClass("stop-scrolling-y");
    $('body').toggleClass("stop-scrolling-y");
    if ($('#mobile-menu-btn').css('opacity') == 0) {
        $('#mobile-menu-btn').css('opacity', 1);
      } else {
        $('#mobile-menu-btn').css('opacity', 0);
      }
  });

  $('#mobile-menu-right2').click(function(){
    $('#mobile-menu-right').removeClass('open');
    $('#mobile-menu-right2').removeClass('open');
    $('html').removeClass("stop-scrolling-y");
    $('body').removeClass("stop-scrolling-y");
    $('#mobile-menu-btn').css('opacity', 1);
  });

  // $(document).mouseup(function (e) {
  //     var container = $('#mobile-menu-right');
  //     var mobileNavbar = $('#mobile-menu-btn');
  //     if (!container.is(e.target)) {
  //       if ($('#mobile-menu-right').hasClass('open')) {
  //         $('#mobile-menu-right').removeClass('open');
  //         $('html').removeClass("stop-scrolling-y");
  //         $('body').removeClass("stop-scrolling-y");
  //         $('#mobile-menu-btn').css('opacity', 1);
  //       }
  //     }
  // });


  $('*[data-btn="mob-menu-btn"]').click(function(){
    mobMenuContent = $(this).data("target");
    if ($(mobMenuContent).hasClass('open')) {
      $(mobMenuContent).removeClass('open');
      mobMenuAngle = $(this).find('i').css("transform", "rotate(0deg)");
    } else {
      $(mobMenuContent).addClass('open');
      mobMenuAngle = $(this).find('i').css("transform", "rotate(90deg)");
    }

  });

  // COMMANDES

  $('#facturation-different').change(function(){
    if ($('#facturation-different').is(':checked')) {
      $('.facturation-box').removeClass('opacity-0');
    } else {
      $('.facturation-box').addClass('opacity-0');
    };
  });


  function calculPanier() {
    // VERSION ORDI
    var sousTotalTTC = parseFloat($('.sous-total-ttc').html());
    var TVAPercentage = parseFloat($('.tva-percentage').html());
    var sousTotalHT = sousTotalTTC * TVAPercentage / 100;
    $('.sous-total-tva').html(sousTotalHT);
    var sumReduction = parseFloat($('.total-reduction').html());
    var sousTotalWithReduc = sousTotalTTC - sumReduction;
    if (sousTotalWithReduc > 70) {
      $('.total-livraison').html("OFFERTE !");
      $('.full-total-ttc').html(sousTotalWithReduc);
    } else {
      $('.total-livraison').html("3 €");
      $('.full-total-ttc').html(sousTotalWithReduc + 3);
    };

    // VERSION MOBILE
    var sousTotalTTCXs = parseFloat($('.sous-total-ttc-xs').html());
    var TVAPercentageXs = parseFloat($('.tva-percentage-xs').html());
    var sousTotalHTXs = sousTotalTTCXs * TVAPercentageXs / 100;
    $('.sous-total-tva-xs').html(sousTotalHTXs);
    var sumReductionXs = parseFloat($('.total-reduction-xs').html());
    var sousTotalWithReducXs = sousTotalTTCXs - sumReductionXs;
    if (sousTotalWithReducXs > 70) {
      $('.total-livraison-xs').html("OFFERTE !");
      $('.full-total-ttc-xs').html(sousTotalWithReducXs);
    } else {
      $('.total-livraison-xs').html("3 €");
      $('.full-total-ttc-xs').html(sousTotalWithReducXs + 3);
    };
  };

  calculPanier();


  AOS.init();



  $('#close-enews-modal').click(function(){
    console.log("working close modal");
    $('#modal-enews').css("background-color", "transparent")
    $('#modal-enews').css("top","-1000px")
  });

  var isshow = sessionStorage.getItem('isshow');
  if (sessionStorage.getItem('isshow') == 1) {
    $('#modal-enews').css("display", "none");
  } else {
    sessionStorage.setItem('isshow', 1);
  };
  };

  // COMMANDES

});

// FAQ BOX

$('.faq-box .fa-plus').on("click", function(){
  thisFaqBox = $(this).parent().parent();
  $(this).addClass("hidden");
  console.log(thisFaqBox);
  thisFaqBox.find(".fa-minus").removeClass("hidden");
  thisFaqBox.find(".faq-box-content").removeClass("h-0");
});

$('.faq-box .fa-minus').on("click", function(){
  thisFaqBox = $(this).parent().parent();
  $(this).addClass("hidden");
  console.log(thisFaqBox);
  thisFaqBox.find(".fa-plus").removeClass("hidden");
  thisFaqBox.find(".faq-box-content").addClass("h-0");
});

// INSTAGRAM


