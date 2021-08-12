
$(document).ready(function () {
  // Magnific popup active
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // counter active
  $(".counterup").counterUp();

  // slick js
  $(document).ready(function () {
    $(".testimonials").slick({
      arrows:false,
      dots:true,
      autoplay: true,
      loop: true,
    });
  });
});

$(window).load(function(){

  // sticky menu

  $(window).on('scroll', function(){
    if($(this).scrollTop() > 20) {
      $('.header-area').addClass('sticky');
    } else {
       $('.header-area').removeClass('sticky');
    } 
  })

});
