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
});
