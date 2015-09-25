$(document).ready(function(){
	var count = $('.number').text();
	$('.like').bind('click', function(){
		
		//console.log('проверка');
		++count;
		$('.number').text(count);
		//console.log('Произошло увеличение счетчика на единицу');
		$('.like').unbind();
		//console.log('Лайкнуть можно только один раз!');
	});

	
	
});


		
		  