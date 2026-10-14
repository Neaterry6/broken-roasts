// ESM wrapper. Keeps the implementation in one place (index.js) and just
// re-exports it, so both module systems behave identically.
import mod from './index.js';

export const getRoast = mod.getRoast;
export const getRoasts = mod.getRoasts;
export const getPersonalized = mod.getPersonalized;
export const getAll = mod.getAll;
export const stats = mod.stats;
export const styles = mod.styles;
export const STYLES = mod.STYLES;

export default mod;
