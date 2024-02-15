(function ($) {
    'use strict';

    AOS.init({
        once: true,
    });

    var a = 0;
    $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 150) {
            sticky.addClass('sticky-nav');
            $("body").addClass("scrollingheader");
        }else {
            sticky.removeClass('sticky-nav');
            $("body").removeClass("scrollingheader");
        }
   });

    jQuery(document).ready(function ($) {

       $('.fs .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            center:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
        $('.st .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            center:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
        $('.pri .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            center:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
        $('.ss .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            center:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })

        

        $('.bog .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })

        //

        $('.addvid .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            center:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })


        //

        $('.fs-event .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        })

        //
        $('.hd .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })
        $('.dd .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })
        $('.cd .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplay:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })

        //Resource Areas
        $('.content').hide();
        $('.content').eq(1).show();
        $('.head').eq(0).addClass('active');

        $('.head').click(function(){
            $(this).parent('.block').siblings('.block').children('.content').slideUp();
            $(this).siblings('.head').next().slideUp();
            $(this).parent('.block').siblings('.block').children('.head').removeClass('active');
            $(this).toggleClass('active');
            $(this).next('.content').slideToggle();
        });




        //time line active when scroll
        
        $(window).scroll(function () {
            $('.obd-list-item .column .bod-row').each(function() {
                  var distance = $(this).offset().top - 350;
                  if ($(window).scrollTop() >= distance) {
                    $(this).addClass('active');
                  } else {
                    $(this).removeClass('active');
                  }
                });
        
        });

        $("#phone").intlTelInput({});

        //

        $("#scrollH").mCustomScrollbar({
            axis:"x",
            // theme:"light-3",
            advanced:{autoExpandHorizontalScroll:true}
        });
        $("#scrollH2").mCustomScrollbar({
            axis:"x",
            // theme:"light-3",
            advanced:{autoExpandHorizontalScroll:true}
        });

        
    });

    $(window).resize(function(){
        if($(window).width() <= 991){
            // $( ".header-right" ).appendTo( ".navbar-collapse" );

        }else{
            // $( ".header-right" ).prependTo( ".header-right-wrap" );

        }
     })


    //


if($(window).width() <= 991){
    // $( ".header-right" ).appendTo( ".navbar-collapse" );
}else{
   
}

}(jQuery));

