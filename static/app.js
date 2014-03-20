$(function() {
  // var update = function(current, target, $el) {
  //   var duration = moment.duration((target - current) / 1000, 'seconds');
  //   var text = duration.years() - 1 + ' years ';
  //   text += duration.days() + ' days ';
  //   text += duration.hours() + ' hours ';
  //   text += duration.minutes() + ' minutes ';
  //   text += duration.seconds() + ' seconds';
  //   $el.text(text);
  // }

  // var $el = $('#countdown');
  // var target = 1521417600000;

  // var current = new Date().getTime();
  // update(current, target, $el);

  // var countdown = setInterval(function() {
  //   current = new Date().getTime();
  //   update(current, target, $el);

  //   if (current >= target)
  //     clearInterval(countdown);

  // }, 1000);

  $('#countdown').countdown('2018/03/19', function(event) {
   $(this).html(event.strftime(
    '<span>%w</span> weeks '
    + '<span>%d</span> days '
    + '<span>%H</span> hours '
    + '<span>%M</span> minutes '
    + '<span>%S</span> seconds'));
  });
});
