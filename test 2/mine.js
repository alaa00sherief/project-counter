
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }


});


// if HTML DOM Element that contains the map is found...
if (document.getElementById('map-canvas')){
 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(52.525595,13.393085);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

};






$(document).ready(function() {
  // Start mixitup
  $('.pills-tab').mixItUp();
});

$('.single-item-rtl').slick({
  rtl: true
});
        

$(window).scroll(function(){
	
	var wScroll = $(window).scrollTop();
	var galleryOffset = $(".layer").offset().top;


	if(wScroll > galleryOffset)
		{
$(".bg-home").css("backgroundColor","rgba(0, 0, 0, 0.46)")			
		}
	else
		{
$(".bg-home").css("backgroundColor","")			
	
		}

})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

