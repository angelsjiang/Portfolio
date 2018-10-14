$(document).ready( function() {
    $("#explore").hover( function() {
        
        $("#photo").attr("src", "./assets/images/bg/bg-sample4.jpg");
        console.log("changed!");
    }, function() {
        $("#photo").attr("src", "./assets/images/bg/bg-sample3.jpg");
    });

    $(".button").on("click","#explore", function() {

    });

    

})