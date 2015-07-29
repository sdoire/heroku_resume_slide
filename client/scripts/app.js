$(document).ready(function(){
    $("body").on('click', '#button', function(){
        $(this).hide();
        $("#container").slideDown();
        });

    $("body").on('click', '#container', function(){
        $(this).slideUp();
        $('#button').show();
    });
});