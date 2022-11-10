$(function () {
    var n = 0;
    var title = 0;

    $("#btn").click(function () {
        $(".menu").animate({
            marginRight: "0"
        }, 700);

        $(".menu li").css({
            "margin-left": "0",
            "opacity": "1"
        });
    });

    $("#btn2").click(function () {
        $(".menu").animate({ 
            marginRight: "-650px"
        }, 700);
    });


    $(".h_left_img img").css({
        "transition-delay": "0.2s",
        "opacity": "1"
    });

    setTimeout(function () {
        $(".logo .black_bar").css({
            "width": "100%",
            "transition": "0.8s"
        });

        $(".h_title .black_bar").css({
            "width": "302px",
            "transition": "0.8s"
        });
    }, 1500);

    setTimeout(function () {
        $(".logo img").css({
            "opacity": "1",
            "margin-left": "0"
        });
    }, 2000);

    setTimeout(function () {
        $("h1").css({
            "opacity": "1",
            "margin-left": "50px"
        });

        $(".h_txt").css({
            "opacity": "1",
            "margin-left": "50px"
        });
    }, 2200);

    setTimeout(function () {
        $(".s_r_content").css({
            "margin-left": "0"
        });
    }, 1000);


    setTimeout(function () {
        title = setInterval(function () {
            n = Math.floor(Math.random() * 11);
            if ($(".delay" + n).css("opacity") == 0) {
                $(".delay" + n)
                    .css("opacity", "1");
            }
            else {
                n = Math.floor(Math.random() * 10);
                $(".delay" + n)
                    .css("opacity", "1");
            }

            setTimeout(function () {
                clearInterval(title);
            }, 5000)
        }, 75)
    }, 1000);

    
});