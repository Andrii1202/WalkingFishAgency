$(document).ready(function() {
    var $horizontal = $('#fish');
    var $new = $horizontal.offset().left + 185;

    $(window).scroll(function() {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));
        var position = (scrollPercent * ($(document).width() - $horizontal.width()));
        $horizontal.css({
            'left': $new - position * 7
        });
    });
});