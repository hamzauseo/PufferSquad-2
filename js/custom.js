$(function () {
    $(document).ready(function () {
        // blank href
        $('[href="#"]').attr("href", "javascript:;");
        //*****************************
        // Match Height Functions
        //*****************************
        $('.matchheight').matchHeight();
    });

    $('.vidbutton').click(function () {
        myVideo = $(this).next().get(0);
        var ppbutton = $(this);
        if (myVideo.paused) {
            myVideo.play();
            this.style.opacity = '.1';
            this.innerHTML = "<i class='fa fa-pause'></i>";
        }
        else {
            myVideo.pause();
            this.style.opacity = '1';
            this.innerHTML = "<i class='fa fa-play'></i>";

        }
        $(videoplayer).on('ended', function () {
            // this.load();
            $(videoplayer).prev().css('opacity', '1');
            $(videoplayer).prev().html('<i class="fa fa-play"></i>');

        });

    });

    $('.our-team-slider').slick({

        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2500,
        infinite: true,
        slidesToShow: 3,
        fade: false,
        slidesToScroll: 1,
        speed: 600,
        centerMode: false,
        centerPadding: 40,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: false,
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    dots: false,
                    draggable: true,
                    swipe: true,
                    slidesToShow: 2,
                }
            }
        ]

    });
    $(".loading-bar").slick({
        centerMode: false,
        // centerPadding: "80px",
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        focusOnSelect: true,
        asNavFor: ".labels",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: false,
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                    verticalReverse: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: false,
                    draggable: true,
                    swipe: true,
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                    verticalReverse: true,
                }
            }
        ]
    });

    $(".labels").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,

        fade: false,
        draggable: false,
        asNavFor: ".loading-bar",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    draggable: false,
                    swipe: false,
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                    verticalReverse: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    dots: false,
                    draggable: true,
                    swipe: true,
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                    verticalReverse: true,
                }
            }
        ]
    });
     //*****************************
    // Responsive Slider
    //*****************************
    var tabrespsliders = {
        1: { slider: '.difference-slider' }
    };

    //*****************************
    // Responsive Slider
    //*****************************
    var respsliders = {
        1: { slider: '.res-slider' }

    };
    //*****************************
    // Function for Responsive Slider 991
    //*****************************

    $.each(tabrespsliders, function () {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            slidesToShow: 2,
            settings: "unslick",
            responsive: [
                {
                    breakpoint: 2000,
                    settings: "unslick"
                },
                {
                    breakpoint: 991,
                    settings: {
                        unslick: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        unslick: true
                    }
                }
            ]
        });
    });


    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function () {

        $(this.slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                    breakpoint: 2000,
                    settings: "unslick"
                },
                 
                {
                    breakpoint: 1000,
                    settings: {
                        unslick: true,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true,
                        slidesToShow: 2,
                    }
                }
            ]
        });
    });



});