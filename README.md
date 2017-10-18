# jquery.badge

This is a simple jQuery plug-in to overlay a counter badge on top of another element on a page.

To use it, simply chain the function onto a jQuery DOM element. For example, if you have the following HTML ...
```html
<div id="inbox" class="button">My Inbox</div>
```

... and you apply the following JavaScript ...
```javascript
$( '#inbox' ).badge( 8 );
```

... you will get ...

![button with badge](example.png)

You can pass either a number or a text string as the first parameter. If you pass 0, false, or an empty string, the badge will not be displayed (although see "Advanced options" below).

Note: Make sure the parent element has its position set to `relative`, or the badge may not appear in the correct location.

### Advanced options
You can control the location of the badge by passing a second parameter to the badge function. The parameter must be set to "top", "bottom", or "inline".
```
$( '#inbox' ).badge( 8, 'bottom' );
```

You can force the badge to display zeroes by passing `true` as a third parameter.
```
$( '#inbox' ).badge( 0, 'top', true );
```
