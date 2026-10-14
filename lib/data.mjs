// ESM wrapper for the raw roast corpus, so `import ... from 'broken-roasts/data'`
// resolves the same way `require('broken-roasts/data')` does.
import data from './data.js';

export const STYLES = data.STYLES;
export const DATA = data.DATA;
export const savageRoasts = data.savageRoasts;
export const lightRoasts = data.lightRoasts;
export const generalRoasts = data.generalRoasts;
export const savageBurns = data.savageBurns;
export const funnyRoasts = data.funnyRoasts;
export const personalizedRoasts = data.personalizedRoasts;

export default data;
