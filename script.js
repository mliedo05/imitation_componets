$(document).ready(function(){
    $('.close').click(function () {
        $('div.alert').fadeOut();
    });

    $('#first-btn').click(function (){
        $('#collapseExample').slideToggle(200);
    });

    /* $("#headingOne").click(function(){
        $("#collapseOne").toggle("slow")
        $("#collapseTwo").slideUp("slow")
        $("#collapseThree").slideUp("slow")
    });
    $("#headingTwo").click(function(){
        $("#collapseTwo").toggle("slow")
        $("#collapseOne").slideUp("slow")
        $("#collapseThree").slideUp("slow")
    });
    
    $("#headingThree").click(function(){
        $("#collapseThree").toggle("slow")
        $("#collapseTwo").slideUp("slow")
        $("#collapseOne").slideUp("slow")
    }); */

    $('.collapsed').click(function (){
        let target = $($(this).data("target"));
        if (target.is(":visible")){
            target.slideUp();
        } else {
            $(".collapse").slideUp();
            target.slideToggle("slow")
        }
    });
});