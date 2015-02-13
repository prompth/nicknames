'use strict';
var test = require('ava');
var nicknames = require('./');

test(function (t) {
	t.assert(nicknames.female.length > 0);
	t.assert(nicknames.male.length > 0);
	t.assert(nicknames.all.length > 0);
	t.assert(nicknames.femaleRandom());
	t.assert(nicknames.maleRandom());
	t.assert(nicknames.allRandom());
	t.assert(nicknames.allRandom() !== nicknames.allRandom());
	t.assert(nicknames.all[0] === 'Abby');
	t.assert(nicknames.all[1] === 'Romeo');
	t.end();
});
