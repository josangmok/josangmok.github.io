$(function () {

  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
  })
})

$('.main_slider').on('init reinitafterChange', function()
{ var here = $('.slick-current');
  here.addClass('on').siblings().removeClass('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
})
