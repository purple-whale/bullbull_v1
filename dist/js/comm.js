$(function () {

  // scroollUp
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '페이지 위로 이동', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // 스크롤시 위에서 아래로 나타나기
  $(window).scroll(function () {
    $('.ani-slide-down').each(function () {

      let pos = $(this).offset().top,
        winscroll = $(window).scrollTop()

      if (winscroll + 600 > pos) {
        $(this).addClass('ani-down')
      }

    });
  });
  
  // 스크롤시 좌측에서 나타나기
  $(window).scroll(function () {
    $('.ani-slide-left').each(function () {

      let pos = $(this).offset().top,
        winscroll = $(window).scrollTop()

      if (winscroll + 600 > pos) {
        $(this).addClass('ani-left')
      }

    });
  });
  
  // includeHTML
  includeHTML()

  // skroller
  var s = skrollr.init();

  // prize
  $('.lst-prize').each(function () {

    let num = 0

    $(this).find('li').eq(num).addClass('on')
    $(this).find('.col-img img').attr({
      'src': './images/img-jackpots' + num + '.gif'
    })

    $(this).find('li').click(function () {

      $('.lst-prize').find('li').removeClass('on')

      let index = $('.lst-prize li').index(this)

      $('.lst-prize li').eq(index).addClass('on')
      $('.col-img img').attr({
        'src': './images/img-jackpots' + index + '.gif'
      });
    });

  });

  // conunter
  $(".counter").countimator();

});
