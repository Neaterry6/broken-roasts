'use strict';

// Plain node:test — no test framework to install.
const test = require('node:test');
const assert = require('node:assert');

const roasts = require('./index.js');
const data = require('./lib/data.js');

test('every style returns a non-empty string', () => {
  for (const style of roasts.STYLES) {
    const r = roasts.getRoast(style);
    assert.strictEqual(typeof r, 'string', `${style} should return a string`);
    assert.ok(r.length > 5, `${style} should return something real`);
  }
});

test('default style is general', () => {
  const r = roasts.getRoast();
  assert.ok(data.generalRoasts.includes(r), 'default should draw from general');
});

test('unknown style throws a helpful TypeError', () => {
  assert.throws(() => roasts.getRoast('nonsense'), (err) => {
    assert.ok(err instanceof TypeError);
    assert.match(err.message, /Unknown roast style/);
    assert.match(err.message, /savage/, 'should list the valid options');
    return true;
  });
});

test('getPersonalized puts the name in the line', () => {
  const r = roasts.getPersonalized('Dave');
  assert.ok(r.includes('Dave'), `expected "Dave" in: ${r}`);
});

test('getPersonalized rejects empty names', () => {
  assert.throws(() => roasts.getPersonalized(''), TypeError);
  assert.throws(() => roasts.getPersonalized('   '), TypeError);
  assert.throws(() => roasts.getPersonalized(null), TypeError);
});

test('getRoasts returns the requested count', () => {
  assert.strictEqual(roasts.getRoasts(5).length, 5);
  assert.strictEqual(roasts.getRoasts(1).length, 1);
});

test('getRoasts clamps silly input instead of blowing up', () => {
  assert.strictEqual(roasts.getRoasts(0).length, 1);
  assert.strictEqual(roasts.getRoasts(9999).length, 50);
  assert.strictEqual(roasts.getRoasts('abc').length, 1);
});

test('getAll returns a copy, not the live array', () => {
  const all = roasts.getAll('savage');
  assert.strictEqual(all.length, data.savageRoasts.length);
  all.push('tampered');
  assert.strictEqual(
    roasts.getAll('savage').length,
    data.savageRoasts.length,
    'mutating the result must not affect the source'
  );
});

test('stats counts every style', () => {
  const s = roasts.stats();
  for (const style of roasts.STYLES) {
    assert.ok(s[style] > 0, `${style} should have roasts`);
  }
});

test('no empty strings anywhere in the corpus', () => {
  for (const [style, pool] of Object.entries(data.DATA)) {
    for (const line of pool) {
      assert.ok(
        typeof line === 'string' && line.trim().length > 0,
        `${style} has an empty entry`
      );
    }
  }
});

test('no duplicate lines within a style', () => {
  for (const [style, pool] of Object.entries(data.DATA)) {
    const seen = new Set();
    for (const line of pool) {
      assert.ok(!seen.has(line), `duplicate in ${style}: ${line}`);
      seen.add(line);
    }
  }
});

test('randomness actually varies', () => {
  const seen = new Set();
  for (let i = 0; i < 200; i++) seen.add(roasts.getRoast('light'));
  assert.ok(seen.size > 1, 'should not always return the same roast');
});
