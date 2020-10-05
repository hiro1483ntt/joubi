$(function() {
   $('.menu').on('inview', function(event, isInView) {
     if (isInView) {
       $(this).addClass('action');
     }
   });
 });

 $(function() {
    $('#copy').on('inview', function(event, isInView) {
      if (isInView) {
        $(this).addClass('action');
      }
    });
  });
  $(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});
