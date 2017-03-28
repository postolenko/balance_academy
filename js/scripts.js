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

    // getHeaderPosition();

    getScrollToTopBtn();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});;

        // ----------------------------------------------------------------------------

         getTriangleSize();

         getRightFullColWidth();

    });

    $(document).scroll(function() {

        // getHeaderPosition();

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

    // function getHeaderPosition() {

    //     if( $(document).scrollTop() >= $(".header").height() ) {

    //         $(".header").addClass("fixed");

    //         $(".wrapper").css({"padding-top" : $(".header").height() + "px"});

    //     } else {

    //         $(".header").removeClass("fixed");

    //     }

    // }


    // -----------------------------------------------


    function getRightFullColWidth() {

        rightColWidth = $(window).width() - $(".article-two-cols .col-2").offset().left;

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
