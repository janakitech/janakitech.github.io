/* ---------------------------------------------------------------------- */
/*		Sticky Menu
/* ---------------------------------------------------------------------- */

jQuery(document).ready(function(){ 
	jQuery(function() {
	    var header = jQuery('#header.horizontal-w');
	    var navHomeY = header.offset().top;
	    var isFixed = false;
	    var $w = jQuery(window);
	    $w.scroll(function(e) {
	        var scrollTop = $w.scrollTop();
	        var shouldBeFixed = scrollTop > 120;
	        if (shouldBeFixed && !isFixed) {
	            header.addClass('sticky');
	            isFixed = true;
	           
	        }
	        else if (!shouldBeFixed && isFixed)
	        {
	            header.removeClass("sticky");
	            isFixed = false;
	        }
	        e.preventDefault();
	    });
	});
});
