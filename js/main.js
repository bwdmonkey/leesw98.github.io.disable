$(document).ready(function() {

  $('a.blog-button').click(function() {
    if (location.hash && location.hash == "#blog") return;
    panelOpen();
  });

  $('a.resume-btn').click(() => {
    panelClose();
    downloadResume();
  });

  if (location.hash && location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(() => iconBounceAnimation(true));
  $('.navigation-wrapper .blog-button').click(() => iconBounceAnimation());
});

function iconBounceAnimation(isMobile) {
  if ($('.navigation-wrapper').css('display') == "block") {
    $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
      $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
    });
    $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
  } else if (isMobile) {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
  }
  $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
}

function panelOpen() {
  if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
  $('.main-post-list').removeClass('hidden');
  var currentWidth = $('.panel-cover').width();
  if (currentWidth < 960) {
    $('.panel-cover').addClass('panel-cover--collapsed');
  } else {
    $('.panel-cover').css('max-width',currentWidth);
    $('.panel-cover').animate({'max-width': '700px', 'width': '30%'}, 400, swing = 'swing', function() {} );
  }
}

function panelClose() {
  if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
    $('.panel-cover').removeClass('panel-cover--collapsed');
  }
  if (!$('.main-post-list').hasClass('hidden')) {
    $('.main-post-list').addClass('hidden');
    $('.panel-cover').animate({'max-width': window.innerWidth + 'px', 'width': '100%'}, 300, swing = 'swing', function() {} );
  }
}

function downloadResume() {
  // TODO: Probably will end up using Jekyll route pathing.
}
