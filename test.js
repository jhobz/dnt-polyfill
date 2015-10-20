var test = require('tape');
var dnt = require('./index');

test('it should return true when navigator.dnt is 1', function (t) {
	var window = {
		navigator: {
			doNotTrack: '1'
		}
	};
	t.equal(dnt(window), true);
	t.end();
});

test('it should return false when navigator.dnt is not 1', function (t) {
	t.equal(dnt({navigator: { doNotTrack: '0' } }), false, 'window.navigator.doNotTrack is "0"');
	t.equal(dnt({navigator: { doNotTrack: 'unspecified' } }), false, 'window.navigator.doNotTrack is "0"');
	t.equal(dnt({navigator: {}}), false, 'window.navigator.doNotTrack is not defined');
	t.equal(dnt({}), false, 'window.navigator is not defined');
	t.equal(dnt(undefined), false, 'window is not defined');
	t.end();
});

test('it should handle "yes" and "no" values for window.navigator.doNotTrack', function (t) {
	t.equal(dnt({navigator: { doNotTrack: 'yes' } }), true, 'window.navigator.doNotTrack is "yes"');
	t.equal(dnt({navigator: { doNotTrack: 'no' } }), false, 'window.navigator.doNotTrack is "no"');
	t.end();
});

test('it should handle window.navigator.msDoNotTrack', function (t) {
	t.equal(dnt({navigator: { msDoNotTrack: '1' } }), true, 'window.navigator.msDoNotTrack is "1"');
	t.equal(dnt({navigator: { msDoNotTrack: '0' } }), false, 'window.navigator.msDoNotTrack is "0"');
	t.equal(dnt({navigator: { msDoNotTrack: 'unspecified' } }), false, 'window.navigator.msDoNotTrack is "unspecified"');
	t.end();
});

test('it should handle window.doNotTrack', function (t) {
	t.equal(dnt({ doNotTrack: '1' }), true, 'window.doNotTrack is "1"');
	t.equal(dnt({ doNotTrack: '0' }), false, 'window.doNotTrack is "0"');
	t.equal(dnt({ doNotTrack: 'unspecified' }), false, 'window.doNotTrack is "unspecified"');
	t.end();
});
