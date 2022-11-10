$(function(){
    $("header").hover(function(){
        $(this).css({
            "opacity":"1",
            "height":"300px",
            "border-bottom-color":"gray",
            "background":"white"
        });
    },function(){
        $(this).css({
            "opacity":"",
            "height":"90px",
            "border-bottom-color":"transparent",
            "background":"transparent"
        });
    });

    $("#headerwrap > ul > li > a").click(function(){
        $("#headerwrap > ul > li > a").removeClass("on");
        $(this).addClass("on");
    });
});