(function ($) {
    "use strict";

      /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    
    
    // Initiate the wowjs
    new WOW().init();



    })
    
})(jQuery);

