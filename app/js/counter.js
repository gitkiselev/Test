$(document).ready(function(){

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
        }, 100, function(){
            
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

});
	