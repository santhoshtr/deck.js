/*!
Deck JS - deck.i18n
Copyright (c) 2012 Santhosh thottingal
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

(function ($, deck, window, undefined) {
	var $d = $(document),
		$window = $(window);
	/*
	Extends defaults/options.
	
	options.language
		Language to be used for the presentation
	*/
	$.extend(true, $[deck].defaults, {
		language: 'en'
	});
	
	function i18n(language) {
		var i18n = $.i18n({
			messageLocationResolver: function(locale){
				return 'i18n/'+locale+'.json';
			}
		});
		i18n.locale = language;
		slides = $[deck]('getSlides');
		$.each(slides, function(i, $el) {
			$el.i18n();
		});
	}
	
	$[deck]('extend', 'i18n', function(language) {
		i18n(language);
	} );
	
	$d.bind('deck.init', function() {
		var opts = $[deck]('getOptions');
	
		i18n(opts.language);
		
		$('select.deck-language').on( 'change', function() {
			language = $( 'select.deck-language option:selected' ).val();
			i18n(language);
		});
	});
})(jQuery, 'deck', this);