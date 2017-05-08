  $(document).ready(function() {


    $('.btn-login').click(function(e) {
      e.preventDefault()
      $('.login-register-popup').fadeIn(300);
      $('.overlay').fadeIn(300);
    })
    $('.login-register-popup .close-popup, .overlay').click(function() {
      $('.overlay, .login-register-popup').fadeOut(300);
    })

    $(".login-register-tabs .tab-content").not(":first").hide();
    $(".login-register-tabs .tab-item").click(function() {
      $(".tab-item").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab-content").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");

    $(window).resize(function(){
      $('.login-register-popup').css({
        left: ($(window).width() - $('.login-register-popup').width()) / 2 + 'px', 
        top: ($(window).height() - $('.login-register-popup').height()) / 2 + 'px' 
      });
    });
    $(window).resize();

//Placeholder begin
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
//Placeholder end
var searchBox = $('#header-search');
var inputBox = $('.searchbox-input');
var submitIcon = $('.searchbox-icon');
var isOpen = false;
submitIcon.click(function() {
  if (isOpen == false) {
    inputBox.addClass('searchbox-open');
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
    // submitIcon.mouseup(function() {
    //   return false;
    // });
    // searchBox.mouseup(function() {
    //   return false;
    // });


    $('.search-list').on('click', 'li', function() {
      var click_text = $(this).text();
      $('.searchbox-input').val($.trim(click_text));
      $(".search-item").css('display', 'none');
      $('.searchbox-submit').click();
    });



    $(function() {
      $('.slider-top').slick({
        dots: false,
        arrows: false,
        speed: 500,
        fade: true,
        autoPlay : true

      // slidesToShow: 1,
      // adaptiveHeight: true
    });
      mainGalleryThumbs.init();
    });

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



