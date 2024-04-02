export declare const foucRoot: () => string;
/**
 * This is a special block that will prevent the rendering of the listed elements
 * until React has properly passed the components their initial set of props during
 * its first render. Without this, it is possible for Mortar elements to render to
 * the page before they have been passed props from React (when not SSR'd).
 */
export declare const reactFoucRoot: () => string;
