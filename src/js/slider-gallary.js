$(document).ready(function(){ 
  $('.slider').slick({ 
      arrows: false, 
  dots: false, 
  adapptiveHeight: true, 
  slidesToShow: 1, 
  slidesToScroll: 1, 
    speed: 2000, 
   fade: true,  
  easing: "linear", 
  infinite: true, 
  autoplay: true, 
  autoplaySpeed: 1000, 
  pauseOnFocus: true, 
  pauseOnHover: true 
  }); 
});