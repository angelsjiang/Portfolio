$(document).ready( function() {
    $("#explore").hover( function() {
        
        $("#photo").attr("src", "./assets/images/bg/bg-sample4.jpg");
        console.log("changed!");
    }, function() {
        $("#photo").attr("src", "./assets/images/bg/bg-sample3.jpg");
    });

    $(".button").on("click","#explore", function() {

    });

    // for popup in the in
    $('.ui.icon.button.activating.element')
        .popup({
            on: "hover"
        });

    $('.far.fa-envelope-open')
        .popup({
            on: "hover"
        });
    
    $('.fas.fa-mobile-alt')
    .popup({
        on: "hover"
    });

    $('.fab.fa-linkedin')
    .popup({
        on: "hover"
    });

    $('.fab.fa-github-square')
    .popup({
        on: "hover"
    });

})