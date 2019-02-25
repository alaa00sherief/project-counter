$(".icon").click(function(){
    $("#aside").fadeIn(1000 ,0.5),
    function(){
    	$("#aside").fadeIn(1000 ,0.5)
    }
	
})
var aside = document.querySelector("#aside");

var close = document.querySelector("#close");

    close.addEventListener("click",function(){
               aside.style.display="none";

});




$("a").click(function(){


	var aHref = $(this).attr("href");
	$(this).css()
	var sectionOffset = $(aHref).offset().top;
	$("body").animate({scrollTop:sectionOffset},2000)
	

})


$(document).ready(function()
{
                  
      $("#singer div:first").css("display","block");
    $("#singer h3").click(function(){
        
        $(this).next().slideToggle(500);
         $("#singer div").not($(this).next()).slideUp(500);
        
    });               
               
});


function countdown(){
				var now = new Date();
				var eventDate = new Date(2019, 1, 29);

				var currentTime = now.getTime();
				var eventTime = eventDate.getTime();

				var Times = eventTime - currentTime;

				var s = Math.floor(Times / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24)-30;

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";
				document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";

				document.getElementById("hours").innerHTML ="<h3>"+  h + " h"+"</h3>";
				document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
				document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

				setTimeout(countdown, 1000);
			}

			countdown();

var  $count = document.getElementById("count"),
     $textarea = document.getElementById('text'),
     $maxLength = $textarea.getAttribute('maxLength');

     $textarea.oninput = function(){
     	$count.innerHTML = $maxLength - this.value.length;
     	
     }
