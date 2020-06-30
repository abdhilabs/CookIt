//sidebar
$(document).ready(function(){
    $('.open-sidebar').click(function(){
        $('.sidebar').animate({ 
            width:"250px"
        });
    });
    $('.close-sidebar').click(function(){
        $('.sidebar').animate({
            width:"0px"
        });
    });
    
});

//page scroll 
 $('.page-scroll').on('click', function(e){
            var tujuan = $(this).attr('href');

            var elemenTujuan = $(tujuan);

            $('html').animate({
                scrollTop: elemenTujuan.offset().top -100
            }, 100);

            e.preventDefault();
});