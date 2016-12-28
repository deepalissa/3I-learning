/**
 * @file
 * Js for adjusting page scroll.
 */

jQuery(function ($){
        // Scroll body to 0px on click.
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
});
