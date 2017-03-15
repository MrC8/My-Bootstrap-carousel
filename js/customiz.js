(function( $ ) {

	"use strict";
	
	// Start midnight
	/*$(document).ready(function(){
		// Change this to the correct selector for your nav.
		$('nav#nav-parallax').midnight();
	});*/
	
	//activate bootstrap slider
	$("#myCarousel").carousel();	
	$('#myCarousel').find('.item').first().addClass('active');
	$("#myCarousel").swiperight(function() {  
    	$(this).carousel('prev');  
	});  
	$("#myCarousel").swipeleft(function() {  
	    $(this).carousel('next');  
	});  
  
  	
	//some js for the contactform
	//pour chaque input
	$('.wpcf7-form *').filter(':input').each(function(){
		var parentinput = $(this).closest(".form-group");   
		$(this).blur(function() {
			// si il est pas focus enlève class focus			
			parentinput.removeClass("focus");
			// si il a du contenu ajout class filled
			if( $(this).val() !== '' ) { 
				parentinput.addClass('filled');
			}
			// sinon on enlève la class filled 
			if( !$(this).val()) { 
				parentinput.removeClass('filled');
			}			
		})
		// si il est focus ajout class focus
		.focus(function() {
			parentinput.addClass("focus");
		});	
	});


	
	// some js for hamburger menu
	var hamburger = $("#nav-icon4");
	$('#masthead').on('hover', function(){
		hamburger.toggleClass('open');
	});
	
	
	
	/////////// GALERIE PHOTO DANS REFERENCE
	$('#galerie_photo').slick({
	  infinite: true,
	  fade: true,
	  autoplay: true	  
	});	
	/////////// DERNIERES REFERENCES AFFICHEES
	$('.lastone, .the_others').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
		responsive: [
			/*{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},*/
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]	  	  
	});


	///////////
	$(window).load(function(){
		var $container = $('#portfolio-list');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			},
			itemSelector: '.portfolio-item',
			percentPosition: true,
		  layoutMode:'masonry',
			masonry: {
			  columnWidth: '.grid-sizer'
			}	  		  		
		});
	 	//// select des élément par liste de lien
		$('#portfolio-filter a').click(function(){
			// si c'est current
			$('#portfolio-filter .current').removeClass('current');
			$(this).addClass('current');
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				},
				itemSelector: '.portfolio-item',
				percentPosition: true,
				  layoutMode:'masonry',
					masonry: {
					  columnWidth: '.grid-sizer'
					}								
			 });
			 return false;
		}); 

	});



	/////////////////////////////////////////////////////////////////////////////////////////////	
	// Annuler l'envoi vers téléphone pour autre que mobile et annuler le clic sur menu parent */
	var $window = $(window);	
	function checkWidth() {
		var windowsize = $window.width();
		if (windowsize < 1028 && windowsize > 764) {		
			$("#primary-menu > li.menu-item-has-children > a").attr("href", "javascript:void(0)");
		}
	}	
	// Execute on load
	checkWidth();		
	
		
	///////////////////////////////
	// activation totop
	///////////////////////////////
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.totop');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

		
					
})(jQuery);
