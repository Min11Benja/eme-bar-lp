

/*================Image Convert to Background Image Js======================*/

$(document).ready(function() {
  $('.background-image-maker').each(function() {
    var imgURL = $(this).next('.holder-image').find('img').attr('src');
    $(this).css('background-image', 'url(' + imgURL + ')');
  });
});

/*================Client Slider Js Style -1======================*/
$(document).ready(function(){
    $(".carousal-client").owlCarousel({
        items:6,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[979,3],
        itemsTablet:[768,2],
        pagination: true,
        autoPlay:true,
        pagination: false
    });
});

/*================Client Slider 2 Js Style -2======================*/
$(document).ready(function(){
    $(".carousal-client2").owlCarousel({
        items:4,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[979,4],
        itemsTablet:[768,3],
        pagination: true,
        autoPlay:true,
        pagination: false
    });
});

/*================Testimonial Slider Js Style -1======================*/

$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });
});

/*================Testimonial Slider Js Style -2======================*/
$(document).ready(function(){
    $(".testimonial-slider2").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        navigation : false,
        autoPlay:false
    });
});
/*================Carousal Slider Js======================*/
$(document).ready(function(){
    $(".carousal-slide").owlCarousel({
        items:1,
        pagination: false,
        navigation : true,
        autoPlay:false
    });
});

/*================Testimonial Slider Js Style -2======================*/
$(document).ready(function(){
    $("#owl-fullwidth").owlCarousel({
        items:1,
        pagination: false,
        navigation : true,
        autoPlay:false
    });
});

/*================Image Carousal Style -1======================*/

$(document).ready(function(){
    $("#img-carousal").owlCarousel({
        items:4,
        pagination: true,
        autoPlay:false
    });
});

/*================Carousal Fullwidth Js======================*/
$(document).ready(function(){
    $("#owl-fullwidth").owlCarousel({
        items:1,
        pagination: false,
        navigation : true,
        autoPlay:false,
    });
});

/*================Back To Top Button Js======================*/ 

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    $('.scrollup2').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

/*================Animates======================*/
new WOW().init();

/*===============Progress Bar 1===================*/   
$(document).ready(function(e) {
    $('#jqmeter-horizontal').jQMeter({goal:'$10,000',raised:'8000',width:'100%',height:'26px',bgColor:'#e1e1e1',barColor:'#1e1e1e',animationSpeed:1000,displayTotal:false});
    $('#jqmeter-horizonta2').jQMeter({goal:'$10,000',raised:'9000',width:'100%',height:'26px',bgColor:'#e1e1e1',barColor:'#1e1e1e',animationSpeed:1000,displayTotal:false});
    $('#jqmeter-horizonta3').jQMeter({goal:'$10,000',raised:'6000',width:'100%',height:'26px',bgColor:'#e1e1e1',barColor:'#fc1e4e',animationSpeed:1000,displayTotal:false});
    $('#jqmeter-horizonta4').jQMeter({goal:'$10,000',raised:'7000',width:'100%',height:'26px',bgColor:'#e1e1e1',barColor:'#494dff',animationSpeed:1000,displayTotal:false});
});

/*===============Progress Bar 2===================*/   
$('#demoprogressbar5').LineProgressbar({
    percentage: 80,
    fillBackgroundColor: '#1e1e1e',
    height: '4px'
});
$('#demoprogressbar6').LineProgressbar({
    percentage: 90,
    fillBackgroundColor: '#1e1e1e',
    height: '4px'
});
$('#demoprogressbar7').LineProgressbar({
    percentage: 60,
    fillBackgroundColor: '#fc1e4e',
    height: '4px'
});
$('#demoprogressbar8').LineProgressbar({
    percentage: 70,
    fillBackgroundColor: '#494dff',
    height: '4px'
});

/*===============Progress Bar 3===================*/ 
$(document).ready(function(){
    $('#bar1').barfiller({ barColor: '#1e1e1e' });
    $('#bar2').barfiller({ barColor: '#1e1e1e' });
    $('#bar3').barfiller({ barColor: '#fc1e4e' });
    $('#bar4').barfiller({ barColor: '#494dff', duration: 3000 });

   /*===============Same Color===================*/ 
    $('#bar9').barfiller({ barColor: '#494dff' });
    $('#bar10').barfiller({ barColor: '#494dff' });
    $('#bar11').barfiller({ barColor: '#494dff' });
    $('#bar12').barfiller({ barColor: '#494dff', duration: 3000 });
});

