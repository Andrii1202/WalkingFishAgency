$(document).ready(function() {
    var tmpActive = "";
    $("a[href*=#]").on("click", function(e) {
        var anchor = $(this);
        if (!($(this).hasClass("active") && anchor == tmpActive)) {
            $(this).toggleClass('active');
            $(tmpActive).removeClass('active');
        }
        tmpActive = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        console.log($(anchor.attr('href')));
        e.preventDefault();
        return false;
    });


});