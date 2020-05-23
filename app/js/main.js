$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead'
      });

      $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
      });
      
      $('.serf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-map'
      });
      $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf-slider',
        focusOnSelect: true
      });
      $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt=""></img>',
      });
      $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt=""></img>',
      });

      $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
      $('.quantity').each(function() {
        var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');
  
        btnUp.click(function() {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });   
  
        btnDown.click(function() {
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
  
        $('.quantity-button').on('click', function(){
          let summ = $('.night').val() * $('.summ').data('night') + ($('.guests').val() - 1) * $('.summ').data('guests');
          $('.summ').html('$' + summ);
        })

        let summ = $('.night').val() * $('.summ').data('night') + ($('.guests').val() - 1) * $('.summ').data('guests');
       
        $('.summ').html('$' + summ);

      });

      $('.surfboard-box__circle').on('click', function(){
        $(this).toggleClass('active')
    });

});