import { MteElement } from '../base-classes';
/**
 * Utility method that ensures an element is not tree-shaken
 *
 * This element loops through the provided classes and constructs them. This forces
 * any and all build tooling to _not_ tree-shake away the component. Tree-shaking is
 * an issue because elements are only imported but not directly referenced.
 */
export declare function registerElements(...elements: typeof MteElement[]): void;
