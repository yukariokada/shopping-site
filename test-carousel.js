$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});


$(document).ready(function(){
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});