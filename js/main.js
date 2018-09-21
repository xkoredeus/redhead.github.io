$('.mobile-reviews__slider').slick({
  dots: false,
  infinite: false,
  speed: 800,
  autoplay: false,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	nextArrow: '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>',
	prevArrow: '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});





$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',



		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});




$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 200 // don't foget to change the duration also in CSS
		}
	});

});

// Галлерея кнопка

$('#show-more-1').click(function() {
$('#gallery-2').fadeIn();
$(this).hide();
});

$('#show-more-2').click(function() {
$('#gallery-3').fadeIn();
$(this).hide();
// $('show-more-3').hide();
});

//Карта кнопка

$('#show-yandex-map-button').click(function() {
$('#show-yandex-map').fadeIn();
$(this).hide();
});



// Мобильный слайдер галлерея 

 $('.mobile-gallery__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  	nextArrow: '<i class="fa fa-angle-right fa-4x" aria-hidden="true"></i>',
	prevArrow: '<i class="fa fa-angle-left fa-4x" aria-hidden="true"></i>',
  fade: true,
  infinite: true,
  asNavFor: '.mobile-gallery__slider-preview'
});
$('.mobile-gallery__slider-preview').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.mobile-gallery__slider',
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: '15px',
  focusOnSelect: true
});

// $('.center').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   nextArrow: '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>',
// 	prevArrow: '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// $(window).scroll(function() {
// 	$('h2').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+400) {
// 				$(this).addClass('fadeIn');
// 			}
// 	})

//ФОРМА ОБРАТНОЙ СВЯЗИ

$(document).ready(function(){
            $('#send').click(function(){
                // собираем данные с формы
                var name    = $('#name').val();
                var email   = $('#email').val();
                var phone   = $('#phone').val();
                // отправляем данные
                $.ajax({
                    url: "action.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "name":    name,
                        "email":   email,
                        "phone": phone
                    },
                    // после получения ответа сервера
                    success: function(data){
                        $('.messages').html(data.result); // выводим ответ сервера
                    }
                });
                return false;
            });
        });

 jQuery(function($){
$("#phone").mask("+7(999) 999-9999");
 });


