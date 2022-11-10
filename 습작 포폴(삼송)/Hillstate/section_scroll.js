$(function(){
    $(window).load(function(){
        $(".s_r_con").css({
            "margin-left":"0",
            "opacity":"1"
        });
    });

    $(".s_r_con").hover(function(){
        $(".s_r_txt")
            .addClass("on");
        $(".s_r_title")
            .addClass("on");
        $("h2")
            .addClass("on");
            
        $(".btn").css({
            "right":"0"
        });

    }, function(){
        $(".s_r_txt")
            .removeClass("on");
        $(".s_r_title")
            .removeClass("on");
        $("h2")
            .removeClass("on");

        $(".btn").css({
            "right":"-120px"
        });
    });

//     var a = $(".s_r_con");

//     $(".s_r_con").mouseover(function() {

//          if($(".s_r_con").is(':animated'))

//          {

//             $(".s_r_title").stop().animate({

//                opacity:"1",

//                Transform:"translate(50px)"

//             }, 1000);

//             $("h2").stop().animate({

//                 opacity:"1",
 
//                 top:"60px"
 
//              }, 1300);

//              $(".s_r_txt").stop().animate({

//                 opacity:"1",
 
//                 top:"115px"
 
//              }, 1600);

//              $(".btn").stop().css({
//                 right:"-120px"
//              });

//          }

//    });

//       $(".s_r_con").mouseout(function() {

//     //   $(".s_r_title, h2, .s_r_txt").animate({

//     //      backgroundColor: "#fff",

//     //      color : "#000"

//     //   });

//     $(".s_r_title").stop().animate({

//         opacity:"1",

//         top:"100px"

//      });

//      $("h2").stop().animate({

//          opacity:"1",

//          top:"150px"

//       });

//       $(".s_r_txt").stop().animate({

//          opacity:"1",

//          top:"220px"

//       });

//       $(".btn").css({
//          right:"0"
//       });

//    });

    // $(".s_r_con").animate({
    //     scrollTop:300
    // }, 500);
});