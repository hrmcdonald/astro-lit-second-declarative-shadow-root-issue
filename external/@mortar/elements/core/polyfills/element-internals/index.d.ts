import './element-internals.js';
export * from './types.js';
/**
 * This is a copy of https://github.com/calebdwilliams/element-internals-polyfill
 * We've ported everything here so we can wrap the init logic and force it to
 * only load with lit's `isServer` is false.
 *
 * Current equivalent version: 1.3.5
 */
