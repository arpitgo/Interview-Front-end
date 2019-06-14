function global() {
  if ($(window).width() < 768) {
    $('.nav-menu-icon').on('click', function() {
      $('.menu, .close-menu').addClass('active');
    });
    $('.close-menu').on('click', function() {
      $('.menu, .close-menu').removeClass('active');
    });
  }
}

$(document).ready(function() {
  global();
});

$(window).resize(function() {
  global();
});
