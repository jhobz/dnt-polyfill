module.exports = function(window) {
    return Boolean(
        window && (
			// Internet Explorer 11 uses window.doNotTrack rather than navigator.doNotTrack.
			// Safari 7.1.3+ uses window.doNotTrack rather than navigator.doNotTrack.
			window.doNotTrack === '1' ||
			window.navigator && (
				window.navigator.doNotTrack === '1' ||
				// Prior to Gecko 32 Firefox would report navigator.doNotTrack with values of yes and no rather than 1 and 0.
				window.navigator.doNotTrack === 'yes' ||
				// Internet Explorer 9 and 10 use a vendor prefix, i.e. navigator.msDoNotTrack.
				window.navigator.msDoNotTrack === '1'
			)
		)
	);
}
