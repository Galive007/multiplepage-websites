$(document).ready(function(){
// HERO SLYDER START
	$(".hero_section").owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: true,
		    items: 1,
		    dots: false,
		    navText: ['PREV','NEXT'],
		    smartSpeed: 1000,
		    responsive:{
		        0:{
		          
		        },
		        600:{
		            
		        },
		        1000:{
		            
		        }
		    }
		})
// HERO SLYDER START END

//SCROLL TO TOP BUTTON START
	$(window).scroll(function(){
		if( $(this).scrollTop() > 100){
			$(".scrollTop").fadeIn();
		} else{
			$(".scrollTop").fadeOut();
		}
	});

	$(".scrollTop").click(function(){
			$("html ,body").animate({scrollTop : 0}, 1000 );
		});
//SCROLL TO TOP BUTTON END

//ACCORDION START
	$(".accordian_header").click(function(){
       if($(this).next(".accordian_body").hasClass("active")){
         $(this).next(".accordian_body").removeClass("active").slideUp();
        $(this).children("span").removeClass("fa-minus").addClass("fa-plus");	
       } else
       	{
		   $(".accordian_body").removeClass("active").slideUp();
		   $(".accordian_header span").removeClass("fa-minus").addClass("fa-plus");
	       $(this).next(".accordian_body").addClass("active").slideDown()
	        $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
	      }
	  });
//ACCORDION END


});