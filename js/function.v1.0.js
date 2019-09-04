(function() {
    var mobMenu = document.getElementById('mobile-menu');
    var contactBtn = document.getElementById('contactBtn');
    var menuBlock = document.getElementById('menuBlock');

    mobMenu.addEventListener('click', function() {
        console.log("Work1111");
        document.getElementById('menuBlock').classList.toggle('activeMenu');
    });
    contactBtn.addEventListener('click', function() {
        var contantForm = document.getElementById('contantForm').classList.toggle('activeForm');
    });
    // menuBlock.addEventListener('click', function() {
    //     console.log("Work2222");
    //     document.getElementById('menuBlock').classList.toggle('activeMenu');
    // });

}());