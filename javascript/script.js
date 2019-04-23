$(document).ready(function()
 {
	
	
	$(".js--nav-icon").on("click",function()
	{
		
		var nav=$('.nav-items');
		var icon=$('.js--nav-icon i');
		
		nav.toggleClass("showing");
		if(icon.hasClass('ion-navicon-round'))
			{
				icon.addClass('ion-close-round');
				icon.removeClass('ion-navicon-round');
				
				
				
			}
		else
			{
				icon.addClass('ion-navicon-round');
				icon.removeClass('ion-close-round');
			
				
				
			}
	
    
		
		
	});
	 $(".list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.tactive').removeClass("tactive");
        $(this).addClass("tactive");
        var index = $(this).index();
        $(".tab>.tab-content").removeClass("tactive");
        $(".tab>.tab-content").eq(index).addClass("tactive");
    });
	
	/******************** count-down ********************/
	function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock('large-count-down', deadline);
var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock('large-count-down2', deadline);
var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock('large-count-down3', deadline);
var deadline = new Date(Date.parse(new Date()) + 4 * 24 * 60 * 60 * 1000);
initializeClock('large-count-down4', deadline);
var deadline = new Date(Date.parse(new Date()) + 4 * 24 * 60 * 60 * 1000);
initializeClock('large-count-down5', deadline);
var deadline = new Date(Date.parse(new Date()) + 4 * 24 * 60 * 60 * 1000);
initializeClock('large-count-down6', deadline);
	var deadline = new Date(Date.parse(new Date()) + 4 * 24 * 60 * 60 * 1000);
initializeClock('large-count-down7', deadline);
 
		
    });
	
	


	
	
	
	
	
	
	
