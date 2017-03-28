$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var indexTab;

    // ----------------------------

    var rightColWidth;


    // ----------------------------

    getTriangleSize();

    getRightFullColWidth();

    getHeaderPosition();

    getScrollToTopBtn();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});;

        // ----------------------------------------------------------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // ----------------------------------------------------------------------------

         getTriangleSize();

         getRightFullColWidth();

         getHeaderPosition();

    });

    $(document).scroll(function() {

        getHeaderPosition();

        getScrollToTopBtn();


    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // -----------------------------------------------

    $(function() {

        indexTab = 0;

        $(".tab-nav label").each(function() {            

            if( $(".tab-radio:eq("+ indexTab +")").prop("checked") == true  ) {

                $(this).addClass("active");

            }

            indexTab++;

        });

        $(".tab-nav label").click(function() {

            if($(this).hasClass("active")) {

                return false;

            } else {

                $(".tab-nav label").removeClass("active");

                $(this).addClass("active");

            }

        });

    });

    // ------------------------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav-list").is(":hidden") ) {

                $(".respmenubtn").addClass("active");

                $(".main-nav-list").fadeIn(300);

                $(".main-nav-list").css({
                    "top": $(".header").outerHeight() + "px",
                    "height" : ( $(window).height() - $(".header").height() ) + "px"
                });

            } else if( $(".main-nav-list").is(":visible") ) {

                $(".respmenubtn").removeClass("active");

                $(".main-nav-list").fadeOut(300);

            }

        });

    });

    // ------------------------------------------------------

    $(function() {

        $(".show-tab-nav").click(function() {

            $(".show-tab-nav, .tabs-nav-col").toggleClass("show");

            // $(".tabs-nav-col").toggleClass("show");

        });

    });

    // ------------------------------------------------------

    // Navigation scroll

        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {

                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900);                        

                        return false;
                    }
                }
            });
        });

    // -----------------------------------------------

    // Show or hide ".scroll-to-top" button


    $(".scroll-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });

    // ----------------------------

    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-top").fadeIn();

        } else {

            $(".scroll-top").fadeOut();

        }

    }

    // -----------------------------------------------

    function getHeaderPosition() {

        // if( $(document).scrollTop() >= $(".header").height() ) {

        //     $(".header").addClass("fixed");

        //     $(".wrapper").css({"padding-top" : $(".header").height() + "px"});

        // } else {

        //     $(".header").removeClass("fixed");

        // }

        if(bodyWidth <= 768) {

            $(".wrapper").css({"padding-top" :  $(".header").outerHeight(true) + "px"});

        } else {

            $(".wrapper").css({"padding-top" :  0 + "px"});

        }

    }


    // -----------------------------------------------


    function getRightFullColWidth() {

        rightColWidth = $(window).width() - $(".article-two-cols .col-1").offset().left;

        $(".right-col.full-width").width(rightColWidth);

    }



    // -----------------------------------------------

    function getTriangleSize() {

        $(".shape-tr").css({
                        "border-right-width": $(".jumbotron").width() / 2 + "px",
                        "border-left-width": $(".jumbotron").width() / 2 + "px"
                    });

    }


});
