/*
 * jQuery Badge plugin
 *
 * @license MIT
 *
 * @author Ryan Kaldari <rkaldari@wikimedia.org>, 2012
 * @author Andrew Garrett <agarrett@wikimedia.org>, 2012
 * @author Marius Hoch <hoo@online.de>, 2012
 */

/**
 * @class jQuery.plugin.badge
 */
( function ( $ ) {
	/**
	 * Put a badge on an item on the page. The badge container will be appended to the 
	 *  selected element(s).
	 *
	 *     $element.badge( 5 );
	 *     $element.badge( '100+' );
	 *     $element.badge( 'New', 'inline' );
	 *     $element.badge( 0, 'upper-right', true );
	 *
	 * @param {number|string} text The value to display in the badge. If the value is falsey
	 *  (0, null, false, '', etc.), any existing badge will be removed.
	 * @param {string} [position=top] The position of the badge. Options are:
	 *  inline, top, bottom.
	 * @param {boolean} [displayZero=false] True if the number zero should be displayed,
	 *  false if the number zero should result in the badge being hidden
	 * @return {jQuery}
	 * @chainable
	 */
	$.fn.badge = function ( text, position, displayZero ) {
		var $badge = this.find( '.badge' ),
			badgeStyleClass,
			isImportant = true,
			displayBadge = true;

		// Set the position of the badge
		if ( position === 'inline' ||
			position === 'top' ||
			position === 'bottom'
		) {
			badgeStyleClass = 'badge-' + position;
		} else {
			badgeStyleClass = 'badge-top';
		}

		// If we're displaying zero, ensure style to be non-important (grey instead of red)
		if ( text === 0 ) {
			isImportant = false;
			if ( !displayZero ) {
				displayBadge = false;
			}
		// If text is falsey (besides 0), hide the badge
		} else if ( !text ) {
			displayBadge = false;
		}

		if ( displayBadge ) {
			// If a badge already exists, reuse it
			if ( $badge.length ) {
				$badge
					.toggleClass( 'badge-important', isImportant )
					.find( '.badge-content' ).text( text );
			} else {
				// Otherwise, create a new badge with the specified text and style
				$badge = $( '<div class="badge"></div>' )
					.addClass( badgeStyleClass )
					.toggleClass( 'badge-important', isImportant )
					.append(
						$( '<span class="badge-content"></span>' ).text( text )
					)
					.appendTo( this );
			}
		} else {
			$badge.remove();
		}
		return this;
	};

	/**
	 * @class jQuery
	 * @mixins jQuery.plugin.badge
	 */
}( jQuery ) );
