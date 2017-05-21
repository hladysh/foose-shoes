  $(document).ready(function() {
// login refister form popap begin
// 
// 
$('.btn-login').click(function(e) {
  e.preventDefault()
  $('.login-register-popup').fadeIn(300);
  $('.overlay').fadeIn(300);
  if ( $(".nav_slide_button").hasClass("active") ){
   menuToggle();
 }
 searchClose();
});
$('.login-register-popup .close-popup, .overlay').click(function() {
  $('.overlay, .login-register-popup').fadeOut(300);
})

$(".login-register-tabs .tab-content").not(":first").hide();
$(".login-register-tabs .tab-item").click(function() {
  $(".tab-item").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab-content").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");
// login refister form popap end

//window resize action begin
$(window).resize(function(){
  $('.login-register-popup').css({
    left: ($(window).width() - $('.login-register-popup').outerWidth()) / 2 +'px',
    top: ($(window).height() - $('.login-register-popup').outerHeight()) / 2 +'px'
  });

 
  if ( $(window).width() < 641 ) {
     $('.product-page .product-item').css({float: 'none'}); 
  } else {
    $('.product-page .product-item').css({float: 'left'}); 
  }
  if ( $(window).width() < 480 ) {
    $(".search-wrap").appendTo('#nav');
  } else {
    $(".search-wrap").appendTo('.header-wrap');
  }
 //  if ( $(window).width() > 640 ) {
 //   $(".nav-list").css('display', 'block');
 // } else {
 //  $(".nav-list").css('display', 'block');
 //  $("#nav-toggle").removeClass("active");
// }
});
$(window).resize();
//window resize action end

//Menu on max-width: 640px begin
// $("#nav-toggle").click(function() {
//   $(this).toggleClass("active");
//   $('.nav-list').slideToggle();
//   $(".search-list").css('display', 'none');
//   $('.searchbox-input').removeClass('searchbox-open');
// });
$("#nav-toggle").click(function () {

  menuToggle();
  searchClose();
});

function menuToggle() {
  $("#nav-toggle").toggleClass("active");
  $('.nav-list').slideToggle();
}
//Menu on max-width: 640px end
function searchClose() {
  $(".search-list").css('display', 'none');
  $('.searchbox-input').removeClass('searchbox-open');
}
//Placeholder search begin
var $inputItem = $(".input-label");
$inputItem.length && $inputItem.each(function() {
  var $this = $(this),
  $input = $this.find(".input-item"),
  placeholderTxt = $input.attr("placeholder"),
  $placeholder;
  $input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
  $input.attr("placeholder", ""),
  $placeholder = $this.find(".placeholder"),
  $input.val().length ? $this.addClass("active") : $this.removeClass("active"),
  $input.on("focusout", function() {
    $input.val().length ? $this.addClass("active") : $this.removeClass("active");
  }).on("focus", function() {
    $this.addClass("active");
  });
});
//Placeholder search end

// header search  begin
var searchBox = $('#header-search');
var inputBox = $('.searchbox-input');
var submitIcon = $('.searchbox-icon');
var isOpen = false;
submitIcon.click(function() {
  if (isOpen == false) {
    inputBox.addClass('searchbox-open');
    if ( $(".nav_slide_button").hasClass("active") ) {
     // $("#nav-toggle").toggleClass("active");
     // $('.nav-list').slideToggle();
     menuToggle();
   } 
   $('.search-list').css('display', 'block');
   $('.item-dynamic').remove(); 
   $.getJSON('js/data.json', function(data) {
     $.each(data, function(key, value){
      $('.search-list').append('<li class="search-item item-dynamic"> '+value.category+' </li>');
    });   
   });
   inputBox.focus();
   isOpen = true;
 }
 else {
  inputBox.removeClass('searchbox-open');
  $('.search-list').css('display', 'none');
  inputBox.focusout();
  isOpen = false;
}
});



$('.searchbox-input').keyup(function() {
  buttonUp();
});

function buttonUp() {
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if (inputVal !== 0) {
    $('.searchbox-icon').css('display', 'none');
  }
  else {
    $('.searchbox-input').val('');
    $('.searchbox-icon').css('display', 'block');
  }
}

// header search end



// add search val to searsch input  begin

$('.search-list').on('click', 'li', function() {
  var click_text = $(this).text();
  $('.searchbox-input').val($.trim(click_text));
  $(".search-item").css('display', 'none');
  $('.searchbox-submit').click();
});
// add search val to searsch input  end

// slick slider begin
$(function() {
  $('.slider-top').slick({
    dots: false,
    arrows: false,
    fade: true,
    speed: 500,
    autoPlay : true,
  });
  mainGalleryThumbs.init();
});
// slick slider end

// navigation slider befin
var mainGalleryThumbs = (function() {
  var $thumbsContainer,
  $thumbs,
  $gallery,
  activeClass = 'slick-active';
  return {
    init: function() {
      $thumbsContainer = $('.navigation');
      $gallery = $('.slider-top');
      if(!$thumbsContainer.length || !$gallery.length) return;
      $thumbs = $('li', $thumbsContainer);
      $thumbsContainer.on('click', 'li', function() {
        var $this = $(this);
        $('.slider-top').slick('slickGoTo',$this.index());
      });

      $('.slider-top').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var SlideNumber = nextSlide;
        $thumbs.removeClass('slick-active');
        $thumbs.eq(SlideNumber).addClass('slick-active');
      });
    }
  }
})(); 
// navigation slider end

$('.view-greed').click(function() {
 $('.product-page .product-item').css({float: 'left'});
});
$('.view-line').click(function() {
  $('.product-page .product-item').css({float: 'none'});
});

});





