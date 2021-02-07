$(document).ready(function () {
  $('a.type-pic-wide').fancybox({
    padding: '0',
  });
  $('.examples-card__overlay').on('click', e => {
    console.log(e.target);
    const link = e.target.querySelector('.type-pic-wide');
    link.click();
  });
});
