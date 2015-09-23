$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('.to-top').fadeIn(300);
		} else {
			$('.to-top').fadeOut(300);
		}
	});
	$('.to-top').click(function(){
		$('body, html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	$('#catalog-view').on('change', function(){
		//console.log('смена селекта');
		var
			$this = $(this),
			list  = $('.catalog-goods-list'),
			view  = $this.val();
			if (view === 'grid') {
				list.addClass('catalog-goods-list--grid');
			}

			if (view === 'lines') {
				list.removeClass('catalog-goods-list--grid');
			}
	});

	/*$('.catalog-menu__link').on('click', function(e){
	    e.preventDefault();
	    /*$(this).addClass('active-link');


		var
			$this = $(this),
			item = $this.closest('.catalog-menu__item'),
			items = $this.closest('.catalog-menu'),
			content = item.find('.catalog-menu__item-list'),
			duration = 300;
			link = $('.catalog-menu__link');

		if (!item.hasClass('active')) {
			item.addClass('active');

			items.find('.catalog-menu__item-list').slideUp(duration);
			content.stop(true, true).slideDown(duration);



		} else {
			item.removeClass('active');
			content.stop(true, true).slideUp(duration);
		}

	});*/

	
  /*(function() {
	var accordeon;

	accordeon = (function() {
		var accordeonClose, accordeonOpen;
		accordeonOpen = function(container) {
			return container.addClass('active').find('.catalog-menu__item-list').slideDown().end().siblings().removeClass('active').find('.accordeon__inner-list').slideUp();
		};
		accordeonClose = function(container) {
			return container.removeClass('active').find('.catalog-menu__item-list').slideUp();
		};

		return {
			init: function() {
				return $('.catalog-menu__link').on('click', function(e) {
					var $this, container;
					e.preventDefault();
					$this = $(this);
					container = $this.closest('.catalog-menu__item');
					if (!container.hasClass('active')) {
						return accordeonOpen(container);
					} else {
						return accordeonClose(container);
					}
				});
			}
		};
	})();

	$(document).ready(function() {

		if ($('.catalog-menu__link').length) {
			return accordeon.init();
		}

	});

}).call(this);*/

		
});

$(document).ready(function() {

			// Store variables
			
			var accordion_head = $('.catalog-menu__link'),
				accordion_body = $('.catalog-menu__item-list');

			// Open the first tab on load

			accordion_head.first().addClass('active').next().slideDown('normal');

			// Click function

			accordion_head.on('click', function(event) {

				// Disable header links
				
				event.preventDefault();
                                if ($(this).attr('class') == 'active'){
                                    accordion_body.slideUp('normal')
                                    $(this).removeClass('active');
                                    return false;

                                }

				// Show and hide the tabs on click

				if ($(this).attr('class') != 'active'){
					accordion_body.slideUp('normal');
					$(this).next().stop(true,true).slideToggle('normal');
					accordion_head.removeClass('active');
					$(this).addClass('active');
				}

			});

		});
