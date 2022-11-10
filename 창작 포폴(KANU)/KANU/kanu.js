$(function () {

    // $(window).scroll(function(){
    //     $("#main ul").addClass("on");
    //     $("#main > ul > li").css({"color":"#000"});
    // }, function(){
    //     $("#main ul").removeClass("on");
    // });

    // $(window).scroll(function(){
    //     console.log(hello);
    // });

    
    var i = 0;

    var timerId = setInterval(function(){
        
        if(i < 5) {
            i = i + 1;

            setTimeout(function(){
                // $(".m_t_aro").css({
                //     "left": "0px",
                //     "opacity": "1"
                // });
                $(".mt_img1").css({
                    "opacity": "1"
                });
            }, 5000);

            
        
        }
        else {
            i = 0;
            clearTimeout(function(){
            $(".mt_img1").css({
                "opacity": "1"
            });
        }, 5500);
            
        }
        i++;
            // clearTimeout();
            clearInterval();
    });
    // $(".m_t_aro").fadeOut(18000);
    // $("#mt_img").fadeOut(54000); 
});