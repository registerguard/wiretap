// Code ideas:


/* Since 'category' is required for event tracking, the flag can be for
 * this data attribute and the rest can be achieved through checking
 * 'this'. Wrap in a window.load so that it is always called after the main
 * GA code.
 */
$(window).load(function () {
	
	$('a').attr('data-ga-category').click(function(){
		
		$this       = $(this),
		ga_category = $this.attr('data-ga-category'),
		ga_action   = $this.attr('data-ga-action'),
		ga_label    = $this.attr('data-ga-label'),
		ga_value    = $this.attr('data-ga-value');
		
		_gaq.push(['_trackEvent', ga_category, ga_action, ga_label, ga_value])
		
	});
	
});

/*
 * HTML:
 *
 * Use data-ga-___ like this:
 * <a href="#" data-ga-category="foo" data-ga-action="baz" data-ga-label="bar" data-ga-value="xxx">My link</a>
 *
 */