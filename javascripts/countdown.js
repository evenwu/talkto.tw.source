$('#countdown-timer').countdown('2015/11/26 00:00').on('update.countdown', function(event) {
  var totalHours = event.offset.totalDays * 24 + event.offset.hours;
  var $this = $(this).html(event.strftime(''
    + '<div class="item"><div class="number">%D</div><div class="unit">DAYS</div></div>'
    + '<div class="colon">：</div>'
    + '<div class="item"><div class="number">%H</div><div class="unit">HOURS</div></div>'
    + '<div class="colon">：</div>'
    + '<div class="item"><div class="number">%M</div><div class="unit">MINS</div></div>'
    + '<div class="colon">：</div>'
    + '<div class="item"><div class="number">%S</div><div class="unit">SECS</div></div>'
    ));
}).on('finish.countdown', function(event){

});