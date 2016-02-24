$(document).ready(function () {

    "use strict";

    // Variables

    var triggerVid;
    var launchkit_hoverGallery;


    // Disable default click on a with blank href

    $('a').click(function () {
        if ($(this).attr('href') === '#') {
            return false;
        }
    });

    // Smooth scroll to inner links

    $('.inner-link').smoothScroll({
        offset: -59,
        speed: 800
    });
    $('.inner-link2').smoothScroll({
        offset: 80,
        speed: 800
    });




    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }

    });

    if (!$('nav').hasClass('fixed') && !$('nav').hasClass('overlay')) {

        // Compensate the height of parallax element for inline nav

        if ($(window).width() > 768) {
            $('.parallax:first-child .background-image-holder').css('top', -($('nav').outerHeight(true)));
        }

        // Adjust fullscreen elements
        if ($(window).width() > 768 && ($('section.parallax:first-child, header.parallax:first-child').outerHeight() == $(window).height())) {
            $('section.parallax:first-child, header.parallax:first-child').css('height', ($(window).height() - $('nav').outerHeight(true)));
        }
    }

    // Mobile nav

    $('.mobile-toggle').click(function () {
        $(this).closest('nav').toggleClass('nav-open');
        if ($(this).closest('nav').hasClass('nav-3')) {
            $(this).toggleClass('active');
        }
    });

    // Initialize sliders

    $('.hero-slider').flexslider({
        directionNav: false
    });
    $('.slider').flexslider({
        directionNav: false
    });

    // Append .background-image-holder <img>'s as CSS backgrounds

    $('.background-image-holder').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', '50% 50%');
    });

    // Fade in background images

    setTimeout(function () {
        $('.background-image-holder').each(function () {
            $(this).addClass('fadeIn');
        });
    }, 200);


    // Hook up video controls on local video

    $('.local-video-container .play-button').click(function () {
        $(this).toggleClass('video-playing');
        $(this).closest('.local-video-container').find('.background-image-holder').toggleClass('fadeout');
        var video = $(this).closest('.local-video-container').find('video');
        if (video.get(0).paused === true) {
            video.get(0).play();
        } else {
            video.get(0).pause();
        }
    });

    $('video').bind("pause", function () {
        var that = this;
        triggerVid = setTimeout(function () {
            $(that).closest('section').find('.play-button').toggleClass('video-playing');
            $(that).closest('.local-video-container').find('.background-image-holder').toggleClass('fadeout');
            $(that).closest('.modal-video-container').find('.modal-video').toggleClass('reveal-modal');
        }, 100);
    });

    $('video').on('play', function () {
        if (typeof triggerVid === 'number') {
            clearTimeout(triggerVid);
        }
    });

    $('video').on('seeking', function () {
        if (typeof triggerVid === 'number') {
            clearTimeout(triggerVid);
        }
    });

    // Video controls for modals

    $('.modal-video-container .play-button').click(function () {
        $(this).toggleClass('video-playing');
        $(this).closest('.modal-video-container').find('.modal-video').toggleClass('reveal-modal');
        $(this).closest('.modal-video-container').find('video').get(0).play();
    });

    $('.modal-video-container .modal-video').click(function (event) {
        var culprit = event.target;
        if ($(culprit).hasClass('modal-video')) {
            $(this).find('video').get(0).pause();
        }
    });

    // Hover gallery
    $('.hover-gallery').each(function () {
        var that = $(this);
        var timerId = setInterval(function () {
            scrollHoverGallery(that);
        }, $(this).closest('.hover-gallery').attr('speed'));
        $(this).closest('.hover-gallery').attr('timerId', timerId);

        $(this).find('li').bind('hover, mouseover, mouseenter, click', function (e) {
            e.stopPropagation();
            clearInterval(timerId);
        });

    });


    $('.hover-gallery li').mouseenter(function () {
        clearInterval($(this).closest('.hover-gallery[timerId]').attr('timerId'));
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });

    if ($('#map_canvas').length > 0) {
        var mapOptions = {center: new google.maps.LatLng(-32.9396285, -60.6543727), zoom: 12, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false};
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


        var latLngMarker = new google.maps.LatLng(-32.939723, -60.652141, 17);
        var marker = new google.maps.Marker({
            position: latLngMarker,
            map: map,
            icon: 'img/pin.png',
            scrollwheel: false
        });

        google.maps.event.addListener(marker, 'click', function () {
            map.setZoom(16);
            map.setCenter(marker.getPosition());
        });

    }


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    function validatePhone(phone){
        var re = /[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}/;
        return re.test(phone);
    }



});

$(window).load(function () {

    "use strict";

    // Sticky nav

    if (!$('nav').hasClass('overlay')) {
        //$('.nav-container').css('min-height', $('.navbar').height());
    }


});
