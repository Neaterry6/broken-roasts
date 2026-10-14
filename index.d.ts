/** Available roast flavours. */
export type Style = 'savage' | 'light' | 'general' | 'burn' | 'funny';

/** Every available style, in display order. */
export declare const styles: Style[];
export declare const STYLES: Style[];

/** Get a random roast in the given style. Defaults to 'general'. */
export declare function getRoast(style?: Style): string;

/** Get `count` roasts at once (1-50). */
export declare function getRoasts(count?: number, style?: Style): string[];

/** Get a roast aimed at a specific name. */
export declare function getPersonalized(name: string): string;

/** Get every roast of a style (a copy, safe to mutate). */
export declare function getAll(style?: Style): string[];

/** Count of roasts per style. */
export declare function stats(): Record<Style, number>;

declare const _default: {
  getRoast: typeof getRoast;
  getRoasts: typeof getRoasts;
  getPersonalized: typeof getPersonalized;
  getAll: typeof getAll;
  stats: typeof stats;
  styles: typeof styles;
  STYLES: typeof STYLES;
};
export default _default;
