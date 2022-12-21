$(document).ready(function(){ 
  $('.slider-gallary').slick({ 
      arrows: false, 
  dots: false, 
  adapptiveHeight: true, 
  slidesToShow: 1, 
  slidesToScroll: 1, 
    speed: 2000, 
   fade: true,  
  easing: "ease-in", 
  infinite: true, 
  autoplay: true, 
  autoplaySpeed: 3000, 
  pauseOnFocus: true, 
  pauseOnHover: true 
  }); 
});