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

        //

        if ($('div').hasClass('video-tour')) {
            var videoTourCarousel = $('#videoTour');
            videoTourCarousel.owlCarousel({
                    loop: true,
                    // nav:true,
                    dots:false,
                    margin:0,
                    autoplay: false,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,
                    touchDrag:false,
                    slideBy: 2,
                    responsive: {
                        0: {
                            items: 1
                        }
                    }
                });
        
            $(".pwNext").click(function() {
                videoTourCarousel.trigger('next.owl.carousel');
            });
            $(".pwPrev").click(function() {
                videoTourCarousel.trigger('prev.owl.carousel');

            });
        }

          

        //Resource Areas
        $('.content').hide();
        $('.content').eq(0).show();
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


//virtual tour form step forword and backword event

        $('.question-box').eq(0).find('.option-btn').click(function(){
            $('.option-btn').removeClass('active');
            $(this).addClass('active');
            $('#question1').hide();
            setTimeout(function(){
                $('#question2').fadeIn();
            },300);

            $('.progress-bar').css({'width':'25%'})
        })

        $('.question-box').eq(1).find('.option-btn').click(function(){
            $('.option-btn').removeClass('active');
            $(this).addClass('active');
            $('#question2').hide();
            setTimeout(function(){
                $('#question3').show();
            },300)
            
            $('.progress-bar').css({'width':'50%'})
        })

        $('#btn-next').click(function(e){
            e.preventDefault();
            $('#question3').hide();
            setTimeout(function(){
                $('#question4').show();
            },300)
            
            $('.progress-bar').css({'width':'75%'})
        })

        $('#done').click(function(e){
            e.preventDefault();
            setTimeout(function(){
                window.location.href = "https://nexatestwp.com/html/the-english-school-dubai/virtual-tour-11.html";
            },500)
            
            $('.progress-bar').css({'width':'100%'})
        })
        
        $('.back_').on('click', function(){
            if($('#question2').css('display') == 'block'){
                $('#question2').hide();
                $('#question1').show();
            }else if($('#question3').css('display') == 'block'){
                $('#question3').hide();
                $('#question2').show();
            }else if($('#question4').css('display') == 'block'){
                $('#question4').hide();
                $('#question3').show();
            }
        })
        //end

        
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

/* Custom js */
(function ($) {
    'use strict';
    jQuery(document).ready(function ($) {

        function videoTrigger() {
            var trigger = $('.video-trigger');
            if (!trigger.length) return;
            trigger.fancybox();
        }
        videoTrigger();

        $('.banner .owl-carousel').owlCarousel({
            // loop: true,
            autoplay: false,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            autoplayHoverPause: true,
            items:1
        });

        $('.sec-staff .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            center:true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items:1.5
                },
                1200: {
                    items:2.5
                }
            }
        });

        $('.blog-sec .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            nav:false,
            center:true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items:2
                },
                1000: {
                    items:2.5
                },
                1200: {
                    items:3.5
                }
            }
        });

        $('.sec-facilities .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            nav:true,
            autoplayHoverPause: true,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items:2
                },
                1000: {
                    items:3
                },
                1200: {
                    items:4
                }
            }
        })

        $('.sec-Meet .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 40,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            nav:false,
            center: true,
            autoplayHoverPause: true,
            navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items:2
                },
                1200: {
                    items:2.5
                }
            }
        });

        $('.sec-practice-journey .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 40,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            nav:true,
            navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
            center:true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items:1.5
                },
                1200: {
                    items:2.5
                }
            }
        });
    });
}(jQuery));

