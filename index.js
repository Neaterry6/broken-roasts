'use strict';

/**
 * broken-roasts — a zero-dependency roast generator.
 *
 * Five flavours, hundreds of lines, no network calls, no API keys. Works offline
 * and in the browser (it's plain CommonJS with an ESM wrapper).
 *
 *   const { getRoast, getPersonalized } = require('broken-roasts');
 *   getRoast('savage');            // -> "You have the perfect face for radio."
 *   getPersonalized('Dave');       // -> "Dave, I'd agree with you, but..."
 */

const { STYLES, DATA, personalizedRoasts } = require('./lib/data');

/** @typedef {'savage'|'light'|'general'|'burn'|'funny'} Style */

/** All available styles. */
const styles = STYLES;

/**
 * Pick a random item from an array.
 * @template T
 * @param {T[]} arr
 * @returns {T}
 */
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Get a random roast.
 * @param {Style} [style='general'] One of: savage, light, general, burn, funny.
 * @returns {string} A roast line.
 * @throws {TypeError} If the style is not recognised.
 */
function getRoast(style = 'general') {
  const key = String(style || '').toLowerCase();
  const pool = DATA[key];
  if (!pool) {
    throw new TypeError(
      `Unknown roast style: "${style}". Use one of: ${STYLES.join(', ')}.`
    );
  }
  return pick(pool);
}

/**
 * Get a random roast aimed at a specific name.
 * @param {string} name The name to roast.
 * @returns {string} A personalised roast line.
 * @throws {TypeError} If name is empty.
 */
function getPersonalized(name) {
  const clean = String(name || '').trim();
  if (!clean) throw new TypeError('getPersonalized(name) needs a non-empty name.');
  return pick(personalizedRoasts(clean));
}

/**
 * Get several roasts at once. Handy for bots that post a combo.
 * @param {number} [count=3]
 * @param {Style} [style='general']
 * @returns {string[]}
 */
function getRoasts(count = 3, style = 'general') {
  const n = Math.max(1, Math.min(50, Number(count) || 1));
  return Array.from({ length: n }, () => getRoast(style));
}

/**
 * Get every roast of a style (useful for building your own UI).
 * @param {Style} [style='general']
 * @returns {string[]} A copy, so callers can't mutate the source.
 */
function getAll(style = 'general') {
  const key = String(style || '').toLowerCase();
  const pool = DATA[key];
  if (!pool) {
    throw new TypeError(
      `Unknown roast style: "${style}". Use one of: ${STYLES.join(', ')}.`
    );
  }
  return pool.slice();
}

/** How many roasts exist per style. */
function stats() {
  return Object.fromEntries(
    Object.entries(DATA).map(([k, v]) => [k, v.length])
  );
}

module.exports = {
  getRoast,
  getRoasts,
  getPersonalized,
  getAll,
  stats,
  styles,
  STYLES,
};