/*===============Progress Bar 4===================*/ 
$(document).ready(function(){
    $('#bar5').barfiller({ barColor: '#1e1e1e' });
    $('#bar6').barfiller({ barColor: '#1e1e1e' });
    $('#bar7').barfiller({ barColor: '#fc1e4e' });
    $('#bar8').barfiller({ barColor: '#494dff', duration: 3000 });
    $('#bar13').barfiller({ barColor: '#ff6c00', duration: 3000 });
});
/*===============Gallery Portfolio 1===================*/  
$(document).ready(function() {
    /* initialize shuffle plugin */
    var $grid = $('#grid6');

    $grid.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });

    /* reshuffle when user clicks a filter item */
    $('#filter6 a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter6 a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName );
    });
});   
/*===============Gallery Portfolio 2===================*/    
$(document).ready(function() {
    /* initialize shuffle plugin */
    var $grid = $('#grid5');

    $grid.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });

    /* reshuffle when user clicks a filter item */
    $('#filter5 a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter5 a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName );
    });

});
    
/*===============Gallery Portfolio 3===================*/    
$(document).ready(function() {
    /* initialize shuffle plugin */
    var $grid = $('#grid4');

    $grid.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });

    /* reshuffle when user clicks a filter item */
    $('#filter4 a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter4 a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName );
    });

});
    
/*===============Gallery Portfolio 4===================*/    
$(document).ready(function() {
    /* initialize shuffle plugin */
    var $grid = $('#grid3');

    $grid.shuffle({
        itemSelector: '.item' // the selector for the items in the grid
    });

    /* reshuffle when user clicks a filter item */
    $('#filter3 a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter3 a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName );
    });
});
/*================Fanxy Box Gallery Js======================*/
$(document).ready(function() {
    $('.fancybox').fancybox();
});

/*================revolution Slider======================*/
    var tpj=jQuery;
    var revapi490;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_490_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_490_1");
        }else{
        revapi490 = tpj("#rev_slider_490_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
            touch:{
                touchenabled:"on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            }
            ,
            arrows: {
                style:"zeus",
                enable:true,
                hide_onmobile:true,
                hide_under:600,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                }
            }
            },
            responsiveLevels:[1240,1024,778,480],
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1240,1024,778,480],
            gridheight:[880,680,580,400],
            lazyType:"none",
            parallax: {
            type:"mouse",
            origo:"slidercenter",
            speed:2000,
            levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
            type:"mouse",
            },
            shadow:0,
            spinner:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
            simplifyAll:"off",
            disableFocusListener:false,
            }
        });
    }
});/*ready*/

/*================header Fixed Scroll======================*/
$(window).on("scroll", function() {
    if($(window).scrollTop() > 0) {
        $("#header-fix").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#header-fix").removeClass("active");
    }
});

/*================Video Open Model======================*/
$("#video2").click(function() {
    $('#my-modal2').modal('show');
});
$("#video3").click(function() {
    $('#my-modal3').modal('show');
});
/*================Asidebar======================*/
$(function(){
    var body = $("body");
     $(".menu-toggle").on("click",function(){
        body.toggleClass("menu-open");
        $(".menu-toggle").toggleClass("menu-toggle-left");
        return false;
     })
});

/*================Click Open Search bar======================*/        
$(".search-bar").click(function(){
    $(".search-wrap").css("top","0");
});
$(".close-btn").click(function(){
    $(".search-wrap").css("top","-100%");
});


/*================revolution Slider 2======================*/
var tpj=jQuery;			
    var revapi1050;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_1050_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_1050_1");
        }else{
            revapi1050 = tpj("#rev_slider_1050_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                keyboardNavigation:"on",
                keyboard_direction: "vertical",
                mouseScrollNavigation:"on",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                touch:{
                touchenabled:"on",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "vertical",
                drag_block_vertical: false
                }
                ,
                bullets: {
                enable:true,
                hide_onmobile:true,
                hide_under:1024,
                style:"hephaistos",
                hide_onleave:false,
                direction:"vertical",
                h_align:"right",
                v_align:"center",
                h_offset:30,
                v_offset:0,
                space:5,
                tmp:''
                }
            },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1400,1240,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                shadow:0,
                spinner:"spinner2",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }
});/*ready*/



$(document).ready(function () {
    //Screenshoot slider
    $("#owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 3
            }
        },
        loop: true,
        center: true,
        dots: true,
        nav: false,
        autoplay: true,
        pagination: false
    });
    
    /*------ MENU Fixed ------*/
    var $window = $(window);
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".header-container");
        if ($scroll > 100) {
            $navbar.addClass("fixedmenu");
        } else {
            $navbar.removeClass("fixedmenu");
        }
    });
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navbarNav',
    offset: 60
  });

})(jQuery); // End of use strict



