$(document).ready(function(){
	/*var count = $('.number').text();
	$('.like').bind('click', function(){
		
		//console.log('проверка');
		++count;
		$('.number').text(count);
		//console.log('Произошло увеличение счетчика на единицу');
		$('.like').unbind();
		//console.log('Лайкнуть можно только один раз!');
	});*/
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
	
});

(function($){
    /*
        Function: initCounter

        Initializes the scrolling counter using the value currently displayed in the element.

        Parameters:

            $this - the counter container
            e - jQuery Event object

        See Also:

            <animateDigit>
    */
    function initCounter($this, e){
        $this.find('.digit').each(function(){
            var $display = $(this);
            var $digit = $display.find('span');

            $digit.html([0,1,2,3,4,5,6,7,8,9,0].reverse().join('<br/>'))
            $digit.css({ 
                top: '-' + (parseInt($display.height()) * (10 - parseInt($digit.attr('title')))) + 'px'
            });
        });

        animateDigit($this.find('.digit:last'), e);
    }

    /*
        Function: animateDigit

        Moves the digit indicated by $this one step. If the end of the counter has been reach, the subsequent digit(s) will also be rotated

        Parameters:

            $this - digit to be rotated
            e - jQuery Event object
    */
    function animateDigit($this, e){
        var $counter = $this.closest('.counter');
        var $display = $this;
        var $digit = $display.find('span');

        // If we've reached the end of the counter, tick the previous digit
        if(parseInt($digit.css('top')) == -1 * parseInt($display.height())){
            animateDigit($display.prevAll('.digit:first'), e);
        }

        $digit.animate({
            top: '+=' + $display.height() + 'px'
        }, 500, function(){
            // Repeat the animation on a semi-random interval
            if($display.index('.counter .digit') == $counter.find('.digit').length - 1){
                setTimeout(function(){
                    animateDigit($display, e);
                }, Math.max(550, Math.random() * 10000));
            }

            // If we've reached the end of the counter, loop back to the top
            if(parseInt($digit.css('top')) > -1 * parseInt($display.height())){
                $digit.css({
                    top: '-' + (parseInt($display.height()) * 10) + 'px'
                });
            }
        });
    }

    $(function(){
        initCounter($('.counter'), $.Event('load'));
    });
})(jQuery);
		
		  