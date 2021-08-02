$(document).ready(function () {
  if (window.location.hash) {
    const target = $(`${window.location.hash}`);

    if (target && target.offset()) {
      $('html,body')
        .stop()
        .animate({ scrollTop: target.offset().top - 60 }, 1000);
    }
  }

  $('a.type-pic-wide').fancybox({
    padding: '0',
  });
  $('.examples-card').on('click', e => {
    const link = e.target.querySelector('.type-pic-wide');

    if (link) link.click();
  });
  $('.scroll-to').on('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    $('html,body')
      .stop()
      .animate({ scrollTop: $(`${id}`).offset().top - 60 }, 1000);
  });

  $('#header-menu').on('click', () => {
    $('.header__nav_mobile').toggleClass('header__nav_mobile_visible');
  });

  $('.nav__item').on('click', function () {
    $('.header__nav_mobile').removeClass('header__nav_mobile_visible');
  });

  $('.anchor').on('click', function (e) {
    e.preventDefault();
  });

  $('#back-to-form').on('click', function () {
    $('.response__callback').removeClass('response__callback_finished');
  });

  $('#phone').mask('+375-99-999-99-99');

  $('.intro__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('#form-callback').on('submit', e => {
    e.preventDefault();
    gtag('event', 'formsent', {
      'event_category': 'form',
      'event_action': 'formsent',
    });
    const msg = $(e.target).serialize();

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: msg,
      success: function () {
        $('.response__callback').addClass('response__callback_finished');
      },
      error: function (e) {
        alert(e.message);
      },
    });
  });
});
