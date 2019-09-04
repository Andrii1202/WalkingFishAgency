$('#mobile-menu').on('click', function() {
    $('#mobile-menu span:nth-child(1)').toggleClass('first');
    $('#mobile-menu span:nth-child(2)').toggleClass('middle');
    $('#mobile-menu span:nth-child(3)').toggleClass('last');
});

// $('#menuBlock').on('click', function() {
//     $('#mobile-menu span:nth-child(1)').toggleClass('first');
//     $('#mobile-menu span:nth-child(2)').toggleClass('middle');
//     $('#mobile-menu span:nth-child(3)').toggleClass('last');
// });