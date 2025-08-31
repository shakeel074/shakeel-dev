$(document).ready(function () {
    // OnScroll Changing Width
    const withChanged = () => {
        var scroll = $(window).scrollTop();
        var width = $(window).width();
        if (width > 900) {
            if (scroll >= 40) {
                $("body").addClass("scrolled");
            } else {
                $("body").removeClass("scrolled");
            }
        }
    }
    withChanged();
    $(window).scroll(function () {
        withChanged();
    });


    /* ------------------ */

    
    // Progress Bar
    const progressbar = () => {
        let skillsLen = $('.skills').children('.skills__box').length;

        for (var i = 1; i <= skillsLen; i++) {
            let progress = $('.skills').children('.skills__box:nth-child(' + i + ')').find('.progress');
            let progressWidth = $(progress).attr('data-value') + "%";

            setTimeout(function () {
                $(progress).css({ "width": progressWidth });
                let progressSpan = $(progress).parents('.skills__box').find('.progress_percent');
                $(progressSpan).html(progressWidth).css({ "left": "calc(" + progressWidth + " - (43px / 2) )" });
                // console.log(progressWidth);
            }, 1000);
        }
    }
    progressbar();

    const progressbarSetForIntial = () => {
        $('.progress').css({ "width": "0%" });
        $('.progress_percent').empty().css({ "left": "0%" });
    }



    /* ------------------ */


    // Tabs
    $('.tabs ul li').click(function (e) {
        e.preventDefault();
        $('.tabs ul li').removeClass('active');
        let tabActiveHref = $(this).addClass('active').find('a').attr('href').slice(1);
        $('.tabs__content').find('.tabs__item').removeClass('active');
        $('.tabs__content').find('#' + tabActiveHref).addClass('active');

        progressbarSetForIntial();
        progressbar();
    });


    /* ------------------ */


    // BottomtoTop
    const scrollFunction = () => {
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            $("#toTop").css({ "display": "block" });
        } else {
            $("#toTop").css({ "display": "none" });
        }
    }
    $(window).scroll(function () {
        scrollFunction()
    });



    /* ------------------ */



    // Collapsible Menubar
    const NavToggle = () => {
        if ($('.portfolio .menu').hasClass('menu--active')) {
            $('.overlay').addClass('overlay--active');
            let navchild = $('.overlay--active nav ul');
            let navchildLen = $(navchild).children('li').length;

            let startMs = 500;
            for (var i = 1; i <= navchildLen; i++) {
                startMs = startMs + 200;
                $(navchild).children('li:nth-child(' + i + ')').css({ "transition-delay": startMs + 'ms' });
            }
        } else {
            $('.overlay').removeClass('overlay--active');
        }
    }


    // Open Navbar
    $('.portfolio .menu').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('menu--active');

        // MenuBar Toggle
        NavToggle();
    });


    // Close Navbar
    $('.closer').click(function (e) {
        e.preventDefault();
        $('.menu').removeClass('menu--active');

        // MenuBar Toggle
        NavToggle();
    });


    // Close Navbar
    $('.navbar-menu nav ul li a').click(function () {
        $('.menu').removeClass('menu--active');

        NavToggle();
    });


    /* ------------------ */

    $(".project__img").hover(function () {
        let imgSlideHt = $(this).find('img').height();
        $(this).find('img').css({ "transform": "translateY(-" + ((+imgSlideHt) - (+ 300)) + "px)" });
    }, function () {
        $(this).find('img').css({ "transform": "translateY(0px)" })
    });



    $(".portfolio__download").on('click', function (e) {
        e.preventDefault();
        let url = $(this).attr("href");
        window.open(url, '_blank');
    });



    /* ------------------ */

    // let owl = document.querySelector('.portfolio__projects .owl-carousel');
    // let owl_class_check = owl.classList.contains('');

    $('.portfolio__projects .owl-carousel').each(function () {

        let owl_class_check = $(this).hasClass('autoplay-false');

        $(this).owlCarousel({
            center: false,
            autoplay: owl_class_check ? false : true,
            items: 2,
            loop: true,
            dots: false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                }
            }
        });
    });


    $('.single-slide.owl-carousel').owlCarousel({
        loop: false,
        autoplay: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1
    });


}); 