$(document).ready(function(){
  var status=0;
  $(".read").click(function(){
    $(this).prev().toggle();
    $(this).siblings('.dots').toggle();
    status++;
    if(status%2 == 1){
      $(this).addClass("rotate");
    }else{
      $(this).removeClass("rotate");
    }
  });
});