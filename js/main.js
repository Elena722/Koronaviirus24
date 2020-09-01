
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
$(document).ready(function () {
  $(".data-renew").text("*Uuendatud: 16.04.2020, 13:35");

});