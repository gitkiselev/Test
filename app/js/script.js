$(document).ready(function(){
	var current = $('.number .current');
	var next = $('.number .next');
	var height = current.height();
	$('.number').css('height', height);
	
	var duration = 3000;
	var delay = 100;
	var counter = parseInt($('.current').text());

	$('.like__icon').bind('click', function(){
		console.log('Вы поставили лайк');
		current.text(counter).css('margin-top', 0);
		counter = (counter + 1);
		next.text(counter).css('margin-top', height);
		current.animate({'margin-top': (-height) + 'px'}, duration);
		next.animate({'margin-top': 0}, duration);
		$('.like__icon').unbind();
		console.log('больше нельзя!');
	});
	$('.sorting__wrapper').on('click', '.sorting__btn', function(){
		
		console.log('кликнули по ссылке');
    	$('.sorting__wrapper .sorting__btn').removeClass('sorting__btn--active'); //удаляем класс во всех вкладках

		$(this).addClass('sorting__btn--active');//добавляем класс текущей (нажатой)

	});
});


		
		  